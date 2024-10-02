"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { BarChart2, Check, HelpCircle } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <BarChart2 className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-2xl font-bold text-gray-900">
              PriceTracker
            </span>
          </Link>
          <nav>
            <Link
              href="/"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Choose Your Plan
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Select the perfect plan to supercharge your price tracking experience
        </p>

        <div className="flex items-center justify-center mb-8">
          <span className="mr-2 text-sm font-medium">Monthly</span>
          <Switch
            checked={billingCycle === "annually"}
            onCheckedChange={() =>
              setBillingCycle(
                billingCycle === "monthly" ? "annually" : "monthly"
              )
            }
          />
          <span className="ml-2 text-sm font-medium">Annually</span>
          <span className="ml-2 text-sm font-medium text-green-600">
            (Save 20%)
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold mb-4">
                  $
                  {billingCycle === "monthly"
                    ? plan.price.monthly
                    : (plan.price.annually / 12).toFixed(2)}
                  <span className="text-sm font-normal text-gray-600">
                    /month
                  </span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose {plan.name}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
              answer="You'll be notified when you're close to your limit. You can upgrade your plan or remove some tracked products to stay within your limit."
            />
            <FaqItem
              question="Do you offer refunds?"
              answer="We offer a 30-day money-back guarantee for annual plans. Monthly plans can be canceled at any time."
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} PriceTracker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-help">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              {question}
              <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
            </h3>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{answer}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
