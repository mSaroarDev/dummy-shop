import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

export default function Appnav() {
  return (
    <>
      <div className="bg-gray-100 shadow-md fixed top-0 z-50 w-full">
        <div className="w-full max-w-6xl mx-auto">
          <div className="navbar">
            <div className="flex-1">
              <Link href="/" className="normal-case text-xl">
                <Image src={logo} alt="shop logo" className="w-24" />
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href="/">Shop</Link>
                </li>
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
