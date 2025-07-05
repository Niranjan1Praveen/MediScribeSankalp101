"use client";
import FeatureCard from "@/components/ui/featureCard";
import Key from "@/components/ui/key";
import { File, FileText, Mic, Zap, Brain, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const barHeights = [20, 32, 16, 40, 24, 40, 16, 32, 20];

export default function Features() {
  return (
    <section
      className="relative py-24 px-4 flex items-center justify-center overflow-hidden"
      id="features"
    >
      <div className="container relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">
              Powerful Features
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              How{" "}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
              MediScribe
            </span>
            <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              {" "}
              Works?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience the future of healthcare documentation with our
            AI-powered platform that transforms how doctors work.
          </motion.p>
        </motion.div>

        {/* Enhanced Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card-1 - Voice Transcription */}
          <motion.div
            className="h-full flex md:col-span-2 lg:col-span-1 "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              title={"Voice-to-Note AI Transcription"}
              description={
                "Automatically transcribe doctor-patient conversations in real-time using Gemini. Extract structured clinical notes and store them securely."
              }
              className="md:col-span-2 lg:col-span-1 group hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 bg-slate-800/50 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40"
            >
              <div className="aspect-video flex items-center justify-center gap-8 rounded-xl p-6 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 rounded-xl"></div>

                {/* Enhanced Mic Button */}
                <motion.div
                  className="relative bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-emerald-400/50 group-hover:shadow-xl group-hover:shadow-emerald-400/70"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 20px rgba(52, 211, 153, 0.3)",
                      "0 0 30px rgba(52, 211, 153, 0.5)",
                      "0 0 20px rgba(52, 211, 153, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Mic className="w-8 h-8 text-black/80" />

                  {/* Pulse rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400/20 animate-ping delay-1000"></div>
                </motion.div>

                {/* Enhanced Waveform */}
                <div className="flex items-center gap-[3px] relative">
                  {barHeights.map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-emerald-400 to-teal-500 rounded-full shadow-sm shadow-emerald-400/50"
                      style={{ height: `${height}px` }}
                      animate={{
                        scaleY: [1, 2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: i * 0.1,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  {/* Waveform glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 blur-sm rounded-full"></div>
                </div>

                {/* Enhanced File Button */}
                <motion.div
                  className="relative bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-emerald-400/50 group-hover:shadow-xl group-hover:shadow-emerald-400/70"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <FileText className="w-7 h-7 text-black/80" />

                  {/* Orbit ring */}
                  <div className="absolute inset-0 rounded-full border border-emerald-400/30"></div>
                </motion.div>

                {/* Connecting lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
                </div>
              </div>
            </FeatureCard>
          </motion.div>

          {/* Card-2 - AI Recommendations */}
          <motion.div
            className="md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              title={"AI-Powered Prescriptions & Recommendations"}
              description={
                "Generate personalized prescriptions, diet plans, and fitness routines using Gemini. Everything is editable, downloadable, and digitally signed."
              }
              className="md:col-span-2 lg:col-span-1 group hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 bg-slate-800/50 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40"
            >
              <div className="aspect-video flex items-center justify-center relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-emerald-500/5 rounded-xl"></div>

                {/* Floating brain icon */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 text-emerald-400/40"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Brain className="w-full h-full" />
                </motion.div>

                {/* Enhanced text content */}
                <motion.div
                  className="text-center relative z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="text-3xl font-bold text-slate-300 text-center leading-relaxed mb-4"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(52, 211, 153, 0.3)",
                        "0 0 30px rgba(52, 211, 153, 0.5)",
                        "0 0 20px rgba(52, 211, 153, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Smart{" "}
                    <motion.span
                      className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    >
                      recommendations
                    </motion.span>
                  </motion.p>

                  <motion.p
                    className="text-2xl font-semibold text-emerald-400"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    in seconds.
                  </motion.p>
                </motion.div>

                {/* Animated particles around text */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-emerald-400/40 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </FeatureCard>
          </motion.div>

          {/* Card-3 - Management */}
          <motion.div
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              title={"Review, Approve, and Manage Patients"}
              description={
                "Doctors can review AI-generated outputs, leave comments, approve or revise notes and prescriptions. Built-in Stripe-based access control and admin tools."
              }
              className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 bg-slate-800/50 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40"
            >
              <div className="aspect-video flex items-center justify-center gap-4 flex-wrap relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-emerald-500/5 rounded-xl"></div>

                {/* Security shield icon */}
                <motion.div
                  className="absolute top-4 left-4 w-6 h-6 text-emerald-400/40"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Shield className="w-full h-full" />
                </motion.div>

                {/* Enhanced Keys */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Key className="w-28 hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30">
                    Approve
                  </Key>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Key className="w-28 hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30">
                    Edit
                  </Key>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Key className="w-28 hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30">
                    Manage
                  </Key>
                </motion.div>

                {/* Connecting lines between keys */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"></div>
                </div>
              </div>
            </FeatureCard>
          </motion.div>
        </div>

        {/* Enhanced Call-to-Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-xl text-slate-400 mb-8"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Ready to transform your healthcare practice?
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-2 py-3 px-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full text-black font-semibold cursor-pointer group hover:shadow-2xl hover:shadow-emerald-400/50 transition-all duration-500"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
          <RegisterLink className="flex justify-center items-center lg:justify-start">
            <span>Get Started Today</span>
            <motion.svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
            </RegisterLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
