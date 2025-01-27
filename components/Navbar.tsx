"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "../components/ui/NavbarMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [show, setShow] = useState(true); // State to control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down, hide navbar
        setShow(true);
      } else {
        // Scrolling up, show navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Re-run effect when lastScrollY changes

  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 transition-transform",
        className,
        show ? "translate-y-0" : "-translate-y-full" // Apply translate effect
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/"><MenuItem setActive={setActive} active={active} item="HOME" /></Link>
        <Link href="/about"><MenuItem setActive={setActive} active={active} item="ABOUT" /></Link>
        
        <MenuItem setActive={setActive} active={active} item="CONTACT" />
        <MenuItem setActive={setActive} active={active} item="BLOG" />
      </Menu>
    </div>
  );
};

export default Navbar;
