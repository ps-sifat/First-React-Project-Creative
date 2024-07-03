import React from "react";
import "./News.css";
import newsImg01 from "../../assets/newsImg01.png";
import newsImg02 from "../../assets/newsImg02.png";
import newsImg03 from "../../assets/newsImg03.png";
import { CiUser } from "react-icons/ci";
import { LiaCalendarMinus } from "react-icons/lia";
const News = () => {
  const allNews = [
    {
      id: 1,
      newsImg: newsImg01,
      adminName: "Admin",
      date: "07/11/2021",
      adminLogo: <CiUser />,
      dateLogo: <LiaCalendarMinus />,
      title: "Business Plans That Fit Your Best Blog",
      description: `There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.`,
      newsBtn: "Learn More",
    },
    {
      id: 2,
      newsImg: newsImg02,
      adminName: "Admin",
      date: "07/11/2021",
      adminLogo: <CiUser />,
      dateLogo: <LiaCalendarMinus />,
      title: "Business Plans That Fit Your Best Blog",
      description: `There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.`,
      newsBtn: "Learn More",
    },
    {
      id: 3,
      newsImg: newsImg03,
      adminName: "Admin",
      date: "07/11/2021",
      adminLogo: <CiUser />,
      dateLogo: <LiaCalendarMinus />,
      title: "Business Plans That Fit Your Best Blog",
      description: `There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.`,
      newsBtn: "Learn More",
    },
  ];
  return (
    <>
      <div id="newsPart">
        {/* header  */}
        <div className="newsPart__title">
          <div className="newsPart__header">Our Expert Team Member</div>
          <div className="newsPart__ditails">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </div>
        </div>
        {/* header  */}
        <div className="container">
          <div className="allNews">
            {allNews?.map((item) => (
              <div className="newsCard" key={item.id}>
                <picture>
                  <img
                    className="newsCard__img"
                    src={item.newsImg}
                    alt={item.newsImg}
                  />
                </picture>
                <div className="imgDetails">
                  <span className="imgDetails__name">
                    {item.adminLogo}
                    {item.adminName}
                  </span>
                  <span className="imgDetails__name">
                    {item.dateLogo}
                    {item.date}
                  </span>
                </div>
                <h3 className="newsCard__title">{item.title} </h3>
                <p className="newsCard__summary">{item.description}</p>
                <a className="newsCard__btn" href="#">
                  {item.newsBtn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
