import React, { useContext, useEffect, useEffectEvent, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Details from "../components/Details";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
const Detail = () => {
  const { productC } = useContext(ProductContext);
  const [isValue, setIsValue] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    productC == {} ? navigate("/") : setIsValue(true);
  }, []);
  return (
    <>
      <Navbar />
      {isValue ? (
        <Details
          title={productC.title}
          id={productC.id}
          descprtion={productC.description}
          img={productC.image}
          rating={productC.rating}
          price={productC.price}
        />
      ) : (
        ""
      )}

      <Footer />
    </>
  );
};

export default Detail;
