"use client";

import { itemsNavbar } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <nav className=" fixed z-50 flex flex-col items-center w-full mt-auto justify-center h-max bottom-20">
      <div className=" flex items-center gap-2 justify-center px-4 py-1 bg-white/10  backdrop-blur-sm rounded-full">
        {itemsNavbar.map((item) => (
          <Link
            key={item.id}
            className={`cursor-pointer px-3 py-2 transition duration-150 rounded-full  ${
              activeId === item.id ? "bg-[#954c8c] " : "hover:bg-[#a2669b48]"
            }`}
            onClick={() => setActiveId(item.id)}
            href={item.link}
            title={item.title}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};
