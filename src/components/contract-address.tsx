"use client"
import React from 'react';
export default function ContactAddress() {
    return (
        <>
            <section className="contact-address-section" id="tokenomics">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 text-center mb-lg-0 mb-5'>
                            <img src="graph-character.png" alt="" className='vert-move' />
                            <div className="tokenomics-content-right text-center">
                                <h3 className="text-white mt-4 mb-3 text-center">Contract Address:</h3>
                                <div className="tokenomics-code d-flex align-items-center justify-content-center">
                                <input 
                                    name="myInput" 
                                    defaultValue="0x57fd3480581f72b0df1adead72b4181a52a1d7de" 
                                />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src="graph-img.png" alt="" className='vert-move'/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
