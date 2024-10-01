"use client";

import Link from "next/link";
import { useRouter } from "next/router";

export function HeaderComponent() {
  const router = useRouter();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-gray-800 text-xl font-bold">
              Price Tracker
            </Link>
          </li>
          <li>
            <ul className="flex items-center space-x-4">
              <li>
                <Link
                  href="/"
                  className={`text-gray-600 hover:text-gray-800 ${
                    router.pathname === "/" ? "font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`text-gray-600 hover:text-gray-800 ${
                    router.pathname.startsWith("/products")
                      ? "font-semibold"
                      : ""
                  }`}
                >
                  Products
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
