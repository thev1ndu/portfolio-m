"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const MenuItem = ({
  setActive,
  item,
}: {
  setActive: (item: string) => void;
  item: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-sm pl-2 pr-2 text-white hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = ({
  setActive,
  children, // Add children here
}: {
  setActive: (item: string | null) => void;
  children: ReactNode; // Define the type for children
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-black shadow-input flex justify-center space-x-4 px-8 py-6 mx-auto w-[90%] sm:w-[80%] md:w-[400px] lg:w-[500px]"
    >
      {children} {/* Render children */}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: {
  children: ReactNode; // Type for children
  [key: string]: any; // Type for the rest of the props
}) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children} {/* Render children */}
    </Link>
  );
};
