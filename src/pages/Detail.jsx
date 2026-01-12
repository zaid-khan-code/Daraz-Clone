import React, { useContext, useEffect, useEffectEvent, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Details from "../components/Details";
import { useParams } from "react-router-dom";
 
const Detail = () => {
  const { id } = useParams();
  const [product , setProducts] = useState(null);
  useEffect(() => {
    async function fetchSpecficProduct() {
      try{
        let response = await fetch(`https://fakestoreapi.com/products/${id}`)
        let convertion = await response.json();
        setProducts(convertion)
      }catch(err){
        throw new Error(`Error : ${err} ` );
        
      }
    }
    fetchSpecficProduct();
  }, [id]);
  
  if (!product) return <p>PLease Select a product</p>;
 
  return (
    <>
      <Navbar />
      <Details
        title={product.title}
        id={product.id}
        descprtion={product.description}
        img={product.image}
        rating={product.rating}
        price={product.price}
        rate={product?.rating?.rate}
        count={product?.rating?.count}
      />

      <Footer />
    </>
  );
};

export default Detail;
