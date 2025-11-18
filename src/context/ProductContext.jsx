// create Provider

import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const BASE_URL = "http://localhost:5173";

export function ProductProvider({ children }) {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    async function feachProductData() {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/productData.json`);
        const data = await res.json();
        console.log(data);
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

  const addToCart = (prodc) => {
    setCart((cart) => [...cart, prodc]);
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
