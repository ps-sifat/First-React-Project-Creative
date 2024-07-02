import React from "react";
import "./Customer.css";
import clintImg1 from "../../assets/customer.png";
import { IoIosStar } from "react-icons/io";

const Customer = () => {
  const allCustomer = [
    {
      id: 1,
      customerImg: <clintImg1 />,
      title: "UI/UX Design",
      description: `There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.`,
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
            <div className="customerCard">
              <picture>
                <img src={clintImg1} alt={clintImg1} />
              </picture>
              <div className="customer__icon">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
            </div>
            <p className="customer__details">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <div className="customer__clint">
              <h3>Mahid Ahmed</h3>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
