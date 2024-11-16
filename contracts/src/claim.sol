//SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "./Presale.sol"; // Assuming contract A is in A.sol
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Claim is ReentrancyGuard, AccessControl{
    using SafeERC20 for IERC20;

    IERC20 public immutable token;
    Presale public presale;
    mapping(address => bool) public hasClaimed;
    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");

    uint256 public constant DEFAULT_DELAY = 12 hours;
    mapping(bytes4 selector => uint256 timestamp) private _timestamps;

    event EmitClaim(uint256 amount);

    constructor (Presale _presale, 
                IERC20 _token,
                address DAO
                ) {
        presale = _presale;
        token = _token;
        // set admin role
        _grantRole(DEFAULT_ADMIN_ROLE, DAO);
    }

    modifier onlyClaim() {
        require(presale.balances(msg.sender) > 0 && !hasClaimed[msg.sender], "validatePool: pool exists?");
        _;
    }

    function claimable() public view returns(uint256){
        if (!hasClaimed[msg.sender])
            return presale.balances(msg.sender);
        return 0;
    }

    function claim() external nonReentrant onlyClaim {
        hasClaimed[msg.sender] = true;
        uint256 balance = presale.balances(msg.sender);
        safeTransfer(msg.sender, balance);
        emit EmitClaim(balance);
    }

    function safeTransfer(address _to, uint256 _amount) internal {
        uint256 balance = token.balanceOf(address(this));
        if (_amount > balance) {
            if (balance > 0) {
                token.safeTransfer(_to, balance);
            }
        } else {
            if (_amount > 0) {
                token.safeTransfer(_to, _amount);
            }
        }
    }

    function rescueFunds(IERC20 _token, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 delayedTill = _timestamps[0x78e3214f];

        if(delayedTill > 0 && delayedTill <= block.timestamp) {
            if (address(_token) == address(0)) {
                require(amount <= address(this).balance, "Claim: Wrong amount");
                (bool success, ) = payable(msg.sender).call{value: amount}("");

                require(success, "Payout: Transfer coin failed");
            } else {
                require(amount <= _token.balanceOf(address(this)), "Presale: Wrong amount");

                _token.safeTransfer(msg.sender, amount);
            }

                _timestamps[0x78e3214f] = 0;
        } else {
            _timestamps[0x78e3214f] = block.timestamp + DEFAULT_DELAY;
        }
   }

}