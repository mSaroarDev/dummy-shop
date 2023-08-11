"use client";

import React from "react";
import Image from "next/image";

export default function Product({ product }) {
  const { title, price, category, image } = product;

  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <Image height={300} width={300} src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <p>{category}</p>
          <div className="card-actions justify-between items-center mt-2">
            <p>${price}</p>
            <button className="btn btn-sm btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
