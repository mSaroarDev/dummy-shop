"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { productById } from "@/app/API/api";
import { useRouter } from "next/router";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const router = useRouter(); // Use the useRouter hook
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      productById(id)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [id]);

  console.log(product);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={product.image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
}
