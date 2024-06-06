import React from "react";

const Overlay = ({ item }) => {
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
          </div>
        )}
      </div>
    </>
  );
};

export default Overlay;
