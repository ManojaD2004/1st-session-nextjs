"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function Home() {
  let timesClicked = 0;
  const { id: userName } = useParams();
  return (
    <main className="py-12 flex items-center flex-col justify-evenly font-[family-name:var(--font-geist-sans)]">
      <div className="bg-slate-800 p-10 space-y-6 text-5xl w-3/4 h-auto">
        <h1>Hello Tiger! {userName}</h1>
      </div>
    </main>
  );
}
