import React from 'react'

export default function Verified() {
    return (
        <>
            <section className="verified-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h2 className="main-heading text-center text-white" data-aos="fade-up" data-aos-duration="1000">
                                100% SECURE AND VERIFIED
                            </h2>
                        </div>
                    </div>
                    <div className="row position-relative">
                        <div className="star-imgs">
                            <img src="star1.png" alt="" className="star" />
                            <img src="star2.png" alt="" className="star" />
                            <img src="star3.png" alt="" className="star" />
                            <img src="star4.png" alt="" className="star" />
                        </div>
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="verified-bg vg-green d-flex align-items-md-center align-items-start flex-md-row flex-column-reverse" data-aos="fade-up" data-aos-duration="1000">
                                <div>
                                    <h3>Team is KYC VERIFIED</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut
                                    </p>
                                </div>
                                <img src="kyc-img.png" alt="" className="mb-md-0 mb-4" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="verified-bg vg-blue d-flex align-items-md-center align-items-start flex-md-row flex-column-reverse" data-aos="fade-up" data-aos-duration="1000">
                                <div>
                                    <h3>audited by solidproof</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut
                                    </p>
                                </div>
                                <img src="solidproof.png" alt="" className="mb-md-0 mb-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
