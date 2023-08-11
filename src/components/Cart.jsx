import React from "react";
import Image from "next/image";
import thumb from "../../public/pr1.jpg";

export default function Cart() {
  return (
    <div>
      <div className="cart p-3 w-full bg-gray-100 content-center rounded-lg mb-3">
        <div className="flex items-center content-between">
          <Image className="w-32" src={thumb} alt="Product Picture" />
          <div className="ml-4 flex-grow">
            <div className="lg:flex md:flex justify-between items-center">
              <div>
                <h1 className="font-bold text-lg mb-2">
                  Product picture goes here
                </h1>
                <p>$160.00</p>
              </div>
              <div>
                <button className="mt-2 md:mt-0 lg:mt-0 ml-auto btn btn-sm bg-red-500 text-white p-2 rounded-lg hover:text-red-500">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
