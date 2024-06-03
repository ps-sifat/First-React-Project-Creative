import React from "react";
import "./Banner.css";
import bannerImg from "../../assets/bannerRight.png"

const Banner = () => {
  return (
    <>
      <div className="bannerMain">
        <div className="container">
            {/* left part  */}
            <div className="bannerLeft">
                <h1>We Are Digital Product Design Agency</h1>
                <p className="bannerLeft__details">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <a href="#" className="bannerLeft__btn">
                    Get Started
                </a>
            </div>
            {/* right part  */}
            <div className="bannerRight">
                <picture>
                    <img className="bannerImg" src={bannerImg} alt={bannerImg} />
                </picture>
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
