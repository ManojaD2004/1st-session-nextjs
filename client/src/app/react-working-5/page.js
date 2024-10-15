"use client";
import React, { useEffect, useRef, useState } from "react";

// A Simply Cart App
// 1. Change a simple string element to a object for better handling bigger elements!
// 2. Add delete button, to delete that item from cart!

export default function Home() {
  const [newItem, setNewItem] = useState("");
  const [cart, setCart] = useState(["Eggs", "Bread"]);
  return (
    <main className="py-12 flex items-center flex-col justify-evenly font-[family-name:var(--font-geist-sans)]">
      <div className="bg-slate-800 p-10 space-y-6 text-5xl w-3/4 h-auto">
        <h1>Cart App!</h1>
        <input
          className="border-0 outline-0 p-2 rounded-lg text-black"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
          placeholder="Enter your new Item"
        />
        <button
          onClick={() => {
            // Bad way of doing
            // cart.push(newItem);
            // setCart(cart);
            //
            // Correct way of doing
            // const newCart = [...cart];
            // newCart.push(newItem);
            // setCart(newCart);
            setCart([...cart, newItem]);
            //
            // Clear the Input Field
            setNewItem("");
          }}
          className="bg-slate-600 rounded-xl p-6 hover:bg-slate-700"
        >
          Add Element!
        </button>
        <h2 className="text-green-500">Your Items in the Cart!</h2>
        {cart.map((ele, index) => (
          <div className="text-red-300" key={index}>
            {index + 1}. {ele}
          </div>
        ))}
      </div>
    </main>
  );
}
