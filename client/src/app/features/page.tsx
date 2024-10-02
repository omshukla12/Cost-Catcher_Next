"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BarChart2,
  Bell,
  Clock,
  Globe,
  LineChart,
  Lock,
  Search,
  ShoppingCart,
  Zap,
  Menu,
  LogIn,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: Search,
      title: "Product Search",
      description:
        "Easily find and track products from multiple e-commerce platforms.",
    },
    {
      icon: Bell,
      title: "Price Alerts",
      description: "Get notified when prices drop or reach your desired level.",
    },
    {
      icon: LineChart,
      title: "Price History",
      description: "View detailed price history charts for tracked products.",
    },
    {
      icon: ShoppingCart,
      title: "Multiple Retailers",
      description: "Compare prices across various online stores.",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description:
        "Receive up-to-the-minute price and availability information.",
    },
    {
      icon: Clock,
      title: "Price Predictions",
      description:
        "Get insights on the best time to buy based on historical data.",
    },
    {
      icon: Globe,
      title: "International Support",
      description:
        "Track prices in multiple currencies and from global retailers.",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description:
        "Your data is encrypted and never shared with third parties.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-zinc-200">
      <motion.header
        className="sticky top-0 z-50 bg-zinc-800 shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <BarChart2 className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-2xl font-bold text-zinc-200">
                PriceTracker
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
              <Link
                href="/"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input
                  className="w-64 pl-10 pr-4 py-2 rounded-full bg-zinc-700 text-zinc-200 placeholder-zinc-400 border-zinc-600 focus:border-emerald-400 focus:ring-emerald-400"
                  placeholder="Search products..."
                  type="search"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              </div>
              <Button
                asChild
                variant="outline"
                className="hidden md:flex text-emerald-400 hover:text-emerald-300 hover:bg-zinc-700 border-zinc-600 hover:border-emerald-400 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                <Link href="/signin">
                  <LogIn className="mr-2 h-5 w-5" />
                  Sign In
                </Link>
              </Button>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6 text-zinc-200" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[300px] sm:w-[400px] bg-zinc-800 border-r-zinc-700"
                >
                  <nav className="flex flex-col space-y-4">
                    <Input
                      className="w-full bg-zinc-700 text-zinc-200 placeholder-zinc-400 border-zinc-600 focus:border-emerald-400 focus:ring-emerald-400"
                      placeholder="Search products..."
                      type="search"
                    />
                    <Link
                      href="/"
                      className="text-zinc-200 hover:text-emerald-400 transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/features"
                      className="text-zinc-200 hover:text-emerald-400 transition-colors"
                    >
                      Features
                    </Link>
                    <Link
                      href="/pricing"
                      className="text-zinc-200 hover:text-emerald-400 transition-colors"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/about"
                      className="text-zinc-200 hover:text-emerald-400 transition-colors"
                    >
                      About
                    </Link>
                    <hr className="my-4 border-zinc-700" />
                    <Button
                      asChild
                      variant="outline"
                      className="justify-start text-emerald-400 hover:text-emerald-300 hover:bg-zinc-700 border-zinc-600 hover:border-emerald-400 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                    >
                      <Link href="/signin">
                        <LogIn className="mr-2 h-5 w-5" />
                        Sign In
                      </Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="flex-grow">
        <motion.section
          className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-20 text-zinc-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              PriceTracker Features
            </motion.h1>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Discover how PriceTracker helps you save money and make smarter
              shopping decisions.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-zinc-200 text-emerald-600 hover:bg-zinc-300 transition-colors"
              >
                <Link href="/signup">Start Tracking Prices</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-zinc-800 border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                    <CardHeader>
                      <feature.icon className="h-10 w-10 text-emerald-400 mb-4" />
                      <CardTitle className="text-zinc-200">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-zinc-200">
              How PriceTracker Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                {
                  icon: Search,
                  title: "Add Products",
                  description:
                    "Simply paste the URL of the product you want to track. We support major e-commerce platforms.",
                },
                {
                  icon: BarChart2,
                  title: "Monitor Prices",
                  description:
                    "We will keep an eye on the prices and track their changes over time.",
                },
                {
                  icon: Bell,
                  title: "Get Notified",
                  description:
                    "Receive instant notifications when prices drop or reach your desired level.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-zinc-700 border-zinc-600 text-center">
                    <CardContent className="pt-6">
                      <div className="bg-emerald-500 p-4 rounded-full inline-block mb-4">
                        <item.icon className="h-8 w-8 text-zinc-900" />
                      </div>
                      <CardTitle className="mb-2 text-zinc-200">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-zinc-200">
              Start Saving Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-zinc-400">
              Join thousands of smart shoppers who are already saving money with
              PriceTracker.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 text-zinc-900 hover:bg-emerald-600 transition-colors"
            >
              <Link href="/signup">Create Your Free Account</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-800 text-zinc-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/pricetracker"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://facebook.com/pricetracker"
                    className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-700 text-center">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} PriceTracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
