import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Users,
  Target,
  CornerDownLeft,
  MapPin,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import SectionHeader from "@/components/SectionHeader";
import { ServiceItem } from "@/data/siteData";

interface ServiceDetailLayoutProps {
  service: ServiceItem;
}

const stepColors = [
  { bg: "#F47757", text: "#FFFFFF", edge: "#D93838" },
  { bg: "#A8D5A2", text: "#064E3B", edge: "#059669" },
  { bg: "#F4C84A", text: "#451A03", edge: "#D97706" },
  { bg: "#F3A6C7", text: "#881337", edge: "#BE123C" },
];

export default function ServiceDetailLayout({ service }: ServiceDetailLayoutProps) {
  return (
    <div className="bg-[#F8F7F2]">
      {/* 1. HERO */}
      <PageHero
        badge={service.heroBadge}
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        primaryCta={{ label: "TALK TO RAHUL", href: "/contact" }}
        secondaryCta={{ label: "All Services", href: "/services" }}
      />

      {/* 2. SERVICE INTRODUCTION */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F8F7F2] text-[#171717] border border-[#DAD8D0]">
                <span className="w-2 h-2 rounded-full bg-[#F47757]" />
                <span>Service Overview</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight leading-tight">
                About {service.title}
              </h2>
              <p className="text-base sm:text-lg text-[#656565] leading-relaxed font-medium">
                {service.summary}
              </p>
              <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-[#DAD8D0] text-xs font-semibold text-[#171717] flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F47757] shrink-0 mt-0.5" />
                <span>
                  Delivered both in-person at{" "}
                  <strong>Sub-Divisional Offices, Khedar Power Plant, Barwala</strong>{" "}
                  and via structured virtual 1-on-1 advisory sessions.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#171717] text-white rounded-3xl p-8 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.25)] border border-black space-y-5 select-none">
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F4C84A]" />
                  <span>Key Pillars of this Track</span>
                </h3>
                <ul className="space-y-3 text-sm text-slate-300 font-medium">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A8D5A2] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-neutral-800">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-white text-[#171717] font-black text-xs sm:text-sm py-3.5 px-4 rounded-2xl shadow-[0_4px_0_#CBD5E1] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#CBD5E1] transition-all uppercase tracking-wider"
                  >
                    <CornerDownLeft className="w-4 h-4 stroke-[2.5]" />
                    <span>REQUEST THIS TRACK</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT THE SERVICE INCLUDES */}
      <section className="py-16 sm:py-20 bg-[#F8F7F2] border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Inclusions"
            title="What the Service Includes"
            subtitle="Clear, tangible elements included in your personalized guidance track."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatItIncludes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-[#DAD8D0] shadow-xs hover:-translate-y-1 hover:shadow-card transition-all flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-[#F8F7F2] border border-[#DAD8D0] text-[#171717] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#171717] mb-1">
                    Component 0{idx + 1}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO IT IS FOR & BENEFITS */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Who It Is For */}
            <div className="p-8 rounded-3xl bg-[#F8F7F2] border border-[#DAD8D0]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#171717] text-white flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#F4C84A]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#171717]">Who It Is For</h3>
                  <p className="text-xs font-semibold text-[#656565]">
                    Target audience and student stage
                  </p>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-[#171717] font-medium">
                {service.whoItsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F47757] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="p-8 rounded-3xl bg-[#F8F7F2] border border-[#DAD8D0]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#171717] text-white flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#A8D5A2]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#171717]">Key Benefits</h3>
                  <p className="text-xs font-semibold text-[#656565]">
                    Why personalised guidance produces tangible momentum
                  </p>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-[#171717] font-medium">
                {service.benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (KEYCAP NUMBERED STEPS) */}
      <section className="py-16 sm:py-20 bg-[#F8F7F2] border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Process Flow"
            title="How This Service Works"
            subtitle="Step-by-step engagement from initial diagnostic to continuous revision calibration."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.howItWorks.map((step, idx) => {
              const k = stepColors[idx % stepColors.length];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-[#DAD8D0] p-7 shadow-xs hover:-translate-y-1.5 hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div>
                    <span
                      className="inline-block text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-xl shadow-2xs mb-4 select-none"
                      style={{
                        backgroundColor: k.bg,
                        color: k.text,
                        boxShadow: `0 3px 0 ${k.edge}`,
                      }}
                    >
                      {step.step}
                    </span>
                    <p className="text-sm text-[#171717] leading-relaxed font-medium">
                      {step.detail}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-[#DAD8D0]/60 text-xs font-bold text-[#656565] uppercase tracking-wide">
                    Continuous Mentorship Feedback
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <CtaBanner
        title={`Take the Next Step with ${service.title}`}
        description="Schedule a personalized consultation with Rahul at Sub-Divisional Offices, Khedar Power Plant, Barwala or online to discuss your exact preparation needs."
        buttonText="TALK TO RAHUL"
      />
    </div>
  );
}
