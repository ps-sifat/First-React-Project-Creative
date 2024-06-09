import React from "react";
import "./Member.css";

const Member = () => {
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
            <picture>
              <img src="" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
