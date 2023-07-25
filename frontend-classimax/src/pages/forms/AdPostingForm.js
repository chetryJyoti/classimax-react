import React from "react";
import Navbarheader from "../../components/Navbar/Navbarheader";
import AdForm from "./AdForm";
import PaymentType from "./PaymentType";
import SellerInfo from "./SellerInfo";


const AdPostingForm = () => {
 
  return (
    <>
      <Navbarheader />
      <AdForm />
      <SellerInfo />
      <PaymentType />
    </>
  );
};

export default AdPostingForm;
