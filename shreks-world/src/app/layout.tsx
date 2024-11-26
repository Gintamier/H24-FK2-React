import { ReactNode } from "react";
import Link from "next/link";
import { CounterProvider } from "./context/counterContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-green-50 text-green-900 min-h-screen flex flex-col font-sans">
        <CounterProvider>
          <header className="bg-green-700 text-white">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
              <h1 className="text-3xl font-extrabold tracking-wider">
                Shrek's World
              </h1>
              <ul className="flex space-x-6 text-lg">
                {[
                  { name: "Home", href: "/" },
                  { name: "Characters", href: "/characters" },
                  { name: "Locations", href: "/locations" },
                  { name: "About", href: "/about" },
                  { name: "Search", href: "/search" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:underline transition hover:text-green-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <main className="container flex-grow mx-auto flex items-center justify-center px-6 py-10">
            {children}
          </main>

          <footer className="bg-green-700 text-white py-4">
            <div className="container mx-auto text-center">
              <p className="text-sm">
                &copy; {new Date().getFullYear()}{" "}
                <span className="font-bold">Shrek's World</span>. All rights
                reserved.
              </p>
            </div>
          </footer>
        </CounterProvider>
      </body>
    </html>
  );
}
