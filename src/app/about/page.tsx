import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Users,
  ShieldCheck,
  HeartHandshake,
  Target,
  CornerDownLeft,
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
    <div className="bg-[#F8F7F2]">
      {/* 1. EDITORIAL PAGE HERO */}
      <PageHero
        badge="About The Mentor"
        title="Engineering Knowledge. Personal Guidance."
        subtitle="Independent, student-first guidance for IIT-JEE preparation, GATE strategy, and core engineering careers from a working Assistant Engineer & competitive exam qualifier."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        primaryCta={{ label: "TALK TO RAHUL", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />

      {/* 2. DEDICATED PROFILE & 3D KEYCAP CREDENTIALS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Profile Narrative (Cols 7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F8F7F2] text-[#171717] border border-[#DAD8D0]">
                <span className="w-2 h-2 rounded-full bg-[#F47757]" />
                <span>Mentor Background & Ethos</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171717] tracking-tight leading-tight">
                  Meet{" "}
                  <span
                    className="inline-block px-3.5 py-1 rounded-2xl bg-[#F3A6C7] text-[#171717] shadow-[0_4px_0_#C2185B] ml-1"
                    style={{ transform: "rotate(-2.5deg)" }}
                  >
                    Rahul
                  </span>
                </h2>
                <p className="mt-2 text-base sm:text-lg font-black text-[#F47757]">
                  NIT Kurukshetra EE Alumnus | Assistant Engineer / SDO at HPGCL | JEE & GATE Mentor
                </p>
              </div>

              {/* Exact Accurate Biography */}
              <p className="text-base sm:text-lg text-[#656565] leading-relaxed font-medium">
                Electrical Engineering graduate from NIT Kurukshetra with a strong background in competitive exams. Having cleared IIT JEE twice and qualified GATE 3 times, I currently work as an Assistant Engineer / SDO at HPGCL. My goal is to help aspirants navigate JEE preparation, GATE strategy, PSU selection, and career growth in core engineering with practical guidance and realistic study plans.
              </p>

              {/* Office Location Callout */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8F7F2] border border-[#DAD8D0] text-xs font-semibold text-[#171717]">
                <MapPin className="w-4 h-4 text-[#F47757] shrink-0 mt-0.5" />
                <span>
                  Consultancy Office: <strong>{siteConfig.location.title}</strong>. Consultations held in-person and online.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#171717] hover:bg-[#262626] text-white font-black text-sm px-7 py-3.5 rounded-2xl shadow-[0_4px_0_#000] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#000] transition-all uppercase tracking-wider"
                >
                  <CornerDownLeft className="w-4 h-4 stroke-[2.5]" />
                  <span>TALK TO RAHUL</span>
                </Link>

                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F8F7F2] hover:bg-white text-[#171717] border border-[#DAD8D0] font-bold text-sm px-6 py-3.5 rounded-2xl transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#F47757]" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* 4 Colorful 3D Keycap Credential Blocks (Cols 5) */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8F7F2] rounded-3xl border border-[#DAD8D0] p-6 sm:p-8 shadow-xs space-y-4 select-none">
                <div className="flex items-center justify-between pb-3 border-b border-[#DAD8D0]/60">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#171717]">
                    Verified Credentials
                  </h3>
                  <span className="text-[10px] font-black uppercase bg-[#A8D5A2]/30 text-[#064E3B] px-2.5 py-0.5 rounded-full border border-[#A8D5A2]">
                    Verified
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Block 1: NIT Kurukshetra */}
                  <div
                    className="p-5 rounded-2xl bg-[#FFF3EE] border border-[#F47757]/40 transition-transform hover:-translate-y-1 duration-150"
                    style={{ boxShadow: "0 4px 0 #D93838" }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F47757] text-white flex items-center justify-center mb-3">
                      <GraduationCap className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div className="text-base font-black text-[#171717]">
                      NIT Kurukshetra
                    </div>
                    <div className="text-xs font-bold text-[#D93838] mt-0.5">
                      Electrical Engineering
                    </div>
                  </div>

                  {/* Block 2: IIT JEE */}
                  <div
                    className="p-5 rounded-2xl bg-[#FEFCE8] border border-[#F4C84A]/60 transition-transform hover:-translate-y-1 duration-150"
                    style={{ boxShadow: "0 4px 0 #D97706" }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F4C84A] text-[#451A03] flex items-center justify-center mb-3">
                      <Award className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div className="text-base font-black text-[#171717]">
                      IIT JEE
                    </div>
                    <div className="text-xs font-bold text-[#B45309] mt-0.5">
                      Cleared Twice
                    </div>
                  </div>

                  {/* Block 3: GATE */}
                  <div
                    className="p-5 rounded-2xl bg-[#F0FDF4] border border-[#A8D5A2]/60 transition-transform hover:-translate-y-1 duration-150"
                    style={{ boxShadow: "0 4px 0 #059669" }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#A8D5A2] text-[#064E3B] flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div className="text-base font-black text-[#171717]">
                      GATE
                    </div>
                    <div className="text-xs font-bold text-[#059669] mt-0.5">
                      Qualified 3 Times
                    </div>
                  </div>

                  {/* Block 4: HPGCL */}
                  <div
                    className="p-5 rounded-2xl bg-[#FDF2F8] border border-[#F3A6C7]/60 transition-transform hover:-translate-y-1 duration-150"
                    style={{ boxShadow: "0 4px 0 #BE123C" }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F3A6C7] text-[#881337] flex items-center justify-center mb-3">
                      <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div className="text-base font-black text-[#171717]">
                      HPGCL
                    </div>
                    <div className="text-xs font-bold text-[#BE123C] mt-0.5">
                      Assistant Engineer / SDO
                    </div>
                  </div>
                </div>

                <p className="text-[11px] font-medium text-[#656565] pt-2 border-t border-[#DAD8D0]/60">
                  Practical insight from real competitive exam success and ongoing engineering responsibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BASE & CORE PRINCIPLES */}
      <section className="py-16 sm:py-20 bg-[#F8F7F2] border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#171717] border border-[#DAD8D0]">
                <span className="w-2 h-2 rounded-full bg-[#F47757]" />
                <span>Our Advisory Foundation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight leading-tight">
                An Educational Advisory Rooted at SDO Khedar, Barwala
              </h2>
              <p className="text-base text-[#656565] leading-relaxed font-medium">
                This mentorship track was established to fill a crucial gap in competitive exam preparation: the absence of authentic, student-first guidance from someone who has actually cleared both JEE and GATE and works as a practicing engineer.
              </p>
              <p className="text-base text-[#656565] leading-relaxed font-medium">
                Operating from the <strong>Sub-Divisional Offices, Khedar Power Plant (RGTPP Colony), Barwala, Haryana</strong>, Rahul assists local aspirants across the Hisar district as well as online aspirants across the country with disciplined, one-to-one mentorship.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-[#DAD8D0] p-8 space-y-5 shadow-xs">
                <h3 className="text-xl font-black text-[#171717] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#F47757]" />
                  <span>Our Core Mentorship Principles</span>
                </h3>

                <ul className="space-y-4">
                  {[
                    {
                      title: "Purely Student-Centric",
                      desc: "Zero commercial commissions or quotas. Recommendations reflect what best serves the student's personal potential.",
                    },
                    {
                      title: "Calm, Scientific Planning",
                      desc: "Competitive exams are a marathon. High-pressure panic is replaced with balanced weekly pacing, revision loops, and error diagnostics.",
                    },
                    {
                      title: "Honest Academic Assessment",
                      desc: "Factual, grounded feedback so families understand preparation realities and can plan confidently.",
                    },
                  ].map((principle, idx) => (
                    <li key={idx} className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-xl bg-[#F8F7F2] border border-[#DAD8D0] text-[#171717] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-[#171717]">
                          {principle.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#656565] mt-0.5 leading-relaxed font-medium">
                          {principle.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY PERSONALISED GUIDANCE MATTERS */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Consultancy Philosophy"
            title="Why Personalised Guidance Matters"
            subtitle="Mass coaching factories focus on batch averages. We focus exclusively on the individual aspirant's clarity, consistency, and confidence."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#F8F7F2] rounded-3xl border border-[#DAD8D0] p-7 shadow-xs hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#DAD8D0] text-[#F47757] flex items-center justify-center mb-4 shadow-2xs">
                <Target className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black text-[#171717] mb-2">
                Every Mind Learns Differently
              </h3>
              <p className="text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
                Some students grasp Mathematics naturally but freeze during Organic Chemistry reaction mechanisms. A generic batch schedule cannot resolve individual learning variances.
              </p>
            </div>

            <div className="bg-[#F8F7F2] rounded-3xl border border-[#DAD8D0] p-7 shadow-xs hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#DAD8D0] text-[#F4C84A] flex items-center justify-center mb-4 shadow-2xs">
                <Sparkles className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black text-[#171717] mb-2">
                Exam Temperament is Teachable
              </h3>
              <p className="text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
                Knowledge alone does not guarantee a high percentile. Test temperament, question filtration, negative marking control, and composure in high-pressure tests require continuous coaching.
              </p>
            </div>

            <div className="bg-[#F8F7F2] rounded-3xl border border-[#DAD8D0] p-7 shadow-xs hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#DAD8D0] text-[#A8D5A2] flex items-center justify-center mb-4 shadow-2xs">
                <HeartHandshake className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black text-[#171717] mb-2">
                Career Clarity Beyond Exams
              </h3>
              <p className="text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
                Cracking an exam is only step one. Understanding the genuine landscape of engineering branches, campus placements, PSU careers, and state quota rules requires dedicated counseling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPECTATIONS (STUDENTS & PARENTS) */}
      <section className="py-16 sm:py-20 bg-[#F8F7F2] border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Clear Expectations"
            title="What You Can Expect From Rahul's Mentorship"
            subtitle="Absolute transparency so families know exactly how mentorship supports them."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Students */}
            <div className="p-8 rounded-3xl bg-white border border-[#DAD8D0] flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#171717] text-white flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#F4C84A]" />
                  </div>
                  <h3 className="text-xl font-black text-[#171717]">
                    What Students Can Expect
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-[#171717] font-medium">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A8D5A2] shrink-0 mt-0.5" />
                    <span>A safe, non-judgmental environment to voice doubts, anxiety, and syllabus struggles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A8D5A2] shrink-0 mt-0.5" />
                    <span>A structured study roadmap customized to your specific syllabus completion state.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A8D5A2] shrink-0 mt-0.5" />
                    <span>Direct error-log audits to understand why mistakes happen in mock tests.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A8D5A2] shrink-0 mt-0.5" />
                    <span>Practical tips on managing board exams alongside JEE Main, Advanced, and GATE.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DAD8D0]/60 text-xs font-black text-[#F47757] uppercase tracking-wider">
                Focused on your personal growth, consistency, and confidence
              </div>
            </div>

            {/* For Parents */}
            <div className="p-8 rounded-3xl bg-white border border-[#DAD8D0] flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#171717] text-white flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-[#F3A6C7]" />
                  </div>
                  <h3 className="text-xl font-black text-[#171717]">
                    What Parents Can Expect
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-[#171717] font-medium">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A8D5A2] shrink-0 mt-0.5" />
                    <span>Honest, periodic progress updates without marketing hype or false expectations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A8D5A2] shrink-0 mt-0.5" />
                    <span>Guidance on creating a peaceful, low-stress study atmosphere at home.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A8D5A2] shrink-0 mt-0.5" />
                    <span>Clear explanations of exam timelines, application forms, and JoSAA / CSAB rules.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A8D5A2] shrink-0 mt-0.5" />
                    <span>Accessible local advisory at Sub-Divisional Offices, Khedar Power Plant, Barwala.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DAD8D0]/60 text-xs font-black text-[#F47757] uppercase tracking-wider">
                Peace of mind through clarity and professional support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GUIDANCE APPROACH: 4 KEYCAP STEPS */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DAD8D0]">
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
                color: { bg: "#F47757", text: "#FFFFFF", edge: "#D93838" },
              },
              {
                num: "02",
                title: "Targeted Roadmap",
                desc: "We co-create realistic weekly targets with balanced problem practice across all subject requirements.",
                color: { bg: "#A8D5A2", text: "#064E3B", edge: "#059669" },
              },
              {
                num: "03",
                title: "Fortnightly Review",
                desc: "Regular check-ins ensure that syllabus backlogs are identified and resolved before they compound.",
                color: { bg: "#F4C84A", text: "#451A03", edge: "#D97706" },
              },
              {
                num: "04",
                title: "Admissions & Career",
                desc: "Post-exam counseling translates your earned marks into the best possible institution, branch, or PSU route.",
                color: { bg: "#F3A6C7", text: "#881337", edge: "#BE123C" },
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F8F7F2] p-6 rounded-3xl border border-[#DAD8D0] hover:-translate-y-1.5 transition-all shadow-xs"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm mb-4 select-none"
                  style={{
                    backgroundColor: step.color.bg,
                    color: step.color.text,
                    boxShadow: `0 3.5px 0 ${step.color.edge}`,
                  }}
                >
                  {step.num}
                </div>
                <h4 className="text-base font-black text-[#171717] mb-1">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <CtaBanner
        title="Start With an Initial Conversation with Rahul"
        description="Whether you are in Class 11, Class 12, a repeater batch, or preparing for GATE, let's discuss your current standing and build a structured way forward."
        buttonText="TALK TO RAHUL"
      />
    </div>
  );
}
