import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import {
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  CornerDownLeft,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-slate-300 border-t border-black select-none">
      {/* Top Value Assurance Banner */}
      <div className="border-b border-neutral-800 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 text-[#F4C84A] flex items-center justify-center shrink-0 border border-neutral-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Objective & Independent</h4>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                  No commercial coaching tie-ins or sales agendas. Purely student-centric academic strategy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 text-[#A8D5A2] flex items-center justify-center shrink-0 border border-neutral-700">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">1-on-1 Personal Attention</h4>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                  Bespoke mentoring adapted to each student's temperament, pacing, and ambitions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 text-[#F3A6C7] flex items-center justify-center shrink-0 border border-neutral-700">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">SDO Khedar Office Hub</h4>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                  Rooted in Barwala, Haryana, welcoming both local families and virtual online consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="inline-block px-3 py-1 rounded-xl bg-[#F3A6C7] text-[#171717] font-black text-xl tracking-tight shadow-[0_3px_0_#C2185B]">
                Rahul
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-black uppercase tracking-wider text-white">
                  JEE & GATE GUIDANCE
                </span>
                <span className="text-xs text-slate-400">
                  SDO Khedar Advisory
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Personalised educational guidance, structured exam tracking, and college admissions advisory for students preparing for IIT-JEE, GATE, and engineering careers.
            </p>

            {/* Credential summary */}
            <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-bold">
                <GraduationCap className="w-4 h-4 text-[#F4C84A]" />
                <span>Rahul • NIT Kurukshetra EE Alumnus</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Assistant Engineer / SDO at HPGCL • Cleared JEE 2× • GATE 3×
              </p>
            </div>

            <div className="text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F47757] shrink-0 mt-0.5" />
                <span>
                  <strong>Office:</strong> {siteConfig.location.title}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-black tracking-widest uppercase text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Meet Rahul (About)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Guidance Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Academic Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Priority Tracks */}
          <div className="space-y-4">
            <h3 className="text-xs font-black tracking-widest uppercase text-white">
              Guidance Tracks
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/services/iit-jee-consultancy"
                  className="hover:text-white transition-colors"
                >
                  IIT-JEE Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gate-strategy"
                  className="hover:text-white transition-colors"
                >
                  GATE Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/one-to-one-guidance"
                  className="hover:text-white transition-colors"
                >
                  One-to-One Mentorship
                </Link>
              </li>
              <li>
                <Link
                  href="/services/course-tracker"
                  className="hover:text-white transition-colors"
                >
                  Course & Study Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/college-counselling"
                  className="hover:text-white transition-colors"
                >
                  College Counselling (JoSAA)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/psu-core-engineering"
                  className="hover:text-white transition-colors"
                >
                  PSU & Engineering Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & CTA */}
          <div className="space-y-4">
            <h3 className="text-xs font-black tracking-widest uppercase text-white">
              Get In Touch
            </h3>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p>
                Direct Call:{" "}
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="text-white font-bold hover:underline block text-sm mt-0.5"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="text-[11px] leading-relaxed">
                Timings: {siteConfig.contact.timings}
              </p>
            </div>

            {/* Keyboard Enter CTA Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-black text-xs px-4 py-2.5 rounded-xl shadow-[0_3px_0_#000] border border-neutral-700 transition-transform active:translate-y-0.5"
              >
                <CornerDownLeft className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                <span className="uppercase tracking-wider">LET'S TALK</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Rahul — JEE & GATE Personalised Guidance. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>SDO Khedar, Barwala, Haryana</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact & Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
