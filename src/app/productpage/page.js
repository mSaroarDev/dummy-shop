"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log("something is wrong"));
  }, []);

  console.log(products);

  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="items-center content-center px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-28 gap-10 mx-auto">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
