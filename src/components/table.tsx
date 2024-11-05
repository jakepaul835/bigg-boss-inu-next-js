"use client"
import chosenoneimg from "../../public/chosenone.png";
import bigbossicon from "../../public/bigboss-icon.png";
import dogeicon from "../../public/dogeicon.png";
import shibaicon from "../../public/shibainu.png";
import pepeicon from "../../public/pepeicon.png";
import sparkleicon from "../../public/sparkle.png";
import crossicon from "../../public/cross.png"
import Image from "next/image";

export default function Table() {
    return (
        <section className="table-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <div className="text-center">
                            <Image src={chosenoneimg} alt="" className="vert-move" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="chosen-onebox">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-md-9 col-12">
                                    <ul className="d-flex justify-content-between coin-list">
                                        <li className="mx-2">
                                            <Image src={bigbossicon} alt="" className="first-child-img"/>
                                        </li>
                                        <li className="mx-2">
                                            <Image src={dogeicon} alt="" />
                                        </li>
                                        <li className="mx-2">
                                            <Image src={shibaicon} alt="" />
                                        </li>
                                        <li className="mx-2">
                                            <Image src={pepeicon} alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row sparkle-row px-0 align-items-center">
                                <div className="col-md-3 col-sm-12 ps-0">
                                    <a href="/" className="btn btn-primary text-uppercase py-4">
                                        FUNNY MEME CONCEPT
                                    </a>
                                </div>
                                <div className="col-md-9 col-sm-12">
                                    <div className="row align-items-center justify-content-between px-md-0 px-4 pe-md-4">
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <div className='table-span'>
                                                <span>Top-tier humor, Bosspersona </span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Original<br /> Meme</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Strong Shiba<br /> theme</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Pepe's<br /> Legacy</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row sparkle-row px-0 align-items-center">
                                <div className="col-md-3 col-sm-12 ps-0">
                                    <a href="/" className="btn btn-primary text-uppercase">
                                        TOKEN USE<br /> CASES
                                    </a>
                                </div>
                                <div className="col-md-9 col-sm-12">
                                    <div className="row align-items-center justify-content-between px-md-0 px-4">
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <div className='table-span'>
                                                <span>Extensive with<br /> staking & voting</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Simple<br /> currency</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Utility in<br /> use cases</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Limited<br /> use cases</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row sparkle-row px-0 align-items-center">
                                <div className="col-md-3 col-sm-12 ps-0">
                                    <a href="/" className="btn btn-primary text-uppercase">
                                        STAKING<br /> REWARDS
                                    </a>
                                </div>
                                <div className="col-md-9 col-sm-12">
                                    <div className="row align-items-center justify-content-between px-md-0 px-4">
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <div className='table-span'>
                                                <span>Massive APY for holders!</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={crossicon} alt="" className="cross" />
                                            <div className='table-span'>
                                                <span>None</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Moderate<br /> staking</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Basic<br /> rewards</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row sparkle-row px-0 align-items-center">
                                <div className="col-md-3 col-sm-12 ps-0">
                                    <a href="/" className="btn btn-primary text-uppercase">
                                        MONETIZATION OUTSIDE OF TOKEN
                                    </a>
                                </div>
                                <div className="col-md-9 col-sm-12">
                                    <div className="row align-items-center justify-content-between px-md-0 px-4">
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <div className='table-span'>
                                                <span>Partnerships & real-world use</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Minimal<br /> partnerships</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Merchandise<br /> sales</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Limited<br /> options</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row sparkle-row px-0 align-items-center">
                                <div className="col-md-3 col-sm-12 ps-0">
                                    <a href="/" className="btn btn-primary text-uppercase">
                                        COMMUNITY VOTING POWER
                                    </a>
                                </div>
                                <div className="col-md-9 col-sm-12">
                                    <div className="row align-items-center justify-content-between px-md-0 px-4">
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <div className='table-span'>
                                                <span>Governance with every vote</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={crossicon} alt="" className="" />
                                            <div className='table-span'>
                                                <span>No voting<br /> mechanism</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Community-driven</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Basic <br />governance</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row sparkle-row px-0 align-items-center">
                                <div className="col-md-3 col-sm-12 ps-0">
                                    <a href="/" className="btn btn-primary text-uppercase">
                                        VESTING<br/> MODEL
                                    </a>
                                </div>
                                <div className="col-md-9 col-sm-12">
                                    <div className="row align-items-center justify-content-between px-md-0 px-4">
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <Image src={sparkleicon} alt="" className="star" />
                                            <div className='table-span'>
                                                <span>Anti-dump mechanisms, security </span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={crossicon} alt="" className="" />
                                            <div className='table-span'>
                                                <span>None</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Lockup <br/>periods</span>
                                            </div>
                                        </div>
                                        <div className="col-2 text-center py-2 px-0">
                                            <Image src={sparkleicon} alt="" />
                                            <Image src={sparkleicon} alt="" />
                                            <div className='table-span'>
                                                <span>Weak vesting<br/> model</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
