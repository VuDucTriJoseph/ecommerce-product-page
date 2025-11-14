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
      <h3 className="cart__title text-pre-3--bold">Cart</h3>
      {cartDatas.length === 0 ? (
        <div className="cart__info">
          <p className="text-pre-3--bold">Your cart is empty</p>
        </div>
      ) : (
        <div className="cart__info">
          {cartDatas.map((cart) => (
            <div className="cart__item">
              <img src={cart.image} alt="product image" className="cart__img" />
              <p>
                <span className="cart__name text-pre-3--regular">
                  {cart.name} {cart.curentcy}
                  {(cart.price * cart.discount) / 100} x {cart.quantity}
                </span>
                <span className="cart__total text-pre-3--bold">
                  {cart.curentcy}
                  {((cart.price * cart.discount) / 100) * cart.quantity}
                </span>
              </p>

              <img
                src="/images/icon-delete.svg"
                alt="delete button icon"
                className="cart__btn--remove-icon"
              />
            </div>
          ))}
          <button className="cart__checkout">Checkout</button>
        </div>
      )}
    </div>
  );
}
export default Cart;
