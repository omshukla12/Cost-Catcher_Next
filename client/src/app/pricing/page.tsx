"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BarChart2,
  Check,
  HelpCircle,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const pricingPlans = [
  {
    name: "Basic",
    price: { monthly: 9.99, annually: 99.99 },
    description: "Essential features for casual price trackers",
    features: [
      "Track up to 50 products",
      "Daily price updates",
      "Email notifications",
      "30-day price history",
    ],
  },
  {
    name: "Pro",
    price: { monthly: 19.99, annually: 199.99 },
    description: "Advanced features for serious bargain hunters",
    features: [
      "Track up to 200 products",
      "Real-time price updates",
      "Email and SMS notifications",
      "90-day price history",
      "Price trend analysis",
      "Customizable alerts",
    ],
  },
  {
    name: "Enterprise",
    price: { monthly: 49.99, annually: 499.99 },
    description: "Comprehensive solution for businesses and power users",
    features: [
      "Unlimited product tracking",
      "Real-time price updates",
      "Email, SMS, and webhook notifications",
      "Unlimited price history",
      "Advanced analytics and reporting",
      "API access",
      "Dedicated support",
    ],
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setShowScrollTop(currentScrollY > 300);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-zinc-900">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-800 shadow-md"
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <BarChart2 className="h-8 w-8 text-blue-600 dark:text-emerald-400" />
            <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-zinc-200">
              PriceTracker
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
              href="/features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
              href="#"
            >
              Blog
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
              href="#"
            >
              Contact
            </Link>
            <Link href="/signin">
              <Button
                variant="outline"
                className="bg-transparent border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-emerald-400 transition-colors"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="dark:bg-emerald-500 dark:text-zinc-900 dark:hover:bg-emerald-600 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Sign Up
              </Button>
            </Link>
            <ThemeToggle />
          </nav>
          <Button
            className="md:hidden text-gray-700 dark:text-zinc-200"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
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
            className="md:hidden bg-white dark:bg-zinc-800 p-4 fixed top-16 right-0 left-0 z-40 border-b border-gray-200 dark:border-zinc-700 shadow-lg"
          >
            <nav className="flex flex-col gap-4">
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                href="/features"
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                href="#"
              >
                Blog
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                href="#"
              >
                Contact
              </Link>
              <Link href="/signin">
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-emerald-400 transition-colors w-full justify-center"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="dark:bg-emerald-500 dark:text-zinc-900 dark:hover:bg-emerald-600 bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full justify-center">
                  Sign Up
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-16">
        <section className="w-full py-20 bg-white dark:bg-zinc-800">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-zinc-200">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 text-center mb-8">
              Select the perfect plan to supercharge your price tracking
              experience
            </p>

            <div className="flex items-center justify-center mb-8">
              <span className="mr-2 text-sm font-medium text-gray-700 dark:text-zinc-300">
                Monthly
              </span>
              <Switch
                checked={billingCycle === "annually"}
                onCheckedChange={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "annually" : "monthly"
                  )
                }
              />
              <span className="ml-2 text-sm font-medium text-gray-700 dark:text-zinc-300">
                Annually
              </span>
              <span className="ml-2 text-sm font-medium text-green-600 dark:text-emerald-400">
                (Save 20%)
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className="flex flex-col bg-gray-50 dark:bg-zinc-700 border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-zinc-200">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-zinc-400">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="text-4xl font-bold mb-4 text-blue-600 dark:text-emerald-400">
                      $
                      {billingCycle === "monthly"
                        ? plan.price.monthly
                        : (plan.price.annually / 12).toFixed(2)}
                      <span className="text-sm font-normal text-gray-600 dark:text-zinc-400">
                        /month
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700 dark:text-zinc-300"
                        >
                          <Check className="h-5 w-5 text-green-500 dark:text-emerald-400 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-zinc-900">
                      Choose {plan.name}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-gray-100 dark:bg-zinc-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-zinc-200">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              <FaqItem
                question="What payment methods do you accept?"
                answer="We accept all major credit cards, PayPal, and bank transfers for annual plans."
              />
              <FaqItem
                question="Can I upgrade or downgrade my plan?"
                answer="Yes, you can change your plan at any time. The new pricing will be prorated based on your billing cycle."
              />
              <FaqItem
                question="Is there a free trial available?"
                answer="We offer a 14-day free trial for all plans. No credit card required to start."
              />
              <FaqItem
                question="How often are prices updated?"
                answer="Price update frequency depends on your plan. Basic plans update daily, while Pro and Enterprise plans offer real-time updates."
              />
              <FaqItem
                question="What happens if I exceed my product tracking limit?"
                answer="You will be notified when you are close to your limit. You can upgrade your plan or remove some tracked products to stay within your limit."
              />
              <FaqItem
                question="Do you offer refunds?"
                answer="We offer a 30-day money-back guarantee for annual plans. Monthly plans can be canceled at any time."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="dark:bg-zinc-800 dark:text-zinc-200 py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:text-left text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link
                className="flex items-center md:justify-start justify-center"
                href="#"
              >
                <BarChart2
                  className="h-8 w-8 text-blue-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
                <span className="ml-2 text-2xl font-bold text-white dark:text-zinc-200">
                  PriceTracker
                </span>
              </Link>
              <p className="text-sm dark:text-zinc-400 text-gray-400 md:mr-4">
                PriceTracker helps you save money by tracking product prices
                across multiple e-commerce platforms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400 dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400 dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400 dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400 dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400 dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400 dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex md:justify-start justify-center space-x-4">
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-400 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 dark:border-zinc-700 text-center">
            <p className="text-sm dark:text-zinc-400 text-gray-400">
              © {new Date().getFullYear()} PriceTracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <Button
          className="fixed bottom-4 right-4 bg-blue-600 text-white dark:bg-emerald-500 dark:text-zinc-900 rounded-full p-2 shadow-lg dark:hover:bg-emerald-600 hover:bg-blue-700 transition-all duration-300 animate-bounce"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" aria-hidden="true" />
        </Button>
      )}
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-white dark:bg-zinc-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-help">
            <h3 className="text-lg font-semibold mb-2 flex items-center text-gray-900 dark:text-zinc-200">
              {question}
              <HelpCircle className="h-4 w-4 ml-2 text-gray-400 dark:text-zinc-500" />
            </h3>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs text-sm text-gray-600 dark:text-zinc-300">
            {answer}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
