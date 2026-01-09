import React, { useEffect, useState,useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { productC, setProductC } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  function goToProduct(e) {
    let currentItration = e.currentTarget.dataset.id;
    setProductC(products[currentItration]);
    console.log(products[currentItration]);
    
    navigate("/detail");
  }

  useEffect(() => {
    async function fetching() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const convert = await response.json();
        setProducts(convert);
      } catch (err) {
        throw new Error(`Error Code ${err} `);
      }
    }
    fetching();
  }, []);

  return (
    <>
      {products.map((product) => (
        <a
          key={product.id}
          data-id={product.id-1}
          id={product.category}
          onClick={(e)=>{goToProduct(e)}}
          className="pc-custom-link h-max card-fs-content-body-unit hp-mod-card-hover relative w-40 h-64 md:w-52 md:h-80 lg:w-56 lg:h-96 text-black block no-underline bg-transparent hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out"
        >
          {/* Product Image */}
          <div className="common-img fs-card-img img-w100p h-40 md:h-48 lg:h-56 mb-1 w-40 md:w-52 lg:w-56 inline-flex">
            <picture className="inline-flex h-full max-h-full max-w-full w-full">
              <img
                src={product.image}
                alt={product.description}
                className="inline-block h-full w-full object-contain"
              />
            </picture>
          </div>

          {/* Product Details */}
          <div className="fs-card-text m-1">
            {/* Title */}
            <p className="fs-card-title two-line-clamp text-xs md:text-sm lg:text-base leading-normal mb-1 line-clamp-2">
              {product.title}
            </p>

            {/* Current Price */}
            <div className="fs-card-price flex flex-row text-orange-500 text-base md:text-lg lg:text-xl h-5 md:h-6 leading-5 md:leading-6 mb-1 tracking-tight">
              <span className="currency text-base md:text-lg lg:text-xl">
                Rs.
              </span>
              <span className="price text-base md:text-lg lg:text-xl ml-1">
                {(
                  product.price * 283 -
                  (product.price * 283 * 10) / 100
                ).toFixed(0)}
              </span>
            </div>

            {/* Original Price & Discount */}
            <div className="fs-card-origin-price flex flex-row leading-3">
              <div className="fs-origin-price flex flex-row text-gray-400 line-through">
                <span className="currency text-xs md:text-sm">Rs.</span>
                <span className="price text-xs md:text-sm ml-1">
                  {(product.price * 283).toFixed(2)}
                </span>
              </div>
              <span className="itemDiscount text-gray-900 text-xs md:text-sm ml-1">
                -10%
              </span>
            </div>

            {/* Sold Count Placeholder */}
            <div className="fs-card-sold flex flex-row text-xs md:text-sm h-3 md:h-4 mb-1"></div>
          </div>
        </a>
      ))}
    </>
  );
};

export default Product;
