import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Button from 'react-bootstrap/Button';

export const UnlockButton = (props : any) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
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
                  <Button variant="primary" onClick={openConnectModal} type="button" {...props}>
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button variant="primary" onClick={openChainModal} {...props}>
                    Wrong network
                  </Button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {/** <Button variant="primary"
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </Button> 
                  <Button variant="primary" onClick={openAccountModal} type="button" {...props}>
                    {account.displayName}
                     account.displayBalance
                      ? ` (${account.displayBalance})`
                      : '' *
                  </Button>*/}
                  <ConnectButton
                    accountStatus={{
                      smallScreen: 'avatar',
                      largeScreen: 'full',
                    }}
                  />
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
