// create Provider

import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [product, setProduct] = useState();
  useEffect(() => {
    async function feachProductData() {
      try {
        const res = await fetch("/productData.json");
        const data = await res.json();
        // console.log(data);
        setProduct(data);
      } catch {
        alert("There was an error loading data...");
      }
    }
    feachProductData();
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
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
