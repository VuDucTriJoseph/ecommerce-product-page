// import { useState } from "react";

import { useProduct } from "../context/useProduct";

function Quantitybox() {
  const { quantity, plus, minus } = useProduct();
  console.log(quantity);

  return (
    <div
      className="quantityBox"
      onClick={() => {
        console.log("click");
        minus();
      }}
    >
      <button className="quantityBox_btn">
        <div className="quantityBox_btn-minus"></div>
      </button>
      <span className="quantityBox_text text-pre-3--bold">{quantity}</span>
      <button
        className=" quantityBox_btn"
        onClick={() => {
          console.log("click");
          plus();
        }}
      >
        <div className="quantityBox_btn-plus"></div>
      </button>
    </div>
  );
}

export default Quantitybox;
