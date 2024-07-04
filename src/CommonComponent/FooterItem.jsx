import React from "react";

const FooterItem = ({ title, list }) => {
  return (
    <>
      <div>
        <h3 className="footerItem__title">{title ? title : "error"}</h3>
        <ul className="footerItem__menu">
          {list?.map((listItem) => (
            <li>
              <a className="footerItem__list" href="#">
                {listItem ? listItem : "nai"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterItem;
