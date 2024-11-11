"use client"

export default function HowToBuy() {
    return (
        <>
            <section className="howtobuy-sec" id="howtobuy">
                <div className="container">
                    <div className="row justify-content-between row-gap-5 position-relative">
                        <div className='col-lg-12 d-lg-none d-block'>
                            <img src="howtobuy-main-img.png" alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <div className="how-tobuy-bg how-tobuy-bg1">
                                <img src="howtobuy1.png" alt="" />
                                <div className='htb-heading'>
                                    <h3>CREATE WALLET</h3>
                                </div>
                                <p>Download MetaMask or your preferred wallet from the App Store or Google Play Store for free. Desktop users can download the Google Chrome extension by visiting metamask.io.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-for-mobile-3">
                            <div className="how-tobuy-bg how-tobuy-bg3">
                                <img src="howtobuy3.png" alt="" />
                                <div className='htb-heading'>
                                    <h3>GO TO UNISWAP</h3>
                                </div>
                                <p>Connect to Uniswap. Go to app.uniswap.org in Google Chrome or use the browser within your MetaMask app. Connect your wallet. Paste the $BIGBOSS token address into Uniswap, select $BIGBOSS COIN, and confirm. When MetaMask prompts you
                                    for a wallet signature, sign it.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="how-tobuy-bg how-tobuy-bg2">
                                <img src="howtobuy2.png" alt="" />
                                <div className='htb-heading'>
                                    <h3>GET SOME ETH</h3>
                                </div>
                                <p>Ensure you have ETH in your wallet to trade for $BIGBOSS. If you don’t have any ETH, you can purchase it directly 
                                    on MetaMask, transfer from another wallet, or buy on another exchange and send it to your wallet.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 order-for-mobile-4">
                            <div className="how-tobuy-bg how-tobuy-bg4">
                                <img src="howtobuy4.png" alt="" />
                                <div className='htb-heading'>
                                    <h3>SWAP TO $bigboss</h3>
                                </div>
                                <p>Rade your ETH for $BIGBOSS. We have ZERO taxes, so you don’t need to worry about buying with a specific slippage,
                                     although you may need to use slippage during times of market volatility.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-12 d-lg-block d-none'>
                            <img src="howtobuy-main-img.png" alt="" className='howtobuy-main'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
