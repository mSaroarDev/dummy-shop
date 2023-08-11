import Cart from "@/components/Cart";
import CartCount from "@/components/CartCount";
import React from "react";

export default function CartPage() {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto mt-20">
        <div className="lg:flex">
          <div className="w-full lg:w-2/3 p-5">
            <Cart />
          </div>
          <div className="w-full lg:w-1/3 p-5">
            <CartCount />
          </div>
        </div>
      </div>
    </>
  );
}
