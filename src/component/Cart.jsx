const cartDatas = [
  {
    name: "Fall Limited Edition Sneakers",
    price: 250,
    discount: 50,
    quantity: 3,
    image: "/images/image-product-1-thumbnail.jpg",
    curentcy: "$",
  },
];

function Cart() {
  return (
    <div className="cart">
      <h3 className="cart__title">Cart</h3>
      {cartDatas.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart__info">
          {cartDatas.map((cart) => (
            <div className="cart__item">
              <img src={cart.image} alt="product image" />
              <div>
                <p className="cart__name">
                  `${cart.name} ${cart.curentcy}$
                  {(cart.price * cart.discount) / 100} x ${cart.quantity}`
                </p>
                <span className="cart__total">
                  `${cart.curentcy}$
                  {((cart.price * cart.discount) / 100) * cart.quantity}`
                </span>
              </div>
              <button className="cart__btn--remove">
                <img
                  src="/images/icon-delete.svg"
                  alt="delete button icon"
                  className="cart__btn--remove-icon"
                />
              </button>
            </div>
          ))}
          <button className="cart__checkout">Checkout</button>
        </div>
      )}
    </div>
  );
}
export default Cart;
