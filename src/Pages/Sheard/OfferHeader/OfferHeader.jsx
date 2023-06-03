import React, { useState } from "react";
import "./OfferHeader.css";
const OfferHeader = () => {
  const [status, setStatus] = useState(true);
  return (
    <div className={`offer-container ${status === false ? "d-none" : ""}`}>
      <p></p>
      <p className="text-white text-center">
        20% OFF YOUR VERY FIRST PURCHASE, USE PROMO CODE: OLIVIA FASHION
      </p>
      <button className="text-white " onClick={() => setStatus(false)}>
        X
      </button>
    </div>
  );
};

export default OfferHeader;
