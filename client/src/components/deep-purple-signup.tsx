"use client"

import React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { BarChart2, ArrowRight, Mail, Lock, User, IndianRupee, Sparkles } from "lucide-react"
import Link from "next/link"

export function DeepPurpleSignup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({ name: "", email: "", password: "" })
  const [savings, setSavings] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setSavings(prev => prev + Math.floor(Math.random() * 100))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({ name: "", email: "", password: "" })
    let hasError = false

    if (name.trim() === "") {
      setErrors(prev => ({ ...prev, name: "Name is required" }))
      hasError = true
    }
    if (email.trim() === "") {
      setErrors(prev => ({ ...prev, email: "Email is required" }))
      hasError = true
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors(prev => ({ ...prev, email: "Email is invalid" }))
      hasError = true
    }
    if (password.length < 8) {
      setErrors(prev => ({ ...prev, password: "Password must be at least 8 characters long" }))
      hasError = true
    }

    if (!hasError) {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Form submitted:", { name, email, password })
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focus: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 10 } },
    blur: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 10 } }
  }

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 flex flex-col justify-center items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link href="/" className="flex items-center mb-12 transition-transform hover:scale-105">
          <BarChart2 className="h-12 w-12 text-white" />
          <span className="ml-2 text-4xl font-bold text-white">PriceTracker</span>
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="w-full max-w-md bg-purple-900/90 backdrop-blur-md shadow-2xl border border-purple-500/50">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-2 text-purple-50">Join PriceTracker Elite</CardTitle>
            <CardDescription className="text-lg text-purple-200">
              Start saving on your favorite products today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div 
              className="text-center mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-xl font-semibold mb-2 text-purple-200">
                Members have saved
              </p>
              <motion.div 
                className="text-5xl font-bold text-purple-50 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <IndianRupee className="h-10 w-10 mr-2" />
                <span className="tabular-nums">{savings.toLocaleString()}</span>
              </motion.div>
            </motion.div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div className="space-y-2" variants={inputVariants} whileFocus="focus">
                <Label htmlFor="name" className="text-lg text-purple-100 flex items-center">
                  <User className="inline-block mr-2 h-5 w-5" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-lg py-3 bg-purple-800/50 border-purple-600/50 text-white placeholder-purple-300"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-300"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div className="space-y-2" variants={inputVariants} whileFocus="focus">
                <Label htmlFor="email" className="text-lg text-purple-100 flex items-center">
                  <Mail className="inline-block mr-2 h-5 w-5" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg py-3 bg-purple-800/50 border-purple-600/50 text-white placeholder-purple-300"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-300"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div className="space-y-2" variants={inputVariants} whileFocus="focus">
                <Label htmlFor="password" className="text-lg text-purple-100 flex items-center">
                  <Lock className="inline-block mr-2 h-5 w-5" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-lg py-3 bg-purple-800/50 border-purple-600/50 text-white placeholder-purple-300"
                  aria-invalid={errors.password ? "true" : "false"}
                />
                <AnimatePresence>
                  {errors.password && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-red-300"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  type="submit" 
                  className="w-full mt-8 bg-pink-500 hover:bg-pink-600 text-white text-xl py-6 rounded-md transition-all duration-300 focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <>
                      Start Saving Now
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-purple-200">
              Already a member?{" "}
              <Link href="/login" className="text-white hover:underline font-semibold">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  )
}