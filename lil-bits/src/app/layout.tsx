"use client";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState("");

  // Set the current path when the component mounts
  useEffect(() => {
    setCurrentPath(window.location.pathname); // Get current page path
  }, []);

  // Helper function to check if the link is active
  const isActive = (href: string) => currentPath === href;

  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col font-sans">
        {/* Header */}
        <header className="bg-white border-b-2 border-gray-300 h-24">
          <nav className="container mx-auto flex justify-between items-center px-8 h-full">
            {/* Logo */}
            <div
              className="flex items-center h-full cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              <Image
                src="/assets/lilbitslogo.png"
                alt="Logo"
                width={150}
                height={100}
                className="object-contain h-full"
              />
            </div>

            {/* Navigation Menu */}
            <ul className="flex space-x-6 text-lg">
              {[
                { name: "Home", href: "/" },
                { name: "Order", href: "/order-meal" },
                { name: "Order Drinks", href: "/order-drinks" },
                { name: "Receipt", href: "/receipt" },
              ].map((link) => (
                <li key={link.href}>
                  {/* Non-interactable links with active class for highlight */}
                  <span
                    className={`${
                      isActive(link.href)
                        ? "text-red-600 font-semibold"
                        : "text-black"
                    } pointer-events-none cursor-default`}
                  >
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto flex flex-col lg:flex-row px-8 py-10 space-y-8 lg:space-y-0 lg:space-x-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white text-center py-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Lil Bits. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
