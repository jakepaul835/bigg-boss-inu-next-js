"use client"
import footerlogo from '../../public/footer-logo.png';
import twittericon from '../../public/twitter.png';
import telegramicon from '../../public/telegram.png';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mb-lg-0 mb-4">
                            <div className="footer-icons d-md-flex align-items-center justify-content-between">
                                <a href="/" className='footer-logo'>
                                    <img src="footer-logo.png" alt="" className='mb-md-0 mb-4' />
                                </a>
                                <ul className='d-flex align-items-center justify-content-center flex-column'>
                                    <div className='footer-follow-us'>
                                        <p>Follow Us</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center social-icons'>
                                        <li>
                                            <a href="/" className='d-inline-block'><img src="twitter.png" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="/" className='d-inline-block'><img src="telegram.png" alt="" /></a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 position-relative">
                            <div className="footer-link">
                                <h4 className='me-md-5'>NAVIGATION</h4>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Presale</a></li>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Whitepaper</a></li>
                                    <li><a href="/">How to Buy</a></li>
                                    <li><a href="/">Roadmap</a></li>
                                    <li><a href="/">Tokenomics</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
