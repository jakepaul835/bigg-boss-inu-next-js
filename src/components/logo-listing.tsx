"use client"
import Image from "next/image";
import yahooimg from "../../public/yahoo.png";
import coinmarketcapimg from "../../public/coinmarketcap.png";
import acceswireimg from "../../public/accesswire.png";
import icoholderimg from "../../public/icoholder.png";
import chainwireimg from "../../public/chainwire.png";
import mitradeimg from "../../public/mitrade.png";
import marketwatchimg from "../../public/marketwatch.png";
import cryptodailyimg from "../../public/cryptodaily.png";
import cryptonomistimg from "../../public/cryptonomist.png";
import globalnewswireimg from "../../public/globenewswire.png";

export default function LogoListing() {
    return (
        <>
            <section className="marquee-line logo-listing-sec">
                <div className="marquee marquee-first">
                    <div className="marquee--inner">
                        <span>
                            <div className="bbobbi-tx">
                                <Image src={yahooimg} alt="" />
                                <Image src={coinmarketcapimg} alt="" />
                                <Image src={acceswireimg} alt="" />
                                <Image src={icoholderimg} alt="" />
                                <Image src={chainwireimg} alt="" />
                                <Image src={yahooimg} alt="" />
                                <Image src={coinmarketcapimg} alt="" />
                                <Image src={acceswireimg} alt="" />
                                <Image src={icoholderimg} alt="" />
                                <Image src={chainwireimg} alt="" />
                                <Image src={yahooimg} alt="" />
                                <Image src={coinmarketcapimg} alt="" />
                                <Image src={acceswireimg} alt="" />
                                <Image src={icoholderimg} alt="" />
                                <Image src={chainwireimg} alt="" />
                                <Image src={yahooimg} alt="" />
                                <Image src={coinmarketcapimg} alt="" />
                                <Image src={acceswireimg} alt="" />
                                <Image src={icoholderimg} alt="" />
                                <Image src={chainwireimg} alt="" />
                            </div>
                        </span>
                    </div>
                </div>
                <div className="marquee marquee-second">
                    <div className="marquee--inner">
                        <span>
                            <div className="bbobbi-tx">
                                <Image src={mitradeimg} alt="" />
                                <Image src={marketwatchimg} alt="" />
                                <Image src={cryptodailyimg} alt="" />
                                <Image src={cryptonomistimg} alt="" />
                                <Image src={globalnewswireimg} alt="" />
                                <Image src={mitradeimg} alt="" />
                                <Image src={marketwatchimg} alt="" />
                                <Image src={cryptodailyimg} alt="" />
                                <Image src={cryptonomistimg} alt="" />
                                <Image src={globalnewswireimg} alt="" />
                                <Image src={mitradeimg} alt="" />
                                <Image src={marketwatchimg} alt="" />
                                <Image src={cryptodailyimg} alt="" />
                                <Image src={cryptonomistimg} alt="" />
                                <Image src={globalnewswireimg} alt="" />
                                <Image src={mitradeimg} alt="" />
                                <Image src={marketwatchimg} alt="" />
                                <Image src={cryptodailyimg} alt="" />
                                <Image src={cryptonomistimg} alt="" />
                                <Image src={globalnewswireimg} alt="" />
                            </div>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
