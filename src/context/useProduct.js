import { useContext } from "react";
import { ProductContext } from "./ProductContext";

function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("context was used outsize provider");
  }
  return context;
}

export { useProduct };
