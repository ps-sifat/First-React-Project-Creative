import React from "react";
import "./Service.css";
import { FaBars } from "react-icons/fa6";
import { FaDoorOpen, FaCode } from "react-icons/fa";
import { TbSquaresSelected } from "react-icons/tb";
import { PiIntersectSquareBold } from "react-icons/pi";
import { SiMaterialdesignicons } from "react-icons/si";

const Service = () => {
  const allService = [
    {
      id: 1,
      icon: <FaBars />,
      title: "UI/UX Design",
      description: `There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.`,
    },
    {
      id: 2,
      icon: <FaDoorOpen />,
      title: "Web Development",
      description: `There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.`,
    },
    {
      id: 3,
      icon: <TbSquaresSelected />,
      title: "Digital Marketing",
      description: `There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.`,
    },
    {
      id: 4,
      icon: <PiIntersectSquareBold />,
      title: "Graphic Design",
      description: `There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.`,
    },
    {
      id: 5,
      icon: <FaCode />,
      title: "Web Design",
      description: `There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.`,
    },
    {
      id: 6,
      icon: <SiMaterialdesignicons />,
      title: "Motion Design",
      description: `There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.`,
    },
  ];
  return (
    <>
      <div className="servicePart">
        {/* titile */}
        <div className="servicePart__title">
          <h3 className="servicePart__heding">Our Service</h3>
          <p className="servicePart__details">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        {/* titile */}
        <div className="container">
          <div className="serviceAllCard">
            {allService?.map((item) => (
              <div className="service__box" key={item.id}>
                <span className="service__box__icon">{item.icon}</span>
                <h4 className="service__box__heding">{item.title}</h4>
                <p className="service__box__detials">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* titile */}
      </div>
    </>
  );
};

export default Service;
