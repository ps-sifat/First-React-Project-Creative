// import React from "react";
import React, { useState } from "react";

const Overlay = ({ item }) => {
  console.log(item);
  const [popUpOverlay, setpopUpOverlay] = useState(false);

  return (
    <>
      <div
        className="protfolooCard"
        onClick={() => setpopUpOverlay(!popUpOverlay)}
      >
        <img src={item.protImg} alt={item.protImg} />
        {popUpOverlay && (
          <div className="protfolioCardOverlay">
            <p className="protfolioCardOverlay__header">{item.title}</p>
            <a className="protfolioCardOverlay__link" href="#">
              {item.discrip} <span>{item.icon}</span>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Overlay;
