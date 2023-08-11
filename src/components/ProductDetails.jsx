"use client";
import React from "react";
import Image from "next/image";

export default function ProductDetails({ id }) {
  const { image, title, description, price } = product;

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
}
