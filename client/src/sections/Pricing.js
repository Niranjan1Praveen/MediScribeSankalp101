"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Star, Zap, Building, Users } from "lucide-react";

const pricingPlans = [
  {
    title: "Starter",
    price: "₹0",
    frequency: "/month",
    buttonText: "Get Started",
    features: [
      "Real-time voice transcription (limited)",
      "Basic clinical note generation",
      "Up to 10 patient records",
      "Standard support",
    ],
    popular: false,
    icon: Zap,
    description: "Perfect for individual practitioners getting started",
    gradient: "from-slate-700 to-slate-800",
  },
  {
    title: "Pro Clinic",
    price: "₹350",
    frequency: "/month",
    buttonText: "Upgrade Now",
    features: [
      "Unlimited transcriptions with Whisper",
      "AI-generated digital prescriptions",
      "Personalized diet & exercise plans",
      "Doctor review & approval interface",
      "Basic analytics & reporting",
      "Priority support",
    ],
    popular: true,
    icon: Star,
    description: "Most popular choice for growing clinics",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Enterprise",
    price: "Custom",
    frequency: "/month",
    buttonText: "Contact Sales",
    features: [
      "Multi-user access with Admin dashboard",
      "FHIR-based EMR integration",
      "Custom branding & modules",
      "Advanced analytics dashboard",
      "On-premise deployment (optional)",
      "Dedicated account manager",
    ],
    popular: false,
    icon: Building,
    description: "Comprehensive solution for healthcare institutions",
    gradient: "from-slate-700 to-slate-800",
  },
];

function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="min-h-screen py-24 px-4 relative overflow-hidden" id="pricing">

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight">
            Subscription Plans for Every Practice
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Start free and scale as your clinic grows with MediScribe's flexible SaaS plans.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={cn("text-sm font-medium transition-colors", billingCycle === "monthly" ? "text-emerald-400" : "text-slate-400")}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-14 h-7 bg-slate-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <div className={cn(
                "absolute top-0.5 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-transform duration-300 shadow-lg",
                billingCycle === "yearly" ? "translate-x-7" : "translate-x-0.5"
              )}></div>
            </button>
            <span className={cn("text-sm font-medium transition-colors", billingCycle === "yearly" ? "text-emerald-400" : "text-slate-400")}>
              Yearly
            </span>
            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/30">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredPlan(idx)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Glow effect */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-105",
                  plan.popular ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20" : "bg-slate-700/20"
                )}></div>
                
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <Card className={cn(
                  "relative h-full transition-all duration-500 border-0 transform group-hover:-translate-y-2",
                  plan.popular 
                    ? "bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/10" 
                    : "bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 shadow-lg hover:shadow-xl"
                )}>
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={cn(
                        "w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center",
                        plan.popular 
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30" 
                          : "bg-slate-700"
                      )}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                      <p className="text-slate-400 text-sm">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="flex items-end justify-center gap-1">
                        <span className={cn(
                          "text-4xl font-bold",
                          plan.popular ? "text-emerald-400" : "text-white"
                        )}>
                          {plan.price}
                        </span>
                        <span className="text-slate-400 text-sm mb-1">{plan.frequency}</span>
                      </div>
                      {billingCycle === "yearly" && plan.price !== "₹0" && plan.price !== "Custom" && (
                        <div className="text-sm text-slate-400 mt-1">
                          <span className="line-through">₹{parseInt(plan.price.replace('₹', '')) * 12}</span>
                          <span className="text-emerald-400 ml-2">₹{Math.round(parseInt(plan.price.replace('₹', '')) * 12 * 0.8)}/year</span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-200 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <Button
                      className={cn(
                        "w-full py-3 font-semibold transition-all duration-300 transform hover:scale-105",
                        plan.popular
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-500/30"
                          : "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500"
                      )}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;