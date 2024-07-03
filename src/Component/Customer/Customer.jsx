import React from "react";
import "./Customer.css";
import ClintImg1 from "../../assets/customer.png";
import { IoIosStar } from "react-icons/io";

const Customer = () => {
  const allCustomer = [
    {
      id: 1,
      customerImg: ClintImg1,
      customerName: "Mahid Ahmed",
      title: "UI/UX Design",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 2,
      customerImg: ClintImg1,
      customerName: "Mahid Ahmed",
      title: "UI/UX Design",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 3,
      customerImg: ClintImg1,
      customerName: "Mahid Ahmed",
      title: "UI/UX Design",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
  ];
  return (
    <>
      <div id="customerPart">
        <div className="container">
          <div className="customerPart__title">
            <div className="customerPart__header">
              Wer Care About Our Customer Experience Too
            </div>
            <div className="customerPart__details">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </div>
          </div>
          <div className="customer__allCard">
            {allCustomer?.map((item) => (
              <div className="customerCard" key={item.id}>
                <picture>
                  <img src={item.customerImg} alt={item.customerImg} />
                </picture>
                <div className="customer__icon">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="customer__details">{item.description}</p>
                <div className="customer__clint">
                  <h3 className="customer__clintName">{item.customerName}</h3>
                  <p className="customer__clintTitle">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
