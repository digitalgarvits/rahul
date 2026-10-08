import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Compass } from "lucide-react";
import { siteConfig } from "@/data/siteData";

interface CtaBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function CtaBanner({
  title = "Not Sure What Your Next Step Should Be?",
  description = "Let's understand your goals, identify the right direction and create a clearer path forward.",
  buttonText = "Book a Consultation",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 text-white py-16 sm:py-20 my-8 sm:my-12 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border border-brand-850 shadow-elevated">
      {/* Decorative ambient highlights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-850 text-accent-light border border-brand-700/60 mb-6">
          <Compass className="w-3.5 h-3.5 text-accent" />
          <span>Personalised Educational Advisory</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Location & Consultation availability callout */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 bg-brand-900/80 px-3 py-1.5 rounded-full border border-brand-800">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>SDO Khedar Power Plant, Barwala</span>
          </div>
          <div className="flex items-center gap-1.5 bg-brand-900/80 px-3 py-1.5 rounded-full border border-brand-800">
            <Calendar className="w-3.5 h-3.5 text-accent-light shrink-0" />
            <span>In-Person & Online Slots Available</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-accent hover:shadow-lg transition-all duration-200 active:scale-95 group"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-850 hover:bg-brand-800 text-slate-200 border border-brand-700 font-semibold text-base px-6 py-3.5 rounded-xl transition-colors"
          >
            <span>Explore All Services</span>
          </Link>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Direct telephone support:{" "}
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="text-accent-light font-semibold hover:underline"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
