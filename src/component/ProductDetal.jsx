// import { useState } from "react";
import { useProduct } from "../context/useProduct";
import Quantitybox from "./QuantityBox";
import Button from "./Button";

function ProductDetail() {
  const { product } = useProduct();

  return (
    <div className="productDetail">
      <p className="productDetail__brand text-pre-5">{product?.brand}</p>
      <h3 className="productDetail__name text-pre-1">{product?.name}</h3>
      <p className="productDetail__discription text-pre-3--regular">
        {product?.discription}
      </p>
      <div className="productDetail__price">
        <p className="productDetail__price-after text-pre-2">{`${
          product?.curentcy
        } ${(product?.price * product?.discount) / 100}`}</p>
        <p className="productDetail__price-discount text-pre-3--bold">{`${product?.discount} %`}</p>
        <p className="productDetail__price-befor text-pre-3--regular">{`${product?.curentcy} ${product?.price}`}</p>
      </div>
      <div className="productDetail__control">
        <Quantitybox />
        <Button />
      </div>
    </div>
  );
}
export default ProductDetail;
