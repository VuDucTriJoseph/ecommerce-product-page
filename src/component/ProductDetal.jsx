// import { useState } from "react";
import { useProduct } from "../context/useProduct";
import Quantitybox from "./QuantityBox";
import Button from "./Button";

function ProductDetail() {
  const { product, quantity } = useProduct();

  const cartdata = {
    id: product?.id,
    brand: product?.brand,
    name: product?.name,
    price: product?.price,
    discount: product?.discount,
    quantity,
    curentcy: product?.curentcy,
    image: product?.images[0].thumbnail,
  };
  return (
    <div className="productDetail">
      <p className="productDetail__brand text-pre-5">{cartdata.brand}</p>
      <h3 className="productDetail__name text-pre-1">{cartdata.name}</h3>
      <p className="productDetail__discription text-pre-3--regular">
        {product?.discription}
      </p>
      <div className="productDetail__price">
        <p className="productDetail__price-after text-pre-2">{`${
          cartdata.curentcy
        } ${(cartdata.price * cartdata.discount) / 100}`}</p>
        <p className="productDetail__price-discount text-pre-3--bold">{`${cartdata.discount} %`}</p>
        <p className="productDetail__price-befor text-pre-3--regular">{`${cartdata.curentcy} ${cartdata.price}`}</p>
      </div>
      <div className="productDetail__control">
        <Quantitybox />
        <Button productdata={cartdata} />
      </div>
    </div>
  );
}
export default ProductDetail;
