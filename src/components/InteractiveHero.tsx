"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CornerDownLeft,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Compass,
} from "lucide-react";

interface KeyCapData {
  id: string;
  label: string;
  href: string;
  bg: string;
  edgeColor: string;
  textColor: string;
  rotation: string;
  description: string;
}

const row1Keys: KeyCapData[] = [
  {
    id: "jee",
    label: "JEE",
    href: "/services/iit-jee-consultancy",
    bg: "#FF5C5C", // Coral
    edgeColor: "#D93838",
    textColor: "#FFFFFF",
    rotation: "-2.5deg",
    description: "IIT-JEE Consultancy & Strategy",
  },
  {
    id: "gate",
    label: "GATE",
    href: "/services/gate-strategy",
    bg: "#34D399", // Mint Green
    edgeColor: "#059669",
    textColor: "#064E3B",
    rotation: "1.8deg",
    description: "GATE Preparation Strategy",
  },
  {
    id: "iit",
    label: "IIT",
    href: "/services/iit-jee-consultancy",
    bg: "#FBBF24", // Yellow
    edgeColor: "#D97706",
    textColor: "#3A2000",
    rotation: "-1.2deg",
    description: "IIT Mentorship & Roadmap",
  },
  {
    id: "psu",
    label: "PSU",
    href: "/services/psu-core-engineering",
    bg: "#881337", // Burgundy
    edgeColor: "#4C0519",
    textColor: "#FFFFFF",
    rotation: "2.2deg",
    description: "PSU & Core Engineering Guidance",
  },
];

const row2Keys: KeyCapData[] = [
  {
    id: "mentor",
    label: "MENTOR",
    href: "/services/one-to-one-guidance",
    bg: "#F43F5E", // Pink
    edgeColor: "#BE123C",
    textColor: "#FFFFFF",
    rotation: "1.5deg",
    description: "One-to-One Personal Mentorship",
  },
  {
    id: "plan",
    label: "PLAN",
    href: "/services/course-tracker",
    bg: "#F97316", // Orange
    edgeColor: "#C2410C",
    textColor: "#FFFFFF",
    rotation: "-2deg",
    description: "Course & Study Planning Tracker",
  },
  {
    id: "learn",
    label: "LEARN",
    href: "/resources",
    bg: "#4ADE80", // Mint / Light Green
    edgeColor: "#16A34A",
    textColor: "#064E3B",
    rotation: "1.2deg",
    description: "Academic Library & Resources",
  },
  {
    id: "grow",
    label: "GROW",
    href: "/about",
    bg: "#FDE047", // Yellow
    edgeColor: "#CA8A04",
    textColor: "#451A03",
    rotation: "-1.8deg",
    description: "About Rahul & Mentorship Ethos",
  },
  {
    id: "career",
    label: "CAREER",
    href: "/services/college-counselling",
    bg: "#FB7185", // Coral / Salmon Pink
    edgeColor: "#E11D48",
    textColor: "#FFFFFF",
    rotation: "2deg",
    description: "College & Career Counselling",
  },
];

const tickerPhrases = [
  "JEE GUIDANCE",
  "GATE STRATEGY",
  "ONE-TO-ONE MENTORSHIP",
  "ACADEMIC PLANNING",
  "COLLEGE & CAREER COUNSELLING",
];

