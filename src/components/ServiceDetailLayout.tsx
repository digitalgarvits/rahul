import React from "react";
import Link from "next/link";
import {
  Compass,
  CheckCircle2,
  Users,
  Target,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import SectionHeader from "@/components/SectionHeader";
import { ServiceItem, siteConfig } from "@/data/siteData";

interface ServiceDetailLayoutProps {
  service: ServiceItem;
}

export default function ServiceDetailLayout({ service }: ServiceDetailLayoutProps) {
  return (
    <div>
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
        primaryCta={{ label: "Talk to Rahul", href: "/contact" }}
        secondaryCta={{ label: "All Services", href: "/services" }}
      />

      {/* 2. SERVICE INTRODUCTION */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-brand-50 text-brand-700 border border-brand-100">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Service Overview</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
                About {service.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {service.summary}
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  Delivered both in-person at <strong>Sub-Divisional Offices, Khedar Power Plant, Barwala</strong> and via structured virtual 1-on-1 sessions.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-brand-950 text-white rounded-3xl p-8 shadow-elevated border border-brand-850 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span>Key Pillars of this Track</span>
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-light shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-brand-800">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors"
                  >
                    <span>Request Session for this Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT THE SERVICE INCLUDES */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
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
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5 hover:border-brand-300 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-950 mb-1">
                    Component 0{idx + 1}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO IT IS FOR & BENEFITS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Who It Is For */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-900 text-white flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-950">Who It Is For</h3>
                  <p className="text-xs text-slate-500">Target audience and student stage</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-600">
                {service.whoItsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-900 text-white flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-950">Key Benefits</h3>
                  <p className="text-xs text-slate-500">Why this guidance creates real outcomes</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-600">
                {service.benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Process Flow"
            title="How This Service Works"
            subtitle="Step-by-step engagement from initial diagnostic to continuous calibration."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.howItWorks.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-block mb-4">
                    {step.step}
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 text-xs text-slate-400">
                  Continuous Mentorship Feedback
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CtaBanner
        title={`Take the Next Step with ${service.title}`}
        description="Schedule a personalized consultation with Rahul at Sub-Divisional Offices, Khedar Power Plant, Barwala or online to discuss your exact preparation needs."
        buttonText="Talk to Rahul"
      />
    </div>
  );
}
