"use client";

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
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <BarChart2 className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-2xl font-bold text-gray-900">
                PriceTracker
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
              <Link
                href="/"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input
                  className="w-64 pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white transition-colors"
                  placeholder="Search products..."
                  type="search"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button
                asChild
                variant="outline"
                className="hidden md:flex text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 hover:border-red-300 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                <Link href="/signin">
                  <LogIn className="mr-2 h-5 w-5" />
                  Sign In
                </Link>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4">
                    <Input
                      className="w-full"
                      placeholder="Search products..."
                      type="search"
                    />
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/features"
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      Features
                    </Link>
                    <Link
                      href="/pricing"
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      About
                    </Link>
                    <hr className="my-4" />
                    <Button
                      asChild
                      variant="outline"
                      className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 hover:border-red-300 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
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
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PriceTracker Features
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover how PriceTracker helps you save money and make smarter
              shopping decisions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-pink-600 hover:bg-pink-100 transition-colors"
            >
              <Link href="/signup">Start Tracking Prices</Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-pink-500 mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
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
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div
                      className={`bg-${
                        index === 0 ? "pink" : index === 1 ? "purple" : "blue"
                      }-100 p-4 rounded-full inline-block mb-4`}
                    >
                      <item.icon
                        className={`h-8 w-8 text-${
                          index === 0 ? "pink" : index === 1 ? "purple" : "blue"
                        }-600`}
                      />
                    </div>
                    <CardTitle className="mb-2">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Start Saving Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of smart shoppers who are already saving money with
              PriceTracker.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-pink-500 text-white hover:bg-pink-600 transition-colors"
            >
              <Link href="/signup">Create Your Free Account</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-400 hover:text-white transition-colors"
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
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-400 hover:text-white transition-colors"
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
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
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
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/pricetracker"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://facebook.com/pricetracker"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} PriceTracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
