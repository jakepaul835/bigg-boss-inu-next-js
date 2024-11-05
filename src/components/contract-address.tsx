"use client"
import React from 'react';
import GraphCharacter from "../../public/graph-character.png";
import Graph from "../../public/graph-img.png";
import Image from "next/image";
export default function ContactAddress() {
    return (
        <>
            <section className="contact-address-section" id="contactaddress">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 text-center mb-lg-0 mb-5'>
                            <Image src={GraphCharacter} alt="" className='vert-move' />
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
                            <Image src={Graph} alt="" className='vert-move'/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
