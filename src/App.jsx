import React from "react";
import Header from "./Component/Header/Header";
import Banner from "./Component/Banner/Banner";
import Service from "./Component/Service/Service";
import Protfolio from "./Component/Protfolio/Portfolio";
import Member from "./Component/Member/Member";
import Customer from "./Component/Customer/Customer";
const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Protfolio />
      <Member />
      <Customer />
    </div>
  );
};

export default App;
