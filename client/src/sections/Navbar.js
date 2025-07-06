"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={twMerge(
          "fixed top-0 w-full z-50 transition-all duration-300 px-4 py-4",
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-slate-900/20"
            : "bg-slate-900/60 backdrop-blur-sm"
        )}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-30"></div>
                <Image 
                  src={logo} 
                  alt="Logo Icon" 
                  className="h-12 w-10 relative z-10 rounded-xl" 
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  MediScribe
                </h1>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="relative text-slate-200 hover:text-emerald-400 transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <LoginLink>
                <Button
                  variant="ghost"
                  className="text-slate-200 hover:text-emerald-400 hover:bg-slate-800/50 transition-all duration-300 font-medium"
                >
                  Log in
                </Button>
              </LoginLink>
              <RegisterLink>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300">
                    Sign Up
                  </Button>
                </motion.div>
              </RegisterLink>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-0.5 bg-slate-200 rounded-full transition-all duration-300"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                }}
              />
              <motion.div
                className="w-6 h-0.5 bg-slate-200 rounded-full transition-all duration-300"
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <motion.div
                className="w-6 h-0.5 bg-slate-200 rounded-full transition-all duration-300"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden md:hidden"
              >
                <div className="pt-6 pb-4 border-t border-slate-700/50 mt-4">
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col gap-4 mb-6">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        className="text-slate-200 hover:text-emerald-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-slate-800/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col gap-3">
                    <LoginLink>
                      <Button
                        variant="ghost"
                        className="w-full text-slate-200 hover:text-emerald-400 hover:bg-slate-800/50 transition-all duration-300 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Log in
                      </Button>
                    </LoginLink>
                    <RegisterLink>
                      <Button 
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-2 rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign Up
                      </Button>
                    </RegisterLink>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        
      </motion.header>
    </>
  );
}