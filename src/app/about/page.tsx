import React from "react";
import Link from "next/link";
import {
  Compass,
  CheckCircle2,
  Users,
  ShieldCheck,
  HeartHandshake,
  Target,
  ArrowRight,
  MapPin,
  Sparkles,
  Phone,
  Award,
  GraduationCap,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/siteData";

export const metadata = {
  title: "Meet Rahul | NIT Kurukshetra Alumnus & SDO at HPGCL | JEE & GATE Mentor",
  description:
    "Learn about Rahul, NIT Kurukshetra Electrical Engineering alumnus, 2-time IIT JEE qualifier, 3-time GATE qualifier, and Assistant Engineer / SDO at HPGCL, providing personal mentorship from Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Hero */}
      <PageHero
        badge="About The Mentor"
        title="Personalised Academic Mentorship, Grounded in Real Strategy."
        subtitle="Independent, student-first guidance for IIT-JEE preparation, GATE strategy, and core engineering careers from a working engineering professional."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        primaryCta={{ label: "Talk to Rahul", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />

      {/* 1. DEDICATED PROFILE SECTION: MEET RAHUL */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-brand-800 shadow-elevated relative overflow-hidden">
            {/* Ambient decorative lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Profile Details (Cols 7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-850 text-accent-light border border-brand-700/60 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>Dedicated Mentor Profile</span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    Meet Rahul
                  </h2>
                  <p className="mt-2 text-base sm:text-lg font-bold text-accent-light">
                    NIT Kurukshetra EE Alumnus | Assistant Engineer / SDO at HPGCL | JEE & GATE Mentor
                  </p>
                </div>

                {/* Full Professional Profile Biography */}
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  Electrical Engineering graduate from NIT Kurukshetra with a strong background in competitive exams. Having cleared IIT JEE twice and qualified GATE 3 times, I currently work as an Assistant Engineer / SDO at HPGCL. My goal is to help aspirants navigate JEE preparation, GATE strategy, PSU selection, and career growth in core engineering with practical guidance and realistic study plans.
                </p>

                {/* Office Location Callout */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-brand-900/80 p-3.5 rounded-xl border border-brand-800">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    Consultancy Base: <strong>{siteConfig.location.title}</strong>
                  </span>
                </div>

                {/* Action CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-accent hover:shadow-lg transition-all"
                  >
                    <span>Talk to Rahul</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`tel:${siteConfig.contact.phoneTel}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-850 hover:bg-brand-800 text-slate-200 border border-brand-700 font-semibold text-base px-7 py-3.5 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4 text-accent-light" />
                    <span>Call {siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Key Achievements & Credentials Grid (Cols 5) */}
              <div className="lg:col-span-5">
                <div className="bg-brand-900/80 backdrop-blur-md rounded-2xl border border-brand-750 p-6 sm:p-7 shadow-elevated space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-800">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                      Key Credentials & Highlights
                    </h3>
                    <span className="text-[10px] font-semibold uppercase bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800">
                      Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Item 1: NIT Kurukshetra */}
                    <div className="p-4 rounded-xl bg-brand-950/70 border border-brand-800/80">
                      <div className="w-8 h-8 rounded-lg bg-brand-850 flex items-center justify-center mb-2 text-accent-light">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="text-base font-extrabold text-white">NIT Kurukshetra</div>
                      <div className="text-xs font-semibold text-accent-light mt-0.5">Electrical Engineering</div>
                    </div>

                    {/* Item 2: IIT JEE */}
                    <div className="p-4 rounded-xl bg-brand-950/70 border border-brand-800/80">
                      <div className="w-8 h-8 rounded-lg bg-brand-850 flex items-center justify-center mb-2 text-amber-400">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="text-base font-extrabold text-white">IIT JEE</div>
                      <div className="text-xs font-semibold text-amber-300 mt-0.5">Cleared Twice</div>
                    </div>

                    {/* Item 3: GATE */}
                    <div className="p-4 rounded-xl bg-brand-950/70 border border-brand-800/80">
                      <div className="w-8 h-8 rounded-lg bg-brand-850 flex items-center justify-center mb-2 text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="text-base font-extrabold text-white">GATE</div>
                      <div className="text-xs font-semibold text-emerald-300 mt-0.5">Qualified 3 Times</div>
                    </div>

                    {/* Item 4: HPGCL */}
                    <div className="p-4 rounded-xl bg-brand-950/70 border border-brand-800/80">
                      <div className="w-8 h-8 rounded-lg bg-brand-850 flex items-center justify-center mb-2 text-blue-400">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="text-base font-extrabold text-white">HPGCL</div>
                      <div className="text-xs font-semibold text-blue-300 mt-0.5">Assistant Engineer / SDO</div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 pt-2 border-t border-brand-800/80">
                    Real competitive exam qualifiers & working engineering experience applied directly to your preparation roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BASE & CORE PRINCIPLES */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-brand-50 text-brand-700 border border-brand-100">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Our Base & Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
                An Educational Advisory Rooted at SDO Khedar, Barwala
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Mentorship was established to fill a crucial gap in competitive exam preparation: the absence of authentic, student-first guidance from someone who has actually walked the path and succeeded.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Operating from the <strong>Sub-Divisional Offices, Khedar Power Plant (RGTPP Colony), Barwala, Haryana</strong>, Rahul serves local aspirants across the Hisar region as well as online students across India seeking disciplined, one-to-one mentorship.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-8 space-y-6 shadow-xs">
                <h3 className="text-xl font-bold text-brand-950 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <span>Our Core Mentorship Principles</span>
                </h3>

                <ul className="space-y-4">
                  {[
                    {
                      title: "Purely Student-Centric",
                      desc: "Zero commissions, tie-ins, or commercial quotas from test prep companies or private colleges. Advice is 100% unbiased.",
                    },
                    {
                      title: "Calm, Scientific Planning",
                      desc: "Competitive exams are a marathon. High-pressure panic is replaced with structured weekly pacing, sleep hygiene, and error diagnostics.",
                    },
                    {
                      title: "Honest Academic Assessment",
                      desc: "Realistic, grounded feedback on preparation milestones so students and families can make informed decisions.",
                    },
                  ].map((principle, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-700" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-950">{principle.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5">{principle.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY PERSONALISED GUIDANCE MATTERS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Consultancy Philosophy"
            title="Why Personalised Guidance Matters"
            subtitle="Mass coaching centers operate on high-volume batch models where top performers get attention, while the majority struggle with backlogs. We invert this model."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-7 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-brand-950 mb-2">
                Every Mind Learns Differently
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Some students grasp Mathematics naturally but freeze during Organic Chemistry reaction mechanisms. A generic batch schedule cannot address these individual learning curves.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-7 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-brand-950 mb-2">
                Exam Temperament is Teachable
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Knowledge alone does not guarantee a high percentile. Test temperament, question filtration, negative marking control, and composure in high-pressure tests require continuous coaching.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-7 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-brand-950 mb-2">
                Career Guidance Beyond Exams
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cracking an exam is only step one. Understanding the genuine landscape of engineering branches, campus placements, PSU careers, and state quota rules requires dedicated counseling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT STUDENTS & PARENTS CAN EXPECT */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Clear Expectations"
            title="What You Can Expect From Rahul's Mentorship"
            subtitle="Absolute transparency so families know exactly how mentorship supports them."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What Students Can Expect */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-900 text-white flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-light" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-950">
                    What Students Can Expect
                  </h3>
                </div>

                <ul className="space-y-3.5 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>A safe, non-judgmental environment to voice doubts, anxiety, and syllabus struggles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>A structured study roadmap customized to your specific syllabus completion state.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct error-log audits to understand why mistakes happen in mock tests.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Practical tips on managing board exams alongside JEE Main, Advanced, and GATE.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 text-xs text-brand-800 font-semibold">
                Focused on your personal growth, consistency, and confidence
              </div>
            </div>

            {/* What Parents Can Expect */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-900 text-white flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-accent-light" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-950">
                    What Parents Can Expect
                  </h3>
                </div>

                <ul className="space-y-3.5 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Honest, periodic progress updates without marketing hype or false expectations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Guidance on creating a peaceful, low-stress study atmosphere at home.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Clear explanations of exam timelines, application forms, and JoSAA / CSAB rules.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Accessible local advisory at Sub-Divisional Offices, Khedar Power Plant, Barwala.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 text-xs text-brand-800 font-semibold">
                Peace of mind through clarity and professional support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUIDANCE APPROACH */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Guidance Framework"
            title="Our Guidance Approach"
            subtitle="How we structure our interactions to deliver actionable, disciplined results."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Diagnostic Audit",
                desc: "We review previous test scores, syllabus coverage, and daily study habits to identify clear problem areas.",
              },
              {
                num: "02",
                title: "Targeted Roadmap",
                desc: "We co-create realistic weekly targets with balanced problem practice across all subject requirements.",
              },
              {
                num: "03",
                title: "Fortnightly Review",
                desc: "Regular check-ins ensure that syllabus backlogs are identified and resolved before they compound.",
              },
              {
                num: "04",
                title: "Admissions & Career",
                desc: "Post-exam counseling translates your earned marks into the best possible institution, branch, or PSU route.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 hover:border-brand-300 transition-all shadow-xs"
              >
                <span className="text-2xl font-black text-brand-200">
                  {step.num}
                </span>
                <h4 className="text-base font-bold text-brand-950 mt-2 mb-1">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Start With an Initial Conversation with Rahul"
        description="Whether you are in Class 11, Class 12, a repeater batch, or preparing for GATE, let's discuss your current standing and build a structured way forward."
        buttonText="Talk to Rahul"
      />
    </div>
  );
}
