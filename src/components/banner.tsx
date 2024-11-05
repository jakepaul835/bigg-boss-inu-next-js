"use client"

import 'aos/dist/aos.css';
import twittericon from "../../public/twitter.png";
import telegramicon from "../../public/telegram.png";
import Bannertitle from "../../public/banner-title.png";
import BannerLeftImg from "../../public/banner-left-img.png";
import Image from 'next/image';

export default function Banner() { 
    return (
        <section className="banner-section position-relative" id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className='banner-left-img'>
                            <Image src={BannerLeftImg} alt="vcv" className='vert-move' />
                        </div>
                    </div>
                    <div className="col-lg-7 banner-calculation">
                        <div className='banner-title-img'>
                            <Image src={Bannertitle} alt="xcvxc" />
                        </div>
                        <div className="d-sm-flex justify-content-center">
                            <div className="ms-lg-4 mb-sm-0 mb-4 d-flex align-items-center flex-column">
                                <div className='social-icons'>
                                    <a href="/" className="mb-2 d-inline-block">
                                        <Image src={twittericon} alt="" />
                                    </a>
                                    <br />
                                    <a href="/" className="mb-2 d-inline-block">
                                        <Image src={telegramicon} alt="Telegram" />
                                    </a>
                                </div>
                                <p className="mb-2 d-inline-block follow-us">
                                    Follow Us 
                                </p>
                            </div>
                            <div className='coming-soon'>
                                <span>PRESALE </span> 
                                     <span>LIVE</span>
                                       <span>SOON!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
