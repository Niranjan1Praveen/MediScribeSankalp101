"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is MediScribe and how does it help clinicians?",
    answer:
      "MediScribe is an AI-powered web app that transcribes doctor-patient conversations in real-time, generates structured clinical notes, digital prescriptions, and offers personalized health recommendations — all to reduce documentation burden and save time.",
    icon: "🩺",
  },
  {
    question: "How accurate is the voice transcription?",
    answer:
      "We use OpenAI's Whisper model to provide highly accurate medical voice transcription. Our system supports real-time audio capture and intelligent note extraction using MedSpaCy.",
    icon: "🎤",
  },
  {
    question: "Can I edit or review the AI-generated content?",
    answer:
      "Yes. Doctors can review, edit, comment, and approve all AI-generated clinical notes, prescriptions, diets, and exercise recommendations through our clinician interface.",
    icon: "✏️",
  },
  {
    question: "Is MediScribe secure and compliant?",
    answer:
      "Absolutely. MediScribe encrypts all data, uses role-based access controls, and integrates securely with third-party services. We're working toward full healthcare compliance including HIPAA-aligned practices.",
    icon: "🔒",
  },
  {
    question: "Can I use MediScribe on multiple devices or with my team?",
    answer:
      "Yes. Our Pro and Enterprise plans support multiple users and offer an Admin Dashboard for managing access and permissions across your clinic or hospital.",
    icon: "👥",
  },
  {
    question: "How does billing and subscription work?",
    answer:
      "We offer a free plan with limited usage. Paid plans are handled via Stripe, offering monthly or annual billing, and you can upgrade, downgrade, or cancel anytime.",
    icon: "💳",
  },
];

export default function Faqs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-slate"
      id="faqs"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 blur-3xl rounded-full transform -translate-y-4"></div>
          <div className="relative">
            <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30">
              FAQS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight">
              Questions?
              <br/>
              <span className="">
                 We've got answers
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transform scale-x-0 animate-pulse">
                  {" "}
                </div>
              </span>
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about MediScribe's powerful AI-driven
              healthcare documentation platform
            </p>
          </div>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-105"></div>

              <div className="relative backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-1">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="flex items-center justify-between w-full px-8 py-6 text-left group-hover:text-emerald-400 transition-colors duration-300">
                      <div className="flex items-center gap-4">
                        <div
                          className={`text-2xl transform transition-transform duration-300  ${
                            hoveredIndex === index ? "scale-110 rotate-12" : ""
                          }`}
                        >
                          {faq.icon}
                        </div>
                        <span className="text-lg text-white group-hover:text-emerald-400 transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <div className="pl-12 pt-2">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4 transform scale-x-0 animate-pulse"></div>
                        <p className="text-slate-200 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
