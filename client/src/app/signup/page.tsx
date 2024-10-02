"use client";

import React from "react";
import { useState, useEffect } from "react";
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
  User,
  IndianRupee,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { signUp } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function UpdatedSignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [savings, setSavings] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setSavings((prev) => prev + Math.floor(Math.random() * 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: "", email: "", password: "" });
    let hasError = false;

    if (name.trim() === "") {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
      hasError = true;
    }
    if (email.trim() === "") {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Email is invalid" }));
      hasError = true;
    }
    if (password.length < 8) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters long",
      }));
      hasError = true;
    }

    if (!hasError) {
      setIsSubmitting(true);
      try {
        const { data, error } = await signUp(email, password);
        if (error) {
          setErrors((prev) => ({ ...prev, email: error.message }));
        } else {
          console.log("User signed up:", data);
          router.push("/homepage");
        }
      } catch (error) {
        console.error("Signup error:", error);
        setErrors((prev) => ({
          ...prev,
          email: "An error occurred during signup",
        }));
      } finally {
        setIsSubmitting(false);
      }
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
      className="min-h-screen bg-zinc-900 flex flex-col justify-center items-center p-4"
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
          className="flex items-center mb-12 transition-transform hover:scale-105"
        >
          <BarChart2 className="h-12 w-12 text-zinc-200" />
          <span className="ml-2 text-4xl font-bold text-zinc-200">
            PriceTracker
          </span>
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full max-w-md"
      >
        <Card className="bg-zinc-800 border-zinc-700 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-zinc-200">
              Create an account
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Enter your details below to create your account and start saving
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <motion.div
              className="text-center mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-lg font-semibold text-zinc-300 mb-2">
                Members have saved
              </p>
              <motion.div
                className="text-4xl font-bold text-zinc-200 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <IndianRupee className="h-8 w-8 mr-2 text-emerald-400" />
                <span className="tabular-nums text-emerald-400">
                  {savings.toLocaleString()}
                </span>
              </motion.div>
            </motion.div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={inputVariants} whileFocus="focus">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-zinc-300"
                >
                  Full Name
                </Label>
                <div className="mt-1 relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 bg-zinc-700 border-zinc-600 text-zinc-200 placeholder-zinc-400 focus:ring-emerald-400 focus:border-emerald-400"
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                </div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-400 mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div variants={inputVariants} whileFocus="focus">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-zinc-300"
                >
                  Email Address
                </Label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-zinc-700 border-zinc-600 text-zinc-200 placeholder-zinc-400 focus:ring-emerald-400 focus:border-emerald-400"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-400 mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div variants={inputVariants} whileFocus="focus">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-zinc-300"
                >
                  Password
                </Label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-zinc-700 border-zinc-600 text-zinc-200 placeholder-zinc-400 focus:ring-emerald-400 focus:border-emerald-400"
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                </div>
                <AnimatePresence>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-400 mt-1"
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
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-900 font-semibold py-3 rounded-md transition-all duration-300 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50"
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
                      Create Account
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-zinc-400">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-emerald-400 hover:underline font-semibold"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}
