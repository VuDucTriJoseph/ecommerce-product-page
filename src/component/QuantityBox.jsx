// import { useState } from "react";

// import { useState } from "react";
import { useProduct } from "../context/useProduct";

function Quantitybox() {
  const { quantity, minus, plus } = useProduct();
  // console.log(quantity);

  return (
    <div className="quantityBox">
      <button className="quantityBox_btn" onClick={minus}>
        <div className="quantityBox_btn-minus"></div>
      </button>
      <span className="quantityBox_text text-pre-3--bold">{quantity}</span>
      <button className=" quantityBox_btn" onClick={plus}>
        <div className="quantityBox_btn-plus"></div>
      </button>
    </div>
  );
}

export default Quantitybox;
