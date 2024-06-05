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
  const allPortfolio = [
    {
      id:1,
      img:protfolio1,
    },
    {
      id:2,
      img:protfolio2,
    },
    {
      id:3,
      img:protfolio3,
    },
    {
      id:4,
      img:protfolio4,
    },
    {
      id:5,
      img:protfolio5,
    },
    {
      id:6,
      img:protfolio6,
    },
    {
      id:7,
      img:protfolio7,
    },
    {
      id:8,
      img:protfolio8,
    },
  ]
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
            {allPortfolio?.map((item)=>(
              <div className="protfolio" key={item.id}>
              <picture>
                <img src={item.img} alt={item.img} />
              </picture>
              <div className="protfolio__allImg__profile">
                <h4 className="profile__title">Graphic Design</h4>
                <a href="#" className="profile__btn">See Details <span><FaArrowRightLong/></span></a>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Protfolio;
