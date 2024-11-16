import React, { useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Button from 'react-bootstrap/Button';
import { useAccount, useDisconnect } from 'wagmi';
import { useFetchUserData } from '@/web3/state';
import { PresaleJohan } from '@/web3/state/types';


export const UnlockButton = () => {
  const { disconnect } = useDisconnect();
  const [disconnectState, setDisconnectState] = useState(false);

  
  const account = useAccount().address?.toString();  
  const presaleJohan = useFetchUserData<PresaleJohan>(account, "presaleJohan")

  return (
    <ConnectButton.Custom >
      {({
        account,
        chain,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button className='connectbtn' onClick={openConnectModal}>
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button variant="primary" onClick={openChainModal}>
                    Wrong network
                  </Button>
                );
              }
              return (
                <div style={{ display: 'flex', alignItems: 'center' , position: 'relative' }}>
                  <div  onClick={()=> disconnectState ? setDisconnectState(false) : setDisconnectState(true)} className={`btnwrapper ${disconnectState ? "btnwrapperDis" : ""}`}>
                    <div className='accountD'>
                      <img
                        alt='profile'
                        src={'profile.png'}
                        style={{ borderRadius: 999 }}
                        width={40}
                        height={40}
                      />
                      <div className='intext'>{account.displayName}</div>
                      {
                        chain.iconUrl && (
                          <div className='rightImg'><img 
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                          /></div>
                          
                        )
                      }
                    </div>
                     <div className={`disconnectBox ${disconnectState ? '' : 'hide'}`}>
                      <div className='details'>
                        <div className='d'>
                          <h6><span>Balance</span><span>$BIGBOSSINU</span></h6>
                          <h5>{presaleJohan?.userData ? presaleJohan.userData?.balance.toString() : "..."}</h5>
                        </div>
                        <div className='rightImg'>
                          <img 
                          alt={'bigbossinu'}
                          src={'bigbossinu.svg'}
                        />
                        </div>
                        
                      </div>
                      <button onClick={() => disconnect()} type="button">
                        Disconnect Wallet
                      </button>
                    </div>
                  </div >
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};


export default UnlockButton
