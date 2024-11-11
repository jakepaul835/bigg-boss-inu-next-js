"use client"

// import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import axios from 'axios';
import { useAccount } from 'wagmi';
import { useFetchUserData } from '@/web3/state';
import { PresaleJohan } from '@/web3/state/types';
import { useDepositCoin } from '@/web3/hooks/usePresale';
// import { useAccount } from 'wagmi';
// import { useFetchPublicData, useFetchUserData } from '@/web3/state';
// import { PresaleJohan } from '@/web3/state/types';


    // Define a TypeScript interface for presale data structure
    interface PresaleData {
        PEPEMEMECOIN?: string;
        PRESALE?: string;
        PEME?: string;
        TOTALBONUS?: string;
        PEMEEQUAL?: string;
        VESTINGBONUS?: string;
        TEXTBOXVAL?: number;
        UPTO?: string;
        percentage?: string;
        STAGEBONUSVAL?: string;
        BUYINGBONUSVAL?: string;
        BUYINGBONUS?: string;
        PEMERAISED?: string;
        PEMERAISEDVAL?: string;
        LOADERPERCENTAGE?: string;
    }


export default function Banner() {
    const [presaleData, setPresaleData] = useState<PresaleData | null>(null);
    const [pending, setPending] = useState(false);
    // const [loading, setLoading] = useState(true);
   
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
  console.log("WEB 3 DATA")
  console.log(presaleJohan)

  let progress = 0.0
  if (presaleData && presaleJohan) {
    progress = Math.round((presaleData?.TEXTBOXVAL ?? 0.0 + presaleJohan?.stageProgress ?? 0.0) * 100.0) / 100.0
    if (progress >= 99.0)
        progress = 99.0
  }

  const TokensPerEth = presaleJohan?.tokensPerEth ?? 0.0
  // const tokensPerDollar = presaleJohan?.tokensPerDollar ?? 0.0

  const [ethValue, setEthValue] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");

  // Update right input (PEMERAISED) when the left input (BUYINGBONUSVAL) changes
  const handleEthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEthValue(newValue);
    if (Number(newValue) > 0)
        setTokenAmount(Math.round((Number(newValue)) * TokensPerEth).toString()); // Update right input based on factor `x`
    else
        setTokenAmount("")
  };

  // Update left input when the right input changes, if needed
  const handleTokenInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTokenAmount(newValue);
    if (Number(newValue) > 0)
        setEthValue(Math.round((Number(newValue)) / TokensPerEth).toString()); // Update left input based on factor `x`
    else
        setEthValue("")
  };

  const { onDepositCoin } = useDepositCoin()

  // Action function for the button
  const handleButtonClick = async () => {
    console.log('Action with value:', ethValue);
    // Call an API or perform other actions with ethValue here
    console.log("BEFORE")
    setPending(true)
    var tx = await onDepositCoin(ethValue)
    setPending(false)
    console.log("AFTER")
    console.log(tx)
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
                                <div className='bigboss-presale'>
                                    <div className="banner-calc-inner">
                                        <h3>{presaleData?.PEPEMEMECOIN}</h3>
                                        <ul>
                                            <li>
                                                <p>Current Price</p>
                                                <h5>{presaleJohan?.tokenPrice ?? 0.0}</h5>
                                            </li>
                                            <li>
                                                <p>Next Stage Price</p>
                                                <h5>{presaleJohan?.tokenPriceNext ?? 0.0}</h5>
                                            </li>
                                        </ul>
                                        <p className="amount-raised">Total Amount Raised :</p>
                                        <h3 className="amount-text text-start">${presaleJohan ? presaleJohan?.totalSoldInUSD : 0.0}</h3>
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
                                        <div className="listing-price text-center">
                                            <p>{presaleData?.UPTO} : <span>{presaleData?.percentage}</span></p>
                                        </div>
                                    </div>
                                    <div className='buy-bigboss'>
                                        {
                                        account ? 
                                        <>
                                        <div className="pay-box">
                                            <div className="paybox-inner">
                                                <h5 className="text-start">
                                                You Pay <span>{presaleData?.STAGEBONUSVAL}</span>
                                                </h5>
                                                <div className="d-flex align-items-center paybox-box">
                                                <img src="../calc-icon.png" alt="icon" />
                                                <div className="lh-1">
                                                    <input
                                                    type="number"
                                                    value={ethValue}
                                                    onChange={handleEthInputChange}
                                                    className="form-control input1"
                                                    placeholder="Type value"
                                                    style={{ border: 'none', outline: 'none', color: '#627ed9' }}
                                                    />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="paybox-inner">
                                                <h5 className="text-start">
                                                You Receive <span className="bigboss">{presaleData?.BUYINGBONUS}</span>
                                                </h5>
                                                <div className="d-flex align-items-center paybox-box">
                                                <img src="../calc-icon2.png" alt="icon" />
                                                <div className="lh-1" >
                                                    <input
                                                    type="number"
                                                    value={tokenAmount}
                                                    onChange={handleTokenInputChange}
                                                    className="form-control input2"
                                                    placeholder="Type amount"
                                                    style={{ border: 'none', outline: 'none', color: '#e4851b' }}
                                                    />
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner-calc-btn mb-0">
                                            <button disabled={Number(ethValue) <= 0 || pending} onClick={handleButtonClick} className="btn btn-primary d-block">
                                                BUY $BIG BOSS INU
                                            </button>
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
