import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productC, setProductC] = useState({});

  return (
    <ProductContext.Provider value={{ productC, setProductC }}>
      {children}
    </ProductContext.Provider>
  );
};
  