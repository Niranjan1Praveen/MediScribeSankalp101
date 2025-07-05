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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden" id="faqs">
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-400 rounded-full opacity-30 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-25 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-teal-500 rounded-full opacity-20 animate-pulse animation-delay-3000"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-3xl rounded-full transform -translate-y-4"></div>
          <div className="relative">
            <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30">
              FAQ
            </span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight">
              Questions? We've got{" "}
              <span className="relative">
                answers
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transform scale-x-0 animate-pulse"></div>
              </span>
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about MediScribe's powerful AI-driven healthcare documentation platform
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
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-105"></div>
              
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-1">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="flex items-center justify-between w-full px-8 py-6 text-left group-hover:text-emerald-400 transition-colors duration-300">
                      <div className="flex items-center gap-4">
                        <div className={`text-2xl transform transition-transform duration-300 ${hoveredIndex === index ? 'scale-110 rotate-12' : ''}`}>
                          {faq.icon}
                        </div>
                        <span className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300">
                          <svg 
                            className="w-4 h-4 text-white transform transition-transform duration-300 data-[state=open]:rotate-180" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 shadow-2xl shadow-emerald-500/20 backdrop-blur-sm border border-emerald-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-emerald-100 mb-6 max-w-md mx-auto">
              Our team is here to help you get the most out of MediScribe
            </p>
            <button className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-full hover:bg-slate-200 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}