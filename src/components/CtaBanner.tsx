import React from "react";
import Link from "next/link";
import { CornerDownLeft, MapPin, Calendar, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteData";

interface CtaBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function CtaBanner({
  title = "Not Sure What Your Next Step Should Be?",
  description = "Let's understand your academic standing, resolve preparation hurdles, and map out a practical, high-yield plan forward.",
  buttonText = "LET'S TALK",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#171717] text-white py-16 sm:py-20 my-10 sm:my-14 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border border-black shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] select-none">
      {/* Subtle dotted matrix overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FFFFFF 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-neutral-800 text-white border border-neutral-700 shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-[#F4C84A] animate-pulse" />
          <span>Personalised Guidance With Rahul</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
          {description}
        </p>

        {/* Location & Slots info */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 font-semibold">
          <div className="flex items-center gap-1.5 bg-neutral-800/90 px-3.5 py-1.5 rounded-xl border border-neutral-700">
            <MapPin className="w-3.5 h-3.5 text-[#F47757] shrink-0" />
            <span>SDO Khedar Power Plant, Barwala</span>
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-800/90 px-3.5 py-1.5 rounded-xl border border-neutral-700">
            <Calendar className="w-3.5 h-3.5 text-[#A8D5A2] shrink-0" />
            <span>In-Person & Online Slots Available</span>
          </div>
        </div>

        {/* Action Button: 3D Keyboard Enter Key */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-between gap-6 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white text-[#171717] font-black text-sm sm:text-base border border-slate-200 transition-all duration-150 select-none shadow-[0_5px_0_#CBD5E1] hover:-translate-y-1 hover:shadow-[0_8px_0_#CBD5E1] active:translate-y-1 active:shadow-[0_1px_0_#CBD5E1]"
          >
            <div className="w-7 h-7 rounded-lg bg-[#171717] flex items-center justify-center text-white">
              <CornerDownLeft className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="tracking-wider uppercase">{buttonText}</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl border border-neutral-700 transition-colors"
          >
            <span>Explore All Services</span>
          </Link>
        </div>

        {/* Direct Phone link */}
        <p className="mt-6 text-xs text-slate-400">
          Direct telephone support:{" "}
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="text-[#F4C84A] font-bold hover:underline inline-flex items-center gap-1 ml-1"
          >
            <Phone className="w-3 h-3 text-[#F4C84A]" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </p>
      </div>
    </section>
  );
}
