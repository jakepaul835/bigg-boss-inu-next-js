"use client"
import roadmapheading from "../../public/roadmap-heading.png";
import roadmapimg from "../../public/roadmap-img.png";
import roadmapicon1 from "../../public/roadmap-heading-icon1.png"
import roadmapicon2 from "../../public/roadmap-heading-icon2.png"
import roadmapicon3 from "../../public/roadmap-heading-icon3.png"
import roadmapicon4 from "../../public/roadmap-heading-icon4.png"
import Image from "next/image";
export default function Roadmap() {
    return (
        <>
            <section className="roadmap-section" id="roadmap">
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <Image src={roadmapheading} alt="" className="vert-move" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 mb-xl-0 mb-5">
                            <div className='roadmap-datacard1'>
                                <div className='roadmap-heading'>
                                    <h3>Establishing the Boss</h3>
                                </div>
                                <div className='icon-img'>
                                    <Image src={roadmapicon1} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li><strong>Launch Big Boss Inu</strong> with a powerful presale.</li>
                                        <li><strong>Build a strong community</strong> through social media and partnerships.</li>
                                        <li><strong>Set the stage</strong> for Big Boss Inu to become a top memecoin contender.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 mb-xl-0 mb-5">
                            <div className='roadmap-datacard2'>
                                <div className='roadmap-heading'>
                                    <h3>Spreading the Influence</h3>
                                </div>
                                <div className='icon-img'>
                                    <Image src={roadmapicon2} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li><strong>Begin major marketing campaigns</strong> to spread awareness worldwide.</li>
                                        <li><strong>List on top exchanges</strong> to make Big Boss Inu accessible to everyone.</li>
                                        <li><strong>Collaborate with influencers and brands</strong> to strengthen the Big Boss Inu presence.</li>
                                        <li><strong>Grow our army</strong> — unite meme lovers and crypto fans under the Big Boss brand.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 mb-xl-0 mb-5">
                            <div className='roadmap-datacard3'>
                                <div className='roadmap-heading'>
                                    <h3>Making Crypto Mainstream</h3>
                                </div>
                                <div className='icon-img'>
                                    <Image src={roadmapicon3} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li><strong>Educate and raise awareness</strong> about  BIG BOSS INU and cryptocurrency through global campaigns.</li>
                                        <li><strong>Expand accessibility</strong> with wallet integrations and user-friendly platforms.</li>
                                        <li><strong>Promote Big Boss Inu as a symbol</strong> of crypto’s mainstream adoption.</li>
                                        <li><strong>Host events and contests</strong> to engage and excite the community.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 mb-xl-0 mb-5">
                            <div className='roadmap-datacard4'>
                                <div className='roadmap-heading'>
                                    <h3>Becoming the Meme King</h3>
                                </div>
                                <div className='icon-img'>
                                    <Image src={roadmapicon4} alt="efsf" />
                                </div>
                                <div>
                                    <ul className='roadmap-data-list list'>
                                        <li><strong>Aim for record-breaking community growth</strong>—build the largest meme token army.</li>
                                        <li><strong>Secure top positions on exchanges</strong>—make Big Boss Inu the go-to memecoin.</li>
                                        <li><strong>Achieve mainstream media coverage</strong> to bring Big Boss Inu into the spotlight.</li>
                                        <li><strong>Declare Big Boss Inu as the Boss of All Memes</strong>—confident, unstoppable, and legendary.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <Image src={roadmapimg} alt="" className='w-100' />
                </div>
            </section>

        </>
    )
}
