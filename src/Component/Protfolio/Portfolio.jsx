import React from "react";
import "./Portfolio.css"
// image 
import protfolio1 from "../../assets/protfolio__1.png";
import protfolio2 from "../../assets/protfolio__2.png";
import protfolio3 from "../../assets/protfolio__3.png";
import protfolio4 from "../../assets/protfolio__4.png";
import protfolio5 from "../../assets/protfolio__5.png";
import protfolio6 from "../../assets/protfolio__6.png";
import protfolio7 from "../../assets/protfolio__7.png";
import protfolio8 from "../../assets/protfolio__8.png";
// icon 
import { FaArrowRightLong } from "react-icons/fa6";
const Protfolio = () => {
  return (
    <>
      <div className="protfolioPart">
        <div className="protfolio__title">
          <h4 className="protfolio__heding">Our Work Portfolio</h4>
          <p className="protfolio__hedingDitails">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="container">
          <div className="protfolio__allImg">
            <div className="protfolio">
              <picture>
                <img src={protfolio1} alt={protfolio1} />
              </picture>
              <div className="protfolio__allImg__profile">
                <h4 className="profile__title">Graphic Design</h4>
                <a href="#" className="profile__btn">See Details <span><FaArrowRightLong/></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Protfolio;
