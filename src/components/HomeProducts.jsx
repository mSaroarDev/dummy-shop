"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "@/app/API/api";
import Link from "next/link";
import Product from "./Product";
import Loader from "./Loader";

export default function HomeProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="items-center content-center px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-28 gap-10 mx-auto mb-14">
        {loading ? (
          <div className="h-screen w-full flex items-center justify-center text-center">
            <Loader />
          </div>
        ) : (
          products.map((product, index) => (
            <Link href={`/productdetails?id=${product.id}`} key={index}>
              <Product product={product} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
