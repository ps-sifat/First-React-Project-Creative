/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import "./Portfolio.css";
import Overlay from "../../CommonComponent/Overlay";
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
      id: 1,
      protImg: protfolio1,
      title: "Graphic Design",
      discrip: "See Details",
      icon: <FaArrowRightLong />,
      link: "#",
    },
    {
      id: 2,
      protImg: protfolio2,
      title: "Graphic Design",
      discrip: "See Details",
      icon: <FaArrowRightLong />,
      link: "#",
    },
    {
      id: 3,
      protImg: protfolio3,
      title: "Graphic Design",
      discrip: "See Details",
      icon: <FaArrowRightLong />,
      link: "#",
    },
    {
      id: 4,
      protImg: protfolio4,
      title: "Graphic Design",
      discrip: "See Details",
      icon: <FaArrowRightLong />,
      link: "#",
    },
    {
      id: 5,
      protImg: protfolio5,
      title: "Graphic Design",
      discrip: "See Details",
      icon: <FaArrowRightLong />,
      link: "#",
    },
    {
      id: 6,
      protImg: protfolio6,
      title: "Graphic Design",
      discrip: "See Details",
      icon: <FaArrowRightLong />,
      link: "#",
    },
    {
      id: 7,
      protImg: protfolio7,
      title: "Graphic Design",
      discrip: "See Details",
      icon: <FaArrowRightLong />,
      link: "#",
    },
    {
      id: 8,
      protImg: protfolio8,
      title: "Graphic Design",
      discrip: "See Details",
      icon: <FaArrowRightLong />,
      link: "#",
    },
  ];

  // todo: handelpopUp funtionality implementon
  // @param({})

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
          <div className="protfolioBottom">
            {allPortfolio?.map((item) => (
              <Overlay item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Protfolio;
