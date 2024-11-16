"use client"

// import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import axios from 'axios';
import { useAccount } from 'wagmi';
import { useFetchUserData } from '@/web3/state';
import { PresaleJohan } from '@/web3/state/types';
import { useDepositCoin, useDepositUSDC, useDepositUSDT } from '@/web3/hooks/usePresale';
import { FaSortDown } from "react-icons/fa6";
import { getBalanceNumber } from '@/web3/utils/formatBalance';
import BigNumber from 'bignumber.js';
import { useApprove } from '@/web3/hooks/useApprove';
import { getPresaleJohanAddress, getUsdtAddress, getUsdcAddress } from '@/web3/utils/addressHelpers';
// import { useAccount } from 'wagmi';
// import { useFetchPublicData, useFetchUserData } from '@/web3/state';
// import { PresaleJohan } from '@/web3/state/types';


// Define a TypeScript interface for presale data structure
interface PresaleData {
    PEPEMEMECOIN?: string;
    // PRESALE?: string;
    // PEME?: string;
    // TOTALBONUS?: string;
    // PEMEEQUAL?: string;
    // VESTINGBONUS?: string;
    TEXTBOXVAL?: number;
    UPTO?: string;
    percentage?: string;
    // STAGEBONUSVAL?: string;
    // BUYINGBONUSVAL?: string;
    // BUYINGBONUS?: string;
    // PEMERAISED?: string;
    // PEMERAISEDVAL?: string;
    // LOADERPERCENTAGE?: string;
}


