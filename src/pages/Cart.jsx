import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="mt-28 md:mt-32 lg:mt-36 min-h-screen bg-gray-100 px-4 md:px-8 py-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Shopping Cart
            </h1>

            <div className="space-y-4">
              {/* Dummy Cart Item */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 border border-gray-300 rounded-lg p-4 md:p-6 bg-white hover:shadow-md transition">
                {/* Product Image */}
                <div className="flex-shrink-0 w-full md:w-32">
                  <img
                    src="https://via.placeholder.com/150?text=Product"
                    alt="Sample Product"
                    className="w-full h-32 object-cover rounded-lg bg-gray-100"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    Sample Product Name
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-3">
                    High-quality product with excellent features
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-lg md:text-xl font-bold text-[#fa6332]">
                      Rs. 1,999
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      Rs. 3,499
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="text-gray-700 font-medium">Qty:</label>
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                    />
                  </div>
                </div>

                {/* Remove Button */}
                <div className="flex md:flex-col justify-between md:justify-end items-center md:items-end gap-2">
                  <button className="text-[#fa6332] font-medium hover:text-red-600 transition">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="mt-8 pt-6 border-t border-gray-300">
              <div className="flex justify-end max-w-md ml-auto">
                <div className="w-full space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal:</span>
                    <span>Rs. 1,999</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping:</span>
                    <span>Rs. 200</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-2 mt-2">
                    <span>Total:</span>
                    <span className="text-[#fa6332]">Rs. 2,199</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6 gap-4">
                <button className="px-6 py-2 md:px-8 md:py-3 border border-gray-400 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition">
                  Continue Shopping
                </button>
                <button className="px-6 py-2 md:px-8 md:py-3 bg-[#fa6332] text-white rounded-lg font-medium hover:bg-[#e85a2a] transition">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
