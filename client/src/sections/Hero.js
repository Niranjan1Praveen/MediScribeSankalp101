"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import heroDesign from "@/assets/images/heroDesign.png"; // Adjust the path as necessary
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";


// Mock components for demonstration
const Button = ({ children, variant, size, className, ...props }) => (
  <button
    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
      variant === "signup"
        ? "bg-gradient-to-r from-emerald-400 to-teal-500 text-black hover:from-emerald-300 hover:to-teal-400 hover:shadow-2xl hover:shadow-emerald-400/50"
        : "bg-emerald-400 text-black hover:bg-emerald-300"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl">🩺</span>
              <span className="text-emerald-400 font-semibold">
                Empowering Clinicians with Voice & AI
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                AI-Powered{" "}
              </span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                Clinical Documentation
              </span>
              <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                {" "}
                & Health Assistant
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              MediScribe listens, understands, and documents. From real-time
              voice transcription to auto-generated prescriptions, diet and
              exercise plans — our assistant lets doctors{" "}
              <span className="text-emerald-400 font-semibold">
                focus more on care
              </span>{" "}
              and less on paperwork.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <RegisterLink className="flex justify-center items-center lg:justify-start">
                <Button
                  type="submit"
                  variant="signup"
                  size="sm"
                  className="whitespace-nowrap rounded-md group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </span>
                </Button>
              </RegisterLink>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex justify-center lg:justify-start gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">99%</div>
                <div className="text-sm text-slate-400">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">50%</div>
                <div className="text-sm text-slate-400">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">24/7</div>
                <div className="text-sm text-slate-400">Available</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
            >
              {/* Glow Effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-emerald-400/20 via-teal-500/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-2xl opacity-75"></div>

              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full backdrop-blur-sm border border-emerald-400/20 flex items-center justify-center">
                {/* Placeholder for heroDesign image */}
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full flex items-center justify-center">
                  <div className="text-emerald-400 text-6xl font-bold">
                    <Image
                      src={heroDesign}
                      alt="Hero Design"
                      className="relative z-10 rounded-full"
                      width={800}
                      height={800}
                      priority
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 bg-emerald-400/20 rounded-full backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 w-12 h-12 bg-teal-400/20 rounded-full backdrop-blur-sm border border-teal-400/30 flex items-center justify-center"
                  animate={{
                    y: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <svg
                    className="w-6 h-6 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
