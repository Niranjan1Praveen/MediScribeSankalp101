"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import veltrix from "@/assets/images/marketLeaders/1.svg";
import noveNtra from "@/assets/images/marketLeaders/2.svg";
import aurevia from "@/assets/images/marketLeaders/3.svg";
import trionyx from "@/assets/images/marketLeaders/5.svg";
import Image from "next/image";

// Mock logos for demonstration - replace with your actual logo imports
const logos = [
  { name: "Veltrix", image: veltrix },
  { name: "NoveNtra", image: noveNtra },
  { name: "Aurevia", image: aurevia },
  { name: "Trionyx", image: trionyx },
];

export default function LogoTicker() {
  return (
    <section className="py-24 px-4 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 py-2 px-4 bg-emerald-500/10 backdrop-blur-sm rounded-full border border-emerald-400/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-400 text-sm font-medium">
              ✨ Trusted Partners
            </span>
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Trusted by{" "}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              leading clinics
            </span>
          </h3>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join thousands of healthcare professionals who trust MediScribe for
            their clinical documentation needs
          </p>
        </motion.div>

        {/* Logo Ticker */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

          {/* Ticker Container */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: "-50%",
              }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-none gap-16 pr-16 items-center"
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                  {logos.map((logo, logoIndex) => (
                    <motion.div
                      key={`${logo.name}-${i}`}
                      className="relative group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Logo Container */}
                      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-400/10">
                        {/* Placeholder for logo image */}
                        <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-emerald-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-400/10">
                          <Image
                            src={logo.image}
                            alt={logo.name}
                            width={120}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-slate-400">Healthcare Facilities</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-slate-400">Doctors Trust Us</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-slate-400">Satisfaction Rate</div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-slate-400">
            <svg
              className="w-5 h-5 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>HIPAA Compliant</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <svg
              className="w-5 h-5 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            <span>ISO 27001 Certified</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <svg
              className="w-5 h-5 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
