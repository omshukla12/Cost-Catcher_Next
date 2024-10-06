"use client";

import React, { useState } from "react";
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
  Sparkles,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { signIn } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: "", password: "", general: "" });
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
      try {
        const { data, error } = await signIn(email, password);
        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            setErrors((prev) => ({
              ...prev,
              general: "Invalid email or password",
            }));
          } else {
            setErrors((prev) => ({ ...prev, general: error.message }));
          }
        } else {
          console.log("User signed in:", data);
          router.push("/homepage");
        }
      } catch (error) {
        console.error("Signin error:", error);
        setErrors((prev) => ({
          ...prev,
          general: "An unexpected error occurred. Please try again.",
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
      className="min-h-screen bg-gray-100 dark:bg-zinc-900 flex flex-col justify-center items-center p-4"
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
          <BarChart2 className="h-12 w-12 text-blue-600 dark:text-zinc-200" />
          <span className="ml-2 text-4xl font-bold text-gray-900 dark:text-zinc-200">
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
        <Card className="bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-zinc-200">
              Sign in to your account
            </CardTitle>
            <CardDescription className="text-gray-500 dark:text-zinc-400">
              Enter your email and password to access your PriceTracker account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={inputVariants} whileFocus="focus">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-zinc-300"
                >
                  Email Address
                </Label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-zinc-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 text-gray-900 dark:text-zinc-200 placeholder-gray-400 dark:placeholder-zinc-400 focus:ring-blue-500 dark:focus:ring-emerald-400 focus:border-blue-500 dark:focus:border-emerald-400"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-600 dark:text-red-400 mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div variants={inputVariants} whileFocus="focus">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700 dark:text-zinc-300"
                >
                  Password
                </Label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-zinc-500" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-white dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 text-gray-900 dark:text-zinc-200 placeholder-gray-400 dark:placeholder-zinc-400 focus:ring-blue-500 dark:focus:ring-emerald-400 focus:border-blue-500 dark:focus:border-emerald-400"
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                </div>
                <AnimatePresence>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-600 dark:text-red-400 mt-1"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="remember"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-checkbox h-4 w-4 text-blue-600 dark:text-emerald-400 rounded border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 focus:ring-blue-500 dark:focus:ring-emerald-400"
                  />
                  <span className="text-sm text-gray-700 dark:text-zinc-300">
                    Remember me
                  </span>
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-800 dark:text-emerald-400 dark:hover:text-emerald-300 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              {errors.general && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-3 rounded-md bg-red-100 dark:bg-red-900 bg-opacity-50 dark:bg-opacity-10"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 dark:text-red-400 mr-2" />
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {errors.general}
                  </p>
                </motion.div>
              )}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-zinc-900 font-semibold py-3 rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 dark:focus:ring-emerald-400 focus:ring-opacity-50"
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
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-gray-600 dark:text-zinc-400">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-600 hover:text-blue-800 dark:text-emerald-400 dark:hover:text-emerald-300 hover:underline font-semibold"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}
