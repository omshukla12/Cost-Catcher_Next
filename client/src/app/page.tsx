"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Bell,
  Menu,
  Search,
  X,
  Zap,
  Shield,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronUp,
} from "lucide-react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-zinc-200">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-zinc-800 shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <BarChart2 className="h-8 w-8 text-emerald-400" />
            <span className="ml-2 text-2xl font-bold text-zinc-200">
              PriceTracker
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
              href="/features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
              href="#"
            >
              Blog
            </Link>
            <Link
              className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
              href="#"
            >
              Contact
            </Link>
            <Link href="/signin">
              <Button
                variant="outline"
                className="bg-transparent border-zinc-600 text-zinc-200 hover:bg-zinc-700 hover:text-emerald-400 transition-colors"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-emerald-500 text-zinc-900 hover:bg-emerald-600 transition-colors">
                Sign Up
              </Button>
            </Link>
          </nav>
          <Button
            className="md:hidden text-zinc-200"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </motion.header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-zinc-800 p-4 fixed top-16 right-0 left-0 z-40 border-b border-zinc-700 shadow-lg"
          >
            <nav className="flex flex-col gap-4">
              <Link
                className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
                href="/features"
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
                href="#"
              >
                Pricing
              </Link>
              <Link
                className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
                href="#"
              >
                Blog
              </Link>
              <Link
                className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
                href="#"
              >
                Contact
              </Link>
              <Link href="/signin">
                <Button
                  variant="outline"
                  className="bg-transparent border-zinc-600 text-zinc-200 hover:bg-zinc-700 hover:text-emerald-400 transition-colors w-full justify-center"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-emerald-500 text-zinc-900 hover:bg-emerald-600 transition-colors w-full justify-center">
                  Sign Up
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="flex-1 pt-16">
        <motion.section
          className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <motion.div
                className="space-y-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="text-4xl font-extrabold tracking-tighter text-zinc-200 sm:text-5xl md:text-6xl lg:text-7xl">
                  Track Product Prices Effortlessly
                </h1>
                <p className="mx-auto max-w-[700px] text-xl text-zinc-400 md:text-2xl">
                  Never miss a deal again. Monitor prices across multiple
                  e-commerce sites and get notified when prices drop.
                </p>
              </motion.div>
              <motion.div
                className="w-full max-w-md space-y-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <form className="flex space-x-2">
                  <div className="relative flex-1">
                    <Input
                      className="w-full pl-10 pr-4 py-3 rounded-md bg-zinc-700 text-zinc-200 placeholder-zinc-400 border-zinc-600 focus:border-emerald-400 focus:ring-emerald-400"
                      placeholder="Enter product URL"
                      type="url"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
                  </div>
                  <Button
                    type="submit"
                    className="bg-emerald-500 text-zinc-900 hover:bg-emerald-600 transition-colors rounded-md px-6"
                  >
                    Track
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-sm text-zinc-400">
                  Start tracking your first product for free. No credit card
                  required.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button className="bg-emerald-500 text-zinc-900 hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl">
                  Start for free
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-zinc-600 text-zinc-200 hover:bg-zinc-700 hover:text-emerald-400 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl"
                >
                  How it works
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <section className="w-full py-20 bg-zinc-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-zinc-200">
              Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              <Card className="bg-zinc-700 border-none shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2 text-emerald-400 mx-auto" />
                  <CardTitle className="text-xl font-semibold text-zinc-200 text-center">
                    Real-time Updates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-center">
                    Get instant notifications on price changes for your tracked
                    products.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-700 border-none shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
                <CardHeader>
                  <Shield className="h-10 w-10 mb-2 text-emerald-400 mx-auto" />
                  <CardTitle className="text-xl font-semibold text-zinc-200 text-center">
                    Secure & Private
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-center">
                    Your data is encrypted and never shared with third parties.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-700 border-none shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
                <CardHeader>
                  <Clock className="h-10 w-10 mb-2 text-emerald-400 mx-auto" />
                  <CardTitle className="text-xl font-semibold text-zinc-200 text-center">
                    Historical Data
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-center">
                    View price trends and make informed purchasing decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-zinc-200">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-emerald-500 p-3 rounded-full">
                  <Search className="h-8 w-8 text-zinc-900" />
                </div>
                <h3 className="text-xl font-bold text-zinc-200">
                  Add Products
                </h3>
                <p className="text-zinc-400">
                  Simply paste the URL of the product you want to track. We
                  support major e-commerce platforms.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-emerald-500 p-3 rounded-full">
                  <BarChart2 className="h-8 w-8 text-zinc-900" />
                </div>
                <h3 className="text-xl font-bold text-zinc-200">
                  Monitor Prices
                </h3>
                <p className="text-zinc-400">
                  We will keep an eye on the prices and track their changes over
                  time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-emerald-500 p-3 rounded-full">
                  <Bell className="h-8 w-8 text-zinc-900" />
                </div>
                <h3 className="text-xl font-bold text-zinc-200">
                  Get Notified
                </h3>
                <p className="text-zinc-400">
                  Receive instant notifications when prices drop or reach your
                  desired level.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-zinc-800 text-zinc-200">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:text-left text-center">
            <div className="space-y-4">
              <div className="flex items-center md:justify-start justify-center">
                <BarChart2 className="h-8 w-8 text-emerald-400" />
                <span className="ml-2 text-2xl font-bold">PriceTracker</span>
              </div>
              <p className="text-sm text-zinc-400">
                Track product prices across multiple e-commerce platforms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                    href="/features"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                    href="#"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                    href="#"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                    href="#"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
                    href="#"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex md:justify-start justify-center space-x-4">
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-200"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-200"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-700 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} PriceTracker. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <Button
                variant="ghost"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Back to Top
                <ChevronUp className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <Button
          className="fixed bottom-4 right-4 bg-emerald-500 text-zinc-900 rounded-full p-2 shadow-lg hover:bg-emerald-600  transition-all duration-300 animate-bounce"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
