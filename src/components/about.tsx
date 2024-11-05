import React from "react";
import abouttextimg from "../../public/about-text-img.png";
import aboutrightimg from "../../public/about-img-right.png";
import Image from "next/image";
export default function About() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content text-center">
                <Image src={abouttextimg} alt="" className="vert-move" />
                <p>
                  BIG BOSS INU IS THE NEXT BIG THING IN CRYPTO-READY TO TAKE
                  OVER THE ENTIRE MEME AND CRYPTO WORLD. WE'RE HERE TO LEAD,
                  STAND OUT, AND MAKE A REAL IMPACT. WITH BIG BOSS INU, WE'RE
                  NOT JUST CREATING A TOKEN; WE'RE BUILDING A MOVEMENT THAT'S
                  ALL ABOUT STRENGTH, AMBITION, AND UNITY. <br/><br/>OUR MISSION IS CLEAR:
                  BECOME THE TOP MEMECOIN, MAKE CRYPTO ACCESSIBLE FOR EVERYONE,
                  AND SET A NEW STANDARD IN THE INDUSTRY. BIG BOSS INU IS HERE
                  TO MAKE WAVES, GROW FAST. AND LEAD THE WAY. JOIN US AS WE RISE
                  TO THE TOP AND BECOME THE TRUE BOSS OF ALL MEMES.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image src={aboutrightimg} alt="" className="vert-move" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
