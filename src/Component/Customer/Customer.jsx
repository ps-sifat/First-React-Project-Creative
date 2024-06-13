import React from "react";
import "./Customer.css";
import clintImg1 from "../../assets/customer.png";
const Customer = () => {
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