export default function Banner() {
    const [presaleData, setPresaleData] = useState<PresaleData | null>(null);
    const [pending, setPending] = useState(false);
    // const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [currentToken, setCurrentToken] = useState("ETH");
    const inputRef = useRef<HTMLInputElement>(null);
    const [ethValue, setEthValue] = useState("");
    const [tokenAmount, setTokenAmount] = useState("");
    const [tokenWorth, setTokenWorth] = useState(0.00);
    const [ethWorth, setEthWorth] = useState(0.00);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const fireInputChange = (token: string) => {
    if (inputRef.current) {
        const syntheticEvent = {
            target: {
              value: tokenAmount,
            },
          };
          handleTokenInputChange(syntheticEvent, token);
          setPending(false)
    }
  }

    useEffect(() => {
        // AOS.init({ duration: 1000 });

        const fetchPresaleData = async () => {
            try {
                const response = await axios.get('https://nadeemdesigns.com/dev/bigboss/aapi.php');
                // const response = await axios.get('http://localhost/static/bigboss/aapi.php');
                setPresaleData(response.data);
                // console.log(response.data)
            } catch (error) {
                console.error("Error fetching presale data:", error);
            } finally {
                // setLoading(false);
            }
        };

        fetchPresaleData();
    }, []);


    const account = useAccount().address?.toString()
    const presaleJohan = useFetchUserData<PresaleJohan>(account, "presaleJohan")
    // console.log("WEB 3 DATA")
    // console.log({ presaleJohan })

    const timestampUnix = 1731351889000
    const timestampOffset = 60 * 60 * 1000;
    const percentageOffset = 1.0
    const unix = Date.now()
    // console.log(unix)

    const offsetIndex = Math.floor((unix - timestampUnix) / timestampOffset)
    // console.log(offsetIndex)



    let progress = 0.0
    let raised = 0.0;
    if (presaleData && presaleJohan) {
        const contractProgress = presaleJohan?.stageProgress ?? 0.0
        const maxStageTokens = Number(presaleJohan?.stageCurrent?.max ?? 0.0); // Max tokens for the current stage
        const tokenPrice = presaleJohan.tokenPrice; // USD value per token (current stage)

        // Calculate the raw progress, including multiple cycles, offset by the initial stage
        const cycleProgress = percentageOffset * offsetIndex + contractProgress;

        // Ensure that the progress wraps between contractProgress and 100
        if (cycleProgress >= 100) {
            // Modulo to get the remainder within the cycle range, plus contractProgress to restart from the offset
            progress = ((cycleProgress - contractProgress) % (100 - contractProgress)) + contractProgress;
        } else {
            progress = cycleProgress;
        }

        // Round progress to two decimal places for display
        progress = Math.round(progress * 100.0) / 100.0;

        // Calculate USD earned within the current cycle only
        const cycleTokens = ((progress - contractProgress) / 100) * maxStageTokens;
        const cycleUSD = cycleTokens * tokenPrice;
        // Total USD raised combines contractUSD from all previous stages and current cycleUSD
        const contractUSD = Number(presaleJohan.totalSoldInUSD);
        raised = Math.round(cycleUSD + contractUSD);
    }

    const TokensPerEth = presaleJohan?.tokensPerEth ?? 0.0
    const tokensPerDollar = presaleJohan?.tokensPerDollar ?? 0.0
    const ethPrice = presaleJohan?.ethPrice ?? 0.0
    const tokenPrice = presaleJohan?.tokenPrice ?? 0.0

    const handleEthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;

        // Check if the input value is a valid number (allow empty input or 0)
        if (isNaN(parseFloat(newValue)) || parseFloat(newValue) === 0) {
            setEthValue(newValue);  // Allow empty or 0 input to reset
            setTokenAmount('');
            return;
        }

        let DECIMALS = 1e8
        let NEGDECIMALS = 1e-8
        let FIXED = 8
        if (currentToken !== "ETH") {
            DECIMALS = 1e6
            NEGDECIMALS = 1e-6
            FIXED = 6
        }

        // Limit the precision to 8 decimal places if more than 8 decimals are present
        if (newValue.includes('.') && newValue.split('.')[1].length > FIXED) {
            newValue = (parseFloat(newValue) + NEGDECIMALS).toFixed(FIXED); // Limit the decimal places to 8
        } else {
            // If it's a valid input with precision <= 8 decimals, format the value to 8 decimals
            newValue = (Math.ceil(Number(newValue) * DECIMALS) / DECIMALS).toString();

            // If the value is in scientific notation, convert it to normal decimal format
            if (newValue.includes("e")) {
                newValue = Number(newValue).toFixed(FIXED); // Force it into standard decimal format
            }
        }

        // Set the formatted ETH value
        setEthValue(newValue);

        // Calculate the corresponding token amount
        let calculatedTokenAmount = 0
        if (currentToken === "ETH") {
            calculatedTokenAmount = Math.floor(Number(newValue) * TokensPerEth); 
            setEthWorth(Math.round(Number(newValue) * ethPrice * 1e2) / 1e2)
        }
        else {
            calculatedTokenAmount = Math.floor(Number(newValue) * tokensPerDollar); 
            setEthWorth(Math.round(Number(newValue) * 1e2) / 1e2)
        }
        setTokenAmount(calculatedTokenAmount.toString());
        setTokenWorth(Math.round(Number(calculatedTokenAmount) * tokenPrice * 1e2) / 1e2);
    };

    // Update left input when the right input changes, if needed
    const handleTokenInputChange = (e: { target: { value: string } }, token = "") => {
        const newValue = Math.floor(Number(e.target.value));
        setTokenAmount(newValue.toString());
        setTokenWorth(Math.round(Number(newValue) * tokenPrice * 1e2) / 1e2);
        if (Number(newValue) > 0) {
            let ethValueMax = 0;

            if (token === "" ? currentToken === "ETH" : token === "ETH") {
                ethValueMax = Math.ceil((Number(newValue) / TokensPerEth) * 1e8) / 1e8;
                setEthValue(ethValueMax.toFixed(8));
                setEthWorth(Math.round(Number(ethValueMax) * ethPrice * 1e2) / 1e2)
            }
            else {
                ethValueMax = Math.ceil((Number(newValue) / tokensPerDollar) * 1e6) / 1e6;
                setEthValue(ethValueMax.toFixed(6));
                setEthWorth(Math.round(Number(ethValueMax) * 1e2) / 1e2)
            }
        }
        else
            setEthValue("")
    };

    const { onDepositCoin} = useDepositCoin()
    const { onDepositUSDT} = useDepositUSDT()
    const { onDepositUSDC} = useDepositUSDC()

    // Action function for the button
    const handleBuy = async () => {
        // Call an API or perform other actions with ethValue here
        setPending(true)
        let tx = ""
        if (currentToken === "ETH") {
            tx = await onDepositCoin(ethValue)
        }
        else if (currentToken === "USDC") {
            tx = await onDepositUSDC(ethValue)
        }
        else {
            tx = await onDepositUSDT(ethValue)
        }
        setPending(false)
        console.log(tx)
    };

    const { onApprove } = useApprove()
    const usdcApproval = getBalanceNumber(new BigNumber(presaleJohan?.userData?.usdcAllowance ?? "0"), 6);
    const usdtApproval = getBalanceNumber(new BigNumber(presaleJohan?.userData?.usdtAllowance ?? "0"), 6);

    const handleApprove = async () => {
        let tx = ""
        setPending(true)
        if (currentToken === "USDC"){
            tx = await onApprove(getUsdcAddress(), getPresaleJohanAddress(),ethValue,6)
        }
        else {
            tx = await onApprove(getUsdtAddress(), getPresaleJohanAddress(),ethValue,6)
        }
        setPending(false)
        console.log(tx)
    }

    const drawActionButtons = () => {
        if (currentToken === "USDT"){
            if (Number(ethValue) <= usdtApproval)
                return <button disabled={Number(ethValue) < 0.000001 || pending || Number(tokenAmount) < 1} onClick={handleBuy} className="btn btn-primary d-block">
                    BUY $BIG BOSS INU
                </button>
            else
                return <button disabled={pending} onClick={handleApprove} className="btn btn-primary d-block">
                    Enable USDT
                </button>
        }
            
        else if (currentToken === "USDC") {
            if (Number(ethValue) <= usdcApproval)
                return <button disabled={Number(ethValue) < 0.000001 || pending || Number(tokenAmount) < 1} onClick={handleBuy} className="btn btn-primary d-block">
                    BUY $BIG BOSS INU
                </button>
            else
                return <button disabled={pending} onClick={handleApprove} className="btn btn-primary d-block">
                    Enable USDC
                </button>
        }
        return <button disabled={Number(ethValue) < 0.00000001 || pending || Number(tokenAmount) < 1} onClick={handleBuy} className="btn btn-primary d-block">
                BUY $BIG BOSS INU
            </button>
    }

    const formateNum = (_num: string | number | bigint): string => {
        const num = typeof _num === "bigint" ? Number(_num) : Number(_num);
        return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(num);
    };


    return (
        <section className="banner-section position-relative" id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className='banner-left-img'>
                            <img src="banner-left-img.png" alt="vcv" className='vert-move' />
                        </div>
                    </div>
                    <div className="col-lg-7 banner-calculation">
                        <div className='banner-title-img'>
                            <img src="banner-title.png" alt="xcvxc" />
                        </div>
                        <div className="d-sm-flex justify-content-center">
                            <div className="ms-lg-4 mb-sm-0 mb-4 d-flex align-items-center flex-column">
                                <div className='social-icons'>
                                    <a href="/" className="mb-2 d-inline-block">
                                        <img src="telegram.png" alt="" />
                                    </a>
                                    <br />
                                    <a href="/" className="mb-2 d-inline-block">
                                        <img src="telegram.png" alt="Telegram" />
                                    </a>
                                </div>
                                <p className="mb-2 d-inline-block follow-us">
                                    Follow Us
                                </p>
                            </div>
                            <div className="banner-calc">
                                <div className="bigboss-presale">
                                    <h2>BUY BEFORE PRICE INCREASE</h2>
                                    <div className="banner-calc-inner">
                                        <h3>BUY $BIG BOSS INU NOW!</h3>
                                        <ul>
                                            <li>
                                                <p>Current Price</p>
                                                <h5>${presaleJohan?.tokenPrice ?? 0.0}</h5>
                                            </li>
                                            <li>
                                                <p>Next Stage Price</p>
                                                <h5>${presaleJohan?.tokenPriceNext ?? 0.0}</h5>
                                            </li>
                                        </ul>
                                        <div className="listing-price text-center">
                                            <p>Listing Price : <span>${0.007}</span></p>
                                        </div>
                                        <p className="amount-raised">Total Amount Raised :</p>
                                        <h3 className="amount-text text-start">${formateNum(raised)}</h3>

                                    </div>

                                    <div className="progress">
                                        <div
                                            style={{ width: `${progress}%` }}
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={Number(progress)}  // Convert to number or fallback to 0
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            {progress}%
                                        </div>
                                    </div>

                                    <div className='buy-bigboss'>
                                        {
                                            account ?
                                                <>
                                                    <div className="pay-box">
                                                        <div className="paybox-inner">
                                                            <h5 className="text-start flex">
                                                                You Pay
                                                                <div className="dp-container">
                                                                    <button className="dp-button" onClick={toggleDropdown}>
                                                                        {currentToken} <span><FaSortDown /></span>
                                                                    </button>
                                                                    <div className={`dp-menu ${isOpen ? "show" : ""}`}>
                                                                        <div onClick={()=>{
                                                                            setCurrentToken("ETH")
                                                                            toggleDropdown()
                                                                            fireInputChange("ETH")}} className="dp-item">ETH</div>
                                                                        <div onClick={()=>{
                                                                            setCurrentToken("USDT")
                                                                            toggleDropdown()
                                                                            fireInputChange("USDT") }} className="dp-item">USDT</div>
                                                                        <div onClick={()=>{
                                                                            setCurrentToken("USDC") 
                                                                            toggleDropdown()
                                                                            fireInputChange("USDC") }} className="dp-item">USDC</div>
                                                                    </div>
                                                                </div>
                                                            </h5>
                                                            <div className="d-flex align-items-center paybox-box">
                                                                {
                                                                    currentToken === "USDC" ?
                                                                        <img src="../calc-icon-usdc.png" alt="icon" />
                                                                    : currentToken === "USDT" ?
                                                                    <img src="../calc-icon-usdt.png" alt="icon" />
                                                                    :
                                                                    <img src="../calc-icon.png" alt="icon" />
                                                                }
                                                                <div className="lh-1">
                                                                    <input
                                                                        type="number"
                                                                        value={ethValue}
                                                                        onChange={handleEthInputChange}
                                                                        className="form-control input1"
                                                                        placeholder="Type value"
                                                                        style={{ border: 'none', outline: 'none', color: '#627ed9' }}
                                                                    />
                                                                    <p>{`$${ethWorth}`}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="paybox-inner">
                                                            <h5 className="text-start">
                                                                You Receive <span className="bigboss">BIG BOSS INU</span>
                                                            </h5>
                                                            <div className="d-flex align-items-center paybox-box">
                                                                <img src="../calc-icon2.png" alt="icon" />
                                                                <div className="lh-1" >
                                                                    <input
                                                                        ref={inputRef}
                                                                        type="number"
                                                                        value={tokenAmount}
                                                                        onChange={handleTokenInputChange}
                                                                        className="form-control input2"
                                                                        placeholder="Type amount"
                                                                        style={{ border: 'none', outline: 'none', color: '#e4851b' }}
                                                                    />
                                                                    <p>{`$${tokenWorth}`}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="banner-calc-btn mb-0">
                                                        {drawActionButtons()}
                                                    </div>
                                                </>
                                                :
                                                <p className="text-center mb-1 connect-text">
                                                    *Connect wallet to buy
                                                </p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
