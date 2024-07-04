import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/navLogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import FooterItem from "../../CommonComponent/FooterItem";

const Footer = () => {
  return (
    <>
      <div id="footerPart">
        <div className="container">
          <div className="footerWarraper">
            <div className="footerLeft">
              <picture>
                <img src={footerLogo} alt={footerLogo} />
              </picture>
              <p className="footer__summary">
                There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.
              </p>
              <div className="footerAllIcon">
                <span className="footerIcon">
                  <FaFacebookF />
                </span>
                <span className="footerIcon">
                  <FaTwitter />
                </span>
              </div>
            </div>

            {/* right part */}

            <div className="footerRight">
              <FooterItem
                title="Company"
                list={["About Us", "Work", "Letast News", "Careers"]}
              />
              <FooterItem
                title="Project"
                list={[
                  "Prototype",
                  "Plans & Pricing",
                  "Customers",
                  "Integrations",
                ]}
              />
              <FooterItem
                title="Support"
                list={["Help Desk", "Sales", "Become a Partner", "Developers"]}
              />
              <FooterItem
                title="Contact"
                list={["524 Broadway , NYC", "+1 777 - 978 - 5570"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
