"use client";

import React, { useState, useEffect } from "react";
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
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { signUp, resendConfirmationEmail } from "../../lib/auth";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    general: "",
  });
  const [savings, setSavings] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignupComplete, setIsSignupComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSavings((prev) => prev + Math.floor(Math.random() * 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: "", email: "", password: "", general: "" });
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
          if (error.message.includes("Email already registered")) {
            setErrors((prev) => ({
              ...prev,
              email: "This email is already registered",
            }));
          } else {
            setErrors((prev) => ({ ...prev, general: error.message }));
          }
        } else {
          console.log("User signed up:", data);
          setIsSignupComplete(true);
        }
      } catch (error) {
        console.error("Signup error:", error);
        setErrors((prev) => ({
          ...prev,
          general: "An unexpected error occurred. Please try again.",
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleResendConfirmation = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await resendConfirmationEmail(email);
      if (error) {
        setErrors((prev) => ({ ...prev, general: error.message }));
      } else {
        setErrors((prev) => ({
          ...prev,
          general: "Confirmation email resent. Please check your inbox.",
        }));
      }
    } catch (error) {
      console.error("Resend confirmation error:", error);
      setErrors((prev) => ({
        ...prev,
        general: "An error occurred while resending the confirmation email.",
      }));
    } finally {
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
              {isSignupComplete ? "Confirm Your Email" : "Create an account"}
            </CardTitle>
            <CardDescription className="text-zinc-400">
              {isSignupComplete
                ? "Please check your email to confirm your account"
                : "Enter your details below to create your account and start saving"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isSignupComplete && (
              <>
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
              </>
            )}
            {isSignupComplete && (
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                <p className="text-zinc-200 mb-4">
                  We have sent a confirmation email to <strong>{email}</strong>.
                  Please check your inbox and click the link to activate your
                  account.
                </p>
                <Button
                  onClick={handleResendConfirmation}
                  className="w-full bg-zinc-700 hover:bg-zinc-600 text-zinc-200 font-semibold py-2 rounded-md transition-all duration-300 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50"
                  disabled={isSubmitting}
                >
                  Resend Confirmation Email
                </Button>
              </div>
            )}
            {errors.general && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center p-3 rounded-md bg-red-500 bg-opacity-10"
              >
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                <p className="text-sm text-red-500">{errors.general}</p>
              </motion.div>
            )}
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
