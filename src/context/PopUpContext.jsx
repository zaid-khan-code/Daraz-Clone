import { createContext, useState } from "react";

export const PopUpContext = createContext();

export const PopUpProvider = ({ children }) => {
  const [popUp, setPopUp] = useState("");

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      {children}
    </PopUpContext.Provider>
  );
};
  