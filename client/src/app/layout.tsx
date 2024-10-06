import type { Metadata } from "next";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "./globals.css";

// Import your fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "PriceTracker",
  description: "Welcome to PriceTracker",
};

// RootLayout component to manage global state (token)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Example: If there's no token, redirect to signin page
    if (!token) {
      router.push("/signin");
    }
  }, [token, router]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* You can wrap children with additional layouts or logic */}
        <TokenContext.Provider value={{ token, setToken }}>
          {children}
        </TokenContext.Provider>
      </body>
    </html>
  );
}

// Context to provide token globally across the app
import { createContext, useContext } from 'react';

// Token context
export const TokenContext = createContext<{
  token: string | null;
  setToken: (token: string | null) => void;
}>({
  token: null,
  setToken: () => {},
});

// Hook to use token context
export const useToken = () => useContext(TokenContext);
