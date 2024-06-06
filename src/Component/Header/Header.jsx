import React from "react";
import logo from "../../assets/navLogo.png";
import "./Header.css";

const Header = () => {
  const navItem = ["Home", "About", "Service", "Blog", "Contact"];
  return (
    <>
      <div className="container">
        <div className="mainNav">
          <div className="navLogo">
            <img className="logo" src={logo} alt={logo} />
          </div>
          <div className="navMenu">
            <ul className="navMenu__main">
              {navItem.map((item) => (
                <li key={item.id}>
                  <a className="navList" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="navBtn">
            <a className="N_btn" href="#">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
