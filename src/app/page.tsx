import React from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Calendar,
  Users,
  Target,
  Sparkles,
  Award,
  Phone,
  GraduationCap,
} from "lucide-react";
import {
  servicesData,
  whyChoosePoints,
  resourcesData,
  mentorshipEthos,
  siteConfig,
} from "@/data/siteData";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import ResourceCard from "@/components/ResourceCard";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Your JEE & GATE Journey, Personally Guided | Rahul - SDO HPGCL",
  description:
    "Personalised IIT-JEE guidance, GATE strategy, and core engineering mentorship from Rahul: NIT Kurukshetra EE Alumnus & Assistant Engineer / SDO at HPGCL, based at Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana.",
};

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 text-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-brand-850">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a67_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (Cols 7) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Supporting Line Badge: Aligned with Rahul's background */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-800/80 text-accent-light border border-brand-700/60 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Personalised Guidance from an NIT Kurukshetra Alumnus & Working Engineering Professional</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Your JEE Journey, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                  Personally Guided.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Personalised IIT-JEE guidance, GATE strategy, academic tracking, and core engineering mentorship to help aspirants make smarter, confident decisions at every stage.
              </p>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-900/90 border border-brand-800 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Based at Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana</span>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-accent hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
                >
                  <span>Talk to Rahul</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-850 hover:bg-brand-800 text-slate-200 border border-brand-700 font-semibold text-base px-7 py-3.5 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent-light" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>

              {/* Micro Trust Bullets */}
              <div className="pt-4 border-t border-brand-800/60 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-on-1 Dedicated Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cleared IIT JEE Twice</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Assistant Engineer / SDO</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition (Cols 5) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Glassmorphic Dashboard Card */}
                <div className="bg-gradient-to-b from-brand-900/90 to-brand-950/90 backdrop-blur-md rounded-3xl border border-brand-700/60 p-6 sm:p-8 shadow-elevated">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-brand-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent-light border border-accent/30">
                        <Compass className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">Rahul</h3>
                        <p className="text-[11px] text-accent-light">SDO at HPGCL • NIT Kurukshetra</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800">
                      Active Mentorship
                    </span>
                  </div>

                  {/* Framework Highlights */}
                  <div className="mt-5 space-y-3.5">
                    <div className="p-3.5 rounded-xl bg-brand-850/70 border border-brand-800/80 flex items-start gap-3">
                      <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-white">IIT-JEE Strategy & Diagnostic</div>
                        <p className="text-[11px] text-slate-400 mt-0.5">Two-time qualifier insights on syllabus audit, revision pacing & negative marking control.</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-brand-850/70 border border-brand-800/80 flex items-start gap-3">
                      <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-white">GATE Strategy & Technical Roadmap</div>
                        <p className="text-[11px] text-slate-400 mt-0.5">3-time GATE qualifier framework for core subjects, PYQs, and NAT question accuracy.</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-brand-850/70 border border-brand-800/80 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-white">PSU & Core Engineering Career Growth</div>
                        <p className="text-[11px] text-slate-400 mt-0.5">First-hand guidance on PSU selection, Assistant Engineer roles, and engineering branches.</p>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Booking Pill */}
                  <div className="mt-6 pt-4 border-t border-brand-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Consultancy Base:</span>
                    <span className="text-white font-medium">SDO Khedar, Barwala</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDENTIALS / HIGHLIGHTS SECTION */}
      <section className="py-12 sm:py-16 bg-brand-950 text-white border-b border-brand-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-900 text-accent-light border border-brand-800 mb-2">
              Verified Academic & Professional Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Credentials & Qualifications
            </h2>
          </div>

          {/* 4 Clean Statistics / Credential Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. NIT Kurukshetra */}
            <div className="bg-gradient-to-b from-brand-900/90 to-brand-950/90 p-6 rounded-2xl border border-brand-800/80 hover:border-brand-700 transition-all shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-800/70 text-accent-light flex items-center justify-center mb-4 border border-brand-750">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  NIT Kurukshetra
                </h3>
                <p className="text-sm font-semibold text-accent-light mt-1">
                  Electrical Engineering
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-850/80 text-[11px] text-slate-400">
                Alumnus Background
              </div>
            </div>

            {/* 2. IIT JEE */}
            <div className="bg-gradient-to-b from-brand-900/90 to-brand-950/90 p-6 rounded-2xl border border-brand-800/80 hover:border-brand-700 transition-all shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-800/70 text-amber-300 flex items-center justify-center mb-4 border border-brand-750">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  IIT JEE
                </h3>
                <p className="text-sm font-semibold text-amber-300 mt-1">
                  Cleared Twice
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-850/80 text-[11px] text-slate-400">
                Competitive Exam
              </div>
            </div>

            {/* 3. GATE */}
            <div className="bg-gradient-to-b from-brand-900/90 to-brand-950/90 p-6 rounded-2xl border border-brand-800/80 hover:border-brand-700 transition-all shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-800/70 text-emerald-300 flex items-center justify-center mb-4 border border-brand-750">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  GATE
                </h3>
                <p className="text-sm font-semibold text-emerald-300 mt-1">
                  Qualified 3 Times
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-850/80 text-[11px] text-slate-400">
                Technical Exam
              </div>
            </div>

            {/* 4. HPGCL */}
            <div className="bg-gradient-to-b from-brand-900/90 to-brand-950/90 p-6 rounded-2xl border border-brand-800/80 hover:border-brand-700 transition-all shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-800/70 text-blue-300 flex items-center justify-center mb-4 border border-brand-750">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  HPGCL
                </h3>
                <p className="text-sm font-semibold text-blue-300 mt-1">
                  Assistant Engineer / SDO
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-850/80 text-[11px] text-slate-400">
                Active Professional Role
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT / EXPERTISE SECTION: INTRODUCE RAHUL PROMINENTLY */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (Cols 7): Rahul's Profile & CTAs */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-brand-50 text-brand-700 border border-brand-100">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Meet Your Mentor</span>
              </div>

              {/* Exact Name & Headline */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
                  Rahul
                </h3>
                <p className="mt-2 text-base sm:text-lg font-bold text-brand-700 leading-snug">
                  NIT Kurukshetra EE Alumnus | SDO at HPGCL | JEE & GATE Mentor
                </p>
              </div>

              {/* Exact Profile Description */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Electrical Engineering graduate from NIT Kurukshetra with a strong background in competitive exams. Having cleared IIT JEE twice and qualified GATE 3 times, I currently work as an Assistant Engineer / SDO at HPGCL. My goal is to help aspirants navigate JEE preparation, GATE strategy, PSU selection, and career growth in core engineering with practical guidance and realistic study plans.
              </p>

              {/* Location Reassurance */}
              <div className="flex items-start gap-2.5 text-xs text-slate-500 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  Office location: <strong>Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana</strong>. Consultations conducted in-person and online.
                </span>
              </div>

              {/* CTAs: Talk to Rahul & Call clickable tel */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-850 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>Talk to Rahul</span>
                  <ArrowRight className="w-4 h-4 text-accent-light" />
                </Link>

                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-brand-950 font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl border border-slate-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Content (Cols 5): Mentorship Values */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Individual Attention",
                    desc: "Focused one-on-one sessions addressing the student's unique pacing without the pressure of a 200-student crowd.",
                    icon: Users,
                  },
                  {
                    title: "Exam Strategy",
                    desc: "Structured tactics for paper-solving, question selection, negative-marking control, and mock test review.",
                    icon: Target,
                  },
                  {
                    title: "Realistic Planning",
                    desc: "Weekly study targets and revision cycles tailored to school/board exams and competitive exam dates.",
                    icon: Calendar,
                  },
                  {
                    title: "Career & PSU Clarity",
                    desc: "First-hand advice on core engineering branches, PSU recruitment via GATE, and long-term opportunities.",
                    icon: ShieldCheck,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-200 hover:bg-white hover:shadow-xs transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-100/70 text-brand-800 flex items-center justify-center mb-3">
                      <item.icon className="w-4 h-4 text-brand-700" />
                    </div>
                    <h4 className="text-sm font-bold text-brand-950">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION: 7 PRIORITIZED SERVICES */}
      <section className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Guidance Programs"
            title="Comprehensive Services Reflecting Real Expertise"
            subtitle="Explore our specialized guidance tracks built to support aspirants from early preparation to final college and career milestones."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={index === 0 || index === 1}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-850 text-white font-semibold text-sm px-7 py-3 rounded-xl shadow-xs transition-all"
            >
              <span>View All Services & Program Details</span>
              <ArrowRight className="w-4 h-4 text-accent-light" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Personal Difference"
            title="Why Personalised Guidance Makes a Difference"
            subtitle="Mass coaching factories focus on batch averages. We focus exclusively on the individual aspirant's clarity, consistency, and confidence."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyChoosePoints.map((point, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-brand-300 hover:bg-white hover:shadow-card transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-900 text-white flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-accent-light" />
                  </div>
                  <h3 className="text-base font-bold text-brand-950 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-semibold text-brand-700">
                  Pillar 0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Methodology"
            title="How Rahul Guides You"
            subtitle="A systematic, five-step framework designed to remove ambiguity and build steady academic momentum."
          />

          <ProcessTimeline />

          <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center shrink-0">
                <Compass className="w-6 h-6 text-brand-700" />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-950">
                  Ready to map your first step?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Book a diagnostic consultation at our SDO Khedar office or schedule a video call with Rahul.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-850 text-white font-semibold text-sm px-6 py-3 rounded-xl shrink-0 transition-colors"
            >
              <span>Schedule Diagnostic Session</span>
              <ArrowRight className="w-4 h-4 text-accent-light" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. RESOURCES SECTION */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-brand-50 text-brand-700 border border-brand-100 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Academic Library</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
                Books, Notes & Study Resources
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-xl">
                Curated reference outlines, GATE & JEE study materials, engineering revision notes, and diagnostic test templates.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-brand-950 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                <span>Explore Resources</span>
                <ArrowRight className="w-4 h-4 text-brand-700" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourcesData.slice(0, 3).map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. MENTORSHIP ETHOS & FOCUS (REPLACES PLACEHOLDER REVIEWS) */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Mentorship Principles"
            title="Our Mentorship Ethos"
            subtitle="Transparent, grounded guidance built entirely around student outcomes and verified experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {mentorshipEthos.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-card transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-100 px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold text-accent-dark bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded-full">
                      Core Commitment
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-950 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-900">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Note: We maintain strict ethics—no inflated ranks, fake guarantees, or commercial coaching claims.
          </div>
        </div>
      </section>

      {/* 9. CONSULTATION CTA BANNER */}
      <CtaBanner
        title="Talk to Rahul About Your Academic Goals"
        description="Whether you're targeting JEE, preparing for GATE, or seeking guidance for core engineering careers, let's create a clearer, realistic path forward."
        buttonText="Talk to Rahul"
      />
    </div>
  );
}
