"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  BarChart2,
  ArrowRight,
  Mail,
  Lock,
  IndianRupee,
  Sparkles,
  Eye,
  EyeOff,
} from "lucide-react";
import Link from "next/link";

export default function DistinctiveSignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });
    let hasError = false;

    if (email.trim() === "") {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Email is invalid" }));
      hasError = true;
    }
    if (password.trim() === "") {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      hasError = true;
    }

    if (!hasError) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", { email, password });
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    blur: {
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col justify-center items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link
          href="/"
          className="flex items-center mb-6 transition-transform hover:scale-105"
        >
          <BarChart2 className="h-12 w-12 text-white" />
          <span className="ml-2 text-4xl font-bold text-white">
            PriceTracker
          </span>
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-2 text-white">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-lg text-indigo-200">
              Sign in to continue your savings journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              className="text-center mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-lg font-semibold mb-2 text-indigo-200">
                Your savings dashboard awaits
              </p>
              <motion.div
                className="text-4xl font-bold text-white flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <IndianRupee className="h-8 w-8 mr-2 text-indigo-300" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                  PriceTracker
                </span>
              </motion.div>
            </motion.div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="space-y-2"
                variants={inputVariants}
                whileFocus="focus"
              >
                <Label
                  htmlFor="email"
                  className="text-lg text-indigo-100 flex items-center"
                >
                  <Mail className="inline-block mr-2 h-5 w-5" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg py-3 bg-white/20 border-white/30 text-white placeholder-indigo-200"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-pink-300"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                className="space-y-2"
                variants={inputVariants}
                whileFocus="focus"
              >
                <Label
                  htmlFor="password"
                  className="text-lg text-indigo-100 flex items-center"
                >
                  <Lock className="inline-block mr-2 h-5 w-5" />
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-lg py-3 bg-white/20 border-white/30 text-white placeholder-indigo-200 pr-10"
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-indigo-200 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <AnimatePresence>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-pink-300"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xl py-6 rounded-md transition-all duration-300 focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Sparkles className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </CardContent>
          <CardFooter className="justify-center flex-col space-y-4">
            <p className="text-indigo-200">
              New to PriceTracker?{" "}
              <Link
                href="/signup"
                className="text-white hover:underline font-semibold"
              >
                Create an account
              </Link>
            </p>
            <Link
              href="#"
              className="text-indigo-200 hover:text-white transition-colors"
            >
              Forgot your password?
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}
