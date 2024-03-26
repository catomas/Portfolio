"use client";

import { itemsNavbar } from "@/lib/data";
import Link from "next/link";
import { use, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ActiveSectionContext } from "../context/active-section-context";

export const Navbar = () => {
  const [loading, setLoading] = useState(false);

  const { activeId, setActiveId } = useContext(ActiveSectionContext);

  useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading) return null;

  return (
    <nav className="  fixed z-50 flex flex-col items-center w-full mt-auto justify-center h-max bottom-20">
      <div className=" flex items-center gap-2 justify-center px-4 py-1 bg-white/10  backdrop-blur-sm rounded-full">
        {itemsNavbar.map((item) => (
          <Link
            key={item.id}
            className="cursor-pointer px-3 py-2 hover:bg-[#a2669b48]  justify-center transition duration-150 rounded-full flex w-full items-center "
            onClick={() => setActiveId(item.id)}
            href={item.link}
            title={item.title}
          >
            {item.icon}

            {activeId === item.id && (
              <motion.span
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
                className=" bg-[#954c8c] rounded-full absolute -z-10  w-11 h-9 "
              ></motion.span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};
