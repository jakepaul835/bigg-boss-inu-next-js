"use client"

import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
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
    const [loading, setLoading] = useState(true);
   
    
    //const account = useAccount().address?.toString()  
    //useFetchPublicData(account, "presaleJohan")
    //const presaleJohan = useFetchUserData<PresaleJohan>(account, "presaleJohan")
      
   
       useEffect(() => {
           AOS.init({ duration: 1000 });
   
           const fetchPresaleData = async () => {
               try {
                   const response = await axios.get('https://nadeemdesigns.com/dev/bigboss/aapi.php');
                   // const response = await axios.get('http://localhost/static/bigboss/aapi.php');
                   setPresaleData(response.data);
                   // console.log(response.data)
               } catch (error) {
                   console.error("Error fetching presale data:", error);
               } finally {
                   setLoading(false);
               }
           };
   
           fetchPresaleData();
       }, []);



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
                                                <p>{presaleData?.PRESALE}</p>
                                                <h5>{presaleData?.PEME}</h5>
                                            </li>
                                            <li>
                                                <p>{presaleData?.TOTALBONUS}</p>
                                                <h5>{presaleData?.PEMEEQUAL}</h5>
                                            </li>
                                        </ul>
                                        <p className="amount-raised">Total Amount Raised :</p>
                                        <h3 className="amount-text text-start">{presaleData?.VESTINGBONUS}</h3>
                                        <div className="progress">
                                            <div style={{ width: `${presaleData?.TEXTBOXVAL}%` }}  className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{presaleData?.TEXTBOXVAL}%</div>
                                        </div>
                                        <div className="listing-price text-center">
                                            <p>{presaleData?.UPTO} : <span>{presaleData?.percentage}</span></p>
                                        </div>
                                    </div>
                                    <div className='buy-bigboss'>
                                        <div className="pay-box">
                                            <div className="paybox-inner">
                                                <h5 className="text-start">You Pay <span>{presaleData?.STAGEBONUSVAL}</span></h5>
                                                <div className="d-flex align-items-center paybox-box">
                                                    <img src={"../calc-icon.png"} alt="" />
                                                    <div className='lh-1'>
                                                        <h4>{presaleData?.BUYINGBONUSVAL}</h4>
                                                        {/* <p>{presaleData?.BUYINGBONUSVAL}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="paybox-inner">
                                                <h5 className="text-start">You Receive <span className='bigboss'>{presaleData?.BUYINGBONUS}</span></h5>
                                                <div className="d-flex align-items-center paybox-box">
                                                    <img src={"../calc-icon2.png"} alt="" />
                                                    <div className='lh-1'>
                                                        <h4>{presaleData?.PEMERAISED}</h4>
                                                        {/* <p>{presaleData?.PEMERAISED}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner-calc-btn mb-0">
                                            <a href="/" className="btn btn-primary d-block">{presaleData?.PEMERAISEDVAL}</a>
                                            <p className="text-center mb-1 connect-text">*{presaleData?.LOADERPERCENTAGE}</p>
                                        </div>
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
