import React from 'react'
import tokenomicsheading from "../images/tokenomics-heading.png";
import tokenomicsgraph from "../images/tokenomics-graph.png";

export default function Tokenomics() {
    return (
        <>
            <section className="tokenomics-sec" id="tokenomics">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-lg-0 mb-5">
                            <div className="tokenomics-left-content">
                                <img src={tokenomicsheading} alt="" className="vert-move" />
                                <ul>
                                    <li data-aos="fade-up">
                                        <div className="tokenomic-box bg-purple">
                                            <p>presale</p>
                                            <h4>25%</h4>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="tokenomic-box bg-yellow">
                                            <p>LIQUIDITY</p>
                                            <h4>10%</h4>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="tokenomic-box bg-blue">
                                            <p>STAKING</p>
                                            <h4>25%</h4>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="tokenomic-box bg-green">
                                            <p>REWARD</p>
                                            <h4>15%</h4>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="tokenomic-box bg-red">
                                            <p>MARKETING</p>
                                            <h4>25%</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tokenomics-content-right text-center">
                                <img src={tokenomicsgraph} alt="vdfvf"/>
                                <h3 className="text-white mt-4 mb-4">
                                    TOKEN SUPPLY : 1,000,000,000 $PEME
                                </h3>
                                <div className="tokenomics-code d-flex align-items-center justify-content-center">
                                    <h3 className="text-white me-4 mb-0">CA:</h3>
                                    <input
                                        name="myInput"
                                        value={0x57fd3480581f72b0df1adead72b4181a52a1d7de}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
