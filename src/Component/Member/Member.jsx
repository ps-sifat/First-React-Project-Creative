import React from "react";
import "./Member.css";
import member01 from "../../assets/member01.png";
import member02 from "../../assets/member02.png";
import member03 from "../../assets/member03.png";

const Member = () => {
  const allmember = [
    {
      id: 1,
      memberImg: member01,
      name: "Mahid Ahmed",
      des: "UX Designer",
    },
    {
      id: 2,
      memberImg: member02,
      name: "Hasan Imam",
      des: "UI Designer",
    },
    {
      id: 3,
      memberImg: member03,
      name: "Kazi Afia",
      des: "Digital Marketor",
    },
  ];
  return (
    <>
      <div id="memberPart">
        {/* header  */}
        <div className="memberPart__title">
          <div className="memberPart__header">Our Expert Team Member</div>
          <div className="memberPart__ditails">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </div>
        </div>
        {/* header  */}
        {/* mermber part */}
        <div className="container">
          <div className="memberWarrper">
            {allmember?.map((item) => (
              <div className="member" key={item.id}>
                <picture>
                  <img src={item.memberImg} alt={member01} />
                </picture>
                <div className="memberOverlay">
                  <h4 className="memberOverlay__title">{item.name}</h4>
                  <p className="memberOverlay__details">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
