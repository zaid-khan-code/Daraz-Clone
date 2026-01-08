import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetching() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const convert = await response.json();
        console.log(response);
        console.log(convert);
        setProducts(convert);
        console.log(products);        
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
          id={product.category}
          href="#"
          className="pc-custom-link h-max card-fs-content-body-unit hp-mod-card-hover relative w-48 h-72 text-black block no-underline bg-transparent hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out"
        >
          {/* Product Image */}
          <div className="common-img fs-card-img img-w100p h-48 mb-1 w-48 inline-flex">
            <picture className="inline-flex h-full max-h-full max-w-full w-full">
              <img
                src={product.image}
                alt={product.description}
                className="inline-block h-full w-full object-cover"
              />
            </picture>
          </div>

          {/* Product Details */}
          <div className="fs-card-text m-1">
            {/* Title */}
            <p className="fs-card-title two-line-clamp text-sm leading-normal mb-1 line-clamp-2">
              {product.title}
            </p>

            {/* Current Price */}
            <div className="fs-card-price flex flex-row text-orange-500 text-lg h-6 leading-6 mb-1 tracking-tight">
              <span className="currency text-lg">Rs.</span>
              <span className="price text-lg ml-1">{product.price}</span>
            </div>

            {/* Original Price & Discount */}
            <div className="fs-card-origin-price flex flex-row leading-3">
              <div className="fs-origin-price flex flex-row text-gray-400 line-through">
                <span className="currency text-xs">Rs.</span>
                <span className="price text-xs ml-1">{product.price}</span>
              </div>
              <span className="itemDiscount text-gray-900 text-xs ml-1">
                -10%
              </span>
            </div>

            {/* Sold Count Placeholder */}
            <div className="fs-card-sold flex flex-row text-sm h-4 mb-1"></div>
          </div>
        </a>
      ))}
    </>
  );

  
};

export default Product;
