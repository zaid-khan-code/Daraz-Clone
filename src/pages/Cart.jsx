import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartTtemsCard from "../components/CartTtemsCard.jsx";
import { Link } from "react-router-dom";



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
              <CartTtemsCard />
              
            </div>

            {/* Cart Summary */}
            <div className="mt-8 pt-6 border-t border-gray-300">
              <div className="flex justify-end mt-6 gap-4">
                <Link
                  to="/products"
                  className="px-6 py-2 md:px-8 md:py-3 border border-gray-400 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  Continue Shopping
                </Link>
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
