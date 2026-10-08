import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300 border-t border-brand-900">
      {/* Top Value Assurance Banner */}
      <div className="border-b border-brand-900/70 bg-brand-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-brand-850 text-accent-light shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Objective & Independent</h4>
                <p className="text-slate-400 text-xs mt-0.5">
                  No commercial coaching tie-ins or sales agendas. Purely student-centric strategy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-brand-850 text-accent-light shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white">1-on-1 Personal Attention</h4>
                <p className="text-slate-400 text-xs mt-0.5">
                  Bespoke mentoring adapted to each student’s temperament, pace, and ambitions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-brand-850 text-accent-light shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Accessible SDO Khedar Office</h4>
                <p className="text-slate-400 text-xs mt-0.5">
                  Rooted in Barwala, Haryana, welcoming both local families and virtual consultations.
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
            <Link href="/" className="flex items-center gap-3 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-800 to-brand-700 flex items-center justify-center text-white shadow-inner">
                <Compass className="w-5 h-5 text-accent-light" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  {siteConfig.brandName}
                </span>
                <span className="text-xs text-slate-400">
                  {siteConfig.brandSubtitle}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Personalised educational guidance, structured exam tracking, and college admissions advisory for students preparing for IIT-JEE and engineering careers.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1 bg-brand-900/50 p-3.5 rounded-xl border border-brand-850">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Office Location:</strong> {siteConfig.location.title}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About the Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Books & Notes Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact & Book Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              Guidance Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/jee-guidance"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  JEE Guidance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gate-strategy"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  GATE Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/one-to-one-mentorship"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  One-to-One Mentorship
                </Link>
              </li>
              <li>
                <Link
                  href="/services/course-study-planning"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Course & Study Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/college-career-counselling"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  College & Career Counselling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/psu-core-engineering"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  PSU & Core Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/doubt-solving"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Doubt Solving
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              Mentor & Contact
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <p className="text-sm font-bold text-white">{siteConfig.consultant.name}</p>
                <p className="text-[11px] text-accent-light font-medium mt-0.5 leading-snug">
                  {siteConfig.consultant.headline}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="text-slate-200 font-semibold hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  {siteConfig.location.title}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.timings}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-accent-light hover:text-accent transition-colors"
              >
                <span>Talk to Rahul</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-brand-900 bg-brand-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 {siteConfig.brandName}. All rights reserved. Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Independent Academic Mentorship</span>
            <span>•</span>
            <span>Personalised Student Advisory</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