export default function InteractiveHero() {
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const router = useRouter();

  const handleKeyClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    keyId: string,
    href: string
  ) => {
    // Respect browser shortcuts (ctrl/cmd/shift/right click)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    e.preventDefault();
    setPressedKey(keyId);

    // Physical pressed animation delay
    setTimeout(() => {
      setPressedKey(null);
      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(href);
      }
    }, 120);
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF9F5] border-b border-slate-200/80">
      {/* Subtle dotted matrix texture & soft ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#94A3B8 1.15px, transparent 1.15px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20">
        {/* 1. TOP HEADER & GREETING */}
        <div className="max-w-3xl mx-auto text-center space-y-4 animate-hero-fade-up">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white/90 text-slate-800 border border-slate-200/90 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>PERSONALISED GUIDANCE FOR ASPIRANTS</span>
          </div>

          {/* Main Greeting with 3D Pink Name Keycap */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight pt-1">
            <span>Hi, I'm</span>{" "}
            <span
              className="inline-block relative px-3.5 py-1 sm:px-5 sm:py-1.5 rounded-2xl bg-[#FF4D8D] text-white font-black transition-all duration-200 hover:-translate-y-1 hover:brightness-105 active:translate-y-1 cursor-default select-none shadow-[0_5px_0_#C2185B,0_10px_20px_rgba(255,77,141,0.25)] ml-1"
              style={{ transform: "rotate(-2.8deg)" }}
              title="Rahul - SDO HPGCL, NIT Kurukshetra Alumnus"
            >
              <span className="relative z-10">Rahul</span>
              <span className="absolute inset-0 rounded-2xl border-t border-white/40 pointer-events-none" />
            </span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed pt-1">
            An NIT Kurukshetra alumnus helping aspirants navigate JEE, GATE and
            engineering careers with practical guidance.
          </p>

          {/* Compact Verified Credentials Line */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-slate-200 shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>NIT KURUKSHETRA</span>
            </span>
            <span className="text-slate-300 font-bold hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50/90 border border-amber-200/90 text-amber-950 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>JEE CLEARED 2×</span>
            </span>
            <span className="text-slate-300 font-bold hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50/90 border border-emerald-200/90 text-emerald-950 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>GATE QUALIFIED 3×</span>
            </span>
            <span className="text-slate-300 font-bold hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50/90 border border-blue-200/90 text-blue-950 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>SDO AT HPGCL</span>
            </span>
          </div>
        </div>

        {/* 2. KEYBOARD SECTION WITH FLOATING SIDE CARDS */}
        <div className="relative mt-10 sm:mt-14 max-w-5xl mx-auto">
          {/* FLOATING CARD — LEFT (Desktop) */}
          <div className="hidden lg:block absolute -left-4 xl:-left-12 top-6 z-20 animate-hero-float-left">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-[0_12px_30px_-5px_rgba(0,0,0,0.08)] w-48 text-left transition-transform hover:scale-105 duration-200">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
                  EXAM JOURNEY
                </h3>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>IIT-JEE</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>GATE</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>PSU Exams</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FLOATING CARD — RIGHT (Desktop) */}
          <div className="hidden lg:block absolute -right-4 xl:-right-12 top-8 z-20 animate-hero-float-right">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-[0_12px_30px_-5px_rgba(0,0,0,0.08)] w-52 text-left transition-transform hover:scale-105 duration-200">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
                  PERSONALISED SUPPORT
                </h3>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>One-to-one mentoring</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Study planning</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Career guidance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CENTRAL INTERACTIVE KEYBOARD */}
          <div className="max-w-2xl mx-auto px-2">
            {/* ROW 1: JEE, GATE, IIT, PSU */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 md:gap-4 mb-3 sm:mb-4">
              {row1Keys.map((key) => {
                const isPressed = pressedKey === key.id;
                return (
                  <div
                    key={key.id}
                    className="inline-block"
                    style={{ transform: `rotate(${key.rotation})` }}
                  >
                    <Link
                      href={key.href}
                      onClick={(e) => handleKeyClick(e, key.id, key.href)}
                      aria-label={`${key.label}: ${key.description}`}
                      title={key.description}
                      className={`group relative inline-flex items-center justify-center select-none font-black text-center rounded-2xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${
                        isPressed
                          ? "translate-y-1 brightness-95"
                          : "hover:-translate-y-1.5 hover:brightness-105 active:translate-y-1"
                      }`}
                      style={{
                        backgroundColor: key.bg,
                        color: key.textColor,
                        boxShadow: isPressed
                          ? `0 1px 0 ${key.edgeColor}, 0 2px 4px rgba(0,0,0,0.12)`
                          : `0 5px 0 ${key.edgeColor}, 0 10px 18px rgba(0,0,0,0.14)`,
                      }}
                    >
                      {/* Molded 3D highlights */}
                      <span className="absolute inset-0 rounded-2xl border-t border-white/40 pointer-events-none" />
                      <span className="absolute inset-x-0 bottom-0 h-1.5 rounded-b-2xl bg-black/10 pointer-events-none" />

                      {/* Keycap Content */}
                      <span className="relative z-10 text-sm sm:text-base md:text-lg lg:text-xl tracking-wider px-4 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 min-w-[70px] sm:min-w-[85px] md:min-w-[95px] text-center">
                        {key.label}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* ROW 2: MENTOR, PLAN, LEARN, GROW, CAREER */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-3.5">
              {row2Keys.map((key) => {
                const isPressed = pressedKey === key.id;
                return (
                  <div
                    key={key.id}
                    className="inline-block"
                    style={{ transform: `rotate(${key.rotation})` }}
                  >
                    <Link
                      href={key.href}
                      onClick={(e) => handleKeyClick(e, key.id, key.href)}
                      aria-label={`${key.label}: ${key.description}`}
                      title={key.description}
                      className={`group relative inline-flex items-center justify-center select-none font-black text-center rounded-2xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${
                        isPressed
                          ? "translate-y-1 brightness-95"
                          : "hover:-translate-y-1.5 hover:brightness-105 active:translate-y-1"
                      }`}
                      style={{
                        backgroundColor: key.bg,
                        color: key.textColor,
                        boxShadow: isPressed
                          ? `0 1px 0 ${key.edgeColor}, 0 2px 4px rgba(0,0,0,0.12)`
                          : `0 5px 0 ${key.edgeColor}, 0 10px 18px rgba(0,0,0,0.14)`,
                      }}
                    >
                      {/* Molded 3D highlights */}
                      <span className="absolute inset-0 rounded-2xl border-t border-white/40 pointer-events-none" />
                      <span className="absolute inset-x-0 bottom-0 h-1.5 rounded-b-2xl bg-black/10 pointer-events-none" />

                      {/* Keycap Content */}
                      <span className="relative z-10 text-xs sm:text-sm md:text-base lg:text-lg tracking-wider px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 min-w-[62px] sm:min-w-[76px] md:min-w-[85px] text-center">
                        {key.label}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* 3. LARGE ENTER KEY CTA */}
            <div className="mt-8 sm:mt-10 flex justify-center">
              <Link
                href="/contact"
                onClick={(e) => handleKeyClick(e, "enter", "/contact")}
                aria-label="Book a consultation with Rahul - Let's talk"
                className={`group relative inline-flex items-center justify-between gap-5 sm:gap-8 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#14161C] text-white border border-slate-800 transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${
                  pressedKey === "enter"
                    ? "translate-y-1.5 shadow-[0_1px_0_#000,0_2px_4px_rgba(0,0,0,0.2)]"
                    : "hover:-translate-y-1 hover:bg-[#1A1D24] shadow-[0_6px_0_#000000,0_14px_24px_rgba(0,0,0,0.24)] active:translate-y-1.5 active:shadow-[0_1px_0_#000,0_2px_4px_rgba(0,0,0,0.2)]"
                }`}
              >
                {/* 3D Top molded reflection */}
                <span className="absolute inset-0 rounded-2xl border-t border-white/20 pointer-events-none" />

                {/* Left: Large Enter Arrow */}
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:scale-105 transition-transform">
                  <CornerDownLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
                </div>

                {/* Right / Center: CTA Text */}
                <div className="text-left">
                  <div className="text-base sm:text-lg font-black tracking-wider text-white">
                    LET'S TALK
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                    BOOK A CONSULTATION
                  </div>
                </div>
              </Link>
            </div>

            {/* MOBILE / TABLET FLOATING CARDS (Rendered below keyboard) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 lg:hidden max-w-lg mx-auto">
              <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-sm text-left">
                <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
                    EXAM JOURNEY
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-800">
                  <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-100">
                    IIT-JEE
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
                    GATE
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-100">
                    PSU Exams
                  </span>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-sm text-left">
                <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
                    PERSONALISED SUPPORT
                  </h3>
                </div>
                <ul className="space-y-1.5 text-xs font-bold text-slate-800">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>One-to-one mentoring</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Study planning</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Career guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM CONTINUOUS SCROLLING TICKER */}
      <div className="w-full overflow-hidden bg-[#FFF5EB] border-t border-b border-[#FDBA74]/50 py-2.5 sm:py-3 select-none">
        <div className="animate-hero-ticker flex items-center">
          {/* Loop Set 1 */}
          <div className="flex items-center shrink-0">
            {tickerPhrases.concat(tickerPhrases).map((phrase, idx) => (
              <span
                key={`ticker-a-${idx}`}
                className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 shrink-0"
              >
                <span className="text-amber-500 text-xs sm:text-sm">✦</span>
                <span>{phrase}</span>
              </span>
            ))}
          </div>

          {/* Loop Set 2 (Identical for seamless infinite scroll) */}
          <div className="flex items-center shrink-0">
            {tickerPhrases.concat(tickerPhrases).map((phrase, idx) => (
              <span
                key={`ticker-b-${idx}`}
                className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 shrink-0"
              >
                <span className="text-amber-500 text-xs sm:text-sm">✦</span>
                <span>{phrase}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
