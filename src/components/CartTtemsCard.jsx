import React, { useEffect, useState } from "react";

const CartTtemsCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  async function fetching() {
    try {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      const productsData = await Promise.all(
        cartItems.map(async (productLink) => {
          const response = await fetch(productLink);
          return await response.json();
        })
      );

      setProducts(productsData); // ✅ set all products at once
      setLoading(false);
    } catch (err) {
      console.error(`Error Code: ${err}`);
    }
  }
  useEffect(() => {
    fetching();
  }, []);

  const removeFromCart = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = cartItems.filter(
      (link) => !link.endsWith(`/${productId}`)
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col md:flex-row gap-4 md:gap-6 border border-gray-300 rounded-lg p-4 md:p-6 bg-white hover:shadow-md transition"
        >
          {/* Product Image */}
          <div className="flex-shrink-0 w-full md:w-32">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 object-cover rounded-lg bg-gray-100"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3">
              High-quality product with excellent features
            </p>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-lg md:text-xl font-bold text-[#fa6332]">
                Rs{" "}
                {(
                  product.price * 283 -
                  (product.price * 283 * 10) / 100
                ).toFixed(0)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {(product.price * 283).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Remove Button */}
          <div className="flex md:flex-col justify-between md:justify-end items-center md:items-end gap-2">
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-[#fa6332] font-medium hover:text-red-600 transition"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartTtemsCard;
