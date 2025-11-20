// create Provider

import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const BASE_URL = "http://localhost:5173";

export function ProductProvider({ children }) {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [showLightbox, setShowLightbox] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(true);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    async function feachProductData() {
      try {
        setLoading(true);
        // const res = await fetch(`${BASE_URL}/productData.json`);
        const res = await fetch("/productData.json");
        const data = await res.json();
        // console.log(data);
        setProduct(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setLoading(false);
      }
    }
    feachProductData();
  }, []);

  const next = () => {
    setCurrentIndex((curIndex) =>
      curIndex === product?.images.length - 1 ? 0 : curIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((curIndex) =>
      curIndex === 0 ? product?.images.length - 1 : curIndex - 1
    );
  };

  const addToCart = () => {
    // console.log("click");
    setCart((prevCart) => {
      // Kiểm tra có tồn tại không
      const exist = prevCart.find((item) => item.id === product.id);
      // console.log(product.id);

      if (exist) {
        // Nếu đã có → thay quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity } : item
        );
      }

      // Nếu chưa có → thêm mới
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const minus = () => {
    setQuantity((quan) => (quan > 0 ? quan - 1 : 0));
    // console.log("click");
  };
  const plus = () => {
    setQuantity((quan) => quan + 1);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        loading,
        showLightbox,
        setShowLightbox,
        currentIndex,
        setCurrentIndex,
        next,
        prev,
        // for cart
        addToCart,
        cart,
        showCart,
        setShowCart,
        quantity,
        minus,
        plus,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

// create a custom hook for product consumer

// function useProducts() {
//   const context = useContext(ProductContext);
//   if (context === undefined) {
//     throw new Error("context was used outsize provider");
//   }
//   return context;
// }
