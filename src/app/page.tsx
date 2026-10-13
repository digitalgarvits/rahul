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
  CornerDownLeft,
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
import InteractiveHero from "@/components/InteractiveHero";

export const metadata = {
  title: "Your JEE & GATE Journey, Personally Guided | Rahul - SDO HPGCL",
  description:
    "Personalised IIT-JEE guidance, GATE strategy, and core engineering mentorship from Rahul: NIT Kurukshetra EE Alumnus & Assistant Engineer / SDO at HPGCL, based at Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana.",
};

const pillarColors = [
  { bg: "#F47757", text: "#FFFFFF", edge: "#D93838" }, // Coral
  { bg: "#A8D5A2", text: "#064E3B", edge: "#059669" }, // Mint Green
  { bg: "#F4C84A", text: "#451A03", edge: "#D97706" }, // Yellow
  { bg: "#F3A6C7", text: "#881337", edge: "#BE123C" }, // Pink
  { bg: "#F29A48", text: "#FFFFFF", edge: "#C2410C" }, // Orange
];

export default function HomePage() {
  return (
    <div className="space-y-0 bg-[#F8F7F2]">
      {/* 1. HERO SECTION (INTERACTIVE 3D KEYBOARD HERO) */}
      <InteractiveHero />

      {/* 2. CREDENTIALS & QUALIFICATIONS (COLORFUL 3D KEYCAP BLOCKS) */}
      <section
        id="credentials"
        className="py-16 sm:py-20 bg-white border-b border-[#DAD8D0] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Verified Credentials"
            title="Credentials & Verified Background"
            subtitle="Authentic academic achievements and active engineering experience applied directly to your preparation."
          />

          {/* 4 Clean 3D Keycap Credential Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
            {/* 1. NIT Kurukshetra */}
            <div
              className="p-6 rounded-3xl bg-[#FFF3EE] border border-[#F47757]/40 transition-transform hover:-translate-y-1.5 duration-150 flex flex-col justify-between"
              style={{ boxShadow: "0 4px 0 #D93838" }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F47757] text-white flex items-center justify-center mb-4 shadow-2xs">
                  <GraduationCap className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-black text-[#171717]">
                  NIT Kurukshetra
                </h3>
                <p className="text-sm font-bold text-[#D93838] mt-1">
                  Electrical Engineering
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F47757]/20 text-[11px] font-bold text-[#656565] uppercase tracking-wider">
                Alumnus Background
              </div>
            </div>

            {/* 2. IIT JEE */}
            <div
              className="p-6 rounded-3xl bg-[#FEFCE8] border border-[#F4C84A]/60 transition-transform hover:-translate-y-1.5 duration-150 flex flex-col justify-between"
              style={{ boxShadow: "0 4px 0 #D97706" }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F4C84A] text-[#451A03] flex items-center justify-center mb-4 shadow-2xs">
                  <Award className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-black text-[#171717]">
                  IIT JEE
                </h3>
                <p className="text-sm font-bold text-[#B45309] mt-1">
                  Cleared Twice
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F4C84A]/30 text-[11px] font-bold text-[#656565] uppercase tracking-wider">
                Competitive Exam
              </div>
            </div>

            {/* 3. GATE */}
            <div
              className="p-6 rounded-3xl bg-[#F0FDF4] border border-[#A8D5A2]/60 transition-transform hover:-translate-y-1.5 duration-150 flex flex-col justify-between"
              style={{ boxShadow: "0 4px 0 #059669" }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#A8D5A2] text-[#064E3B] flex items-center justify-center mb-4 shadow-2xs">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-black text-[#171717]">
                  GATE
                </h3>
                <p className="text-sm font-bold text-[#059669] mt-1">
                  Qualified 3 Times
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#A8D5A2]/30 text-[11px] font-bold text-[#656565] uppercase tracking-wider">
                Technical Qualifier
              </div>
            </div>

            {/* 4. HPGCL */}
            <div
              className="p-6 rounded-3xl bg-[#FDF2F8] border border-[#F3A6C7]/60 transition-transform hover:-translate-y-1.5 duration-150 flex flex-col justify-between"
              style={{ boxShadow: "0 4px 0 #BE123C" }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F3A6C7] text-[#881337] flex items-center justify-center mb-4 shadow-2xs">
                  <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-black text-[#171717]">
                  HPGCL
                </h3>
                <p className="text-sm font-bold text-[#BE123C] mt-1">
                  Assistant Engineer / SDO
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F3A6C7]/30 text-[11px] font-bold text-[#656565] uppercase tracking-wider">
                Active Professional Role
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT / MEET YOUR MENTOR */}
      <section
        id="about"
        className="py-20 sm:py-24 bg-[#F8F7F2] border-b border-[#DAD8D0]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (Cols 7): Rahul's Profile */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#171717] border border-[#DAD8D0]">
                <span className="w-2 h-2 rounded-full bg-[#F47757]" />
                <span>Meet Your Mentor</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171717] tracking-tight leading-tight">
                  Hi, I'm{" "}
                  <span
                    className="inline-block px-3.5 py-1 rounded-2xl bg-[#F3A6C7] text-[#171717] shadow-[0_4px_0_#C2185B] ml-1"
                    style={{ transform: "rotate(-2.5deg)" }}
                  >
                    Rahul
                  </span>
                </h3>
                <p className="mt-2 text-base sm:text-lg font-black text-[#F47757] leading-snug">
                  NIT Kurukshetra EE Alumnus | SDO at HPGCL | JEE & GATE Mentor
                </p>
              </div>

              {/* Exact Profile Description */}
              <p className="text-base sm:text-lg text-[#656565] leading-relaxed font-medium">
                Electrical Engineering graduate from NIT Kurukshetra with a strong background in competitive exams. Having cleared IIT JEE twice and qualified GATE 3 times, I currently work as an Assistant Engineer / SDO at HPGCL. My goal is to help aspirants navigate JEE preparation, GATE strategy, PSU selection, and career growth in core engineering with practical guidance and realistic study plans.
              </p>

              {/* Location Reassurance */}
              <div className="flex items-start gap-3 text-xs font-semibold text-[#171717] bg-white p-4 rounded-2xl border border-[#DAD8D0] shadow-xs">
                <MapPin className="w-4 h-4 text-[#F47757] shrink-0 mt-0.5" />
                <span>
                  Office location: <strong>Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana</strong>. Consultations conducted in-person and online.
                </span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#171717] hover:bg-[#262626] text-white font-black text-sm px-8 py-3.5 rounded-2xl shadow-[0_4px_0_#000] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#000] transition-all uppercase tracking-wider select-none"
                >
                  <CornerDownLeft className="w-4 h-4 stroke-[2.5]" />
                  <span>TALK TO RAHUL</span>
                </Link>

                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#171717] font-bold text-sm px-6 py-3.5 rounded-2xl border border-[#DAD8D0] transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#F47757]" />
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
                    color: { bg: "#FFF3EE", text: "#F47757" },
                  },
                  {
                    title: "Exam Strategy",
                    desc: "Structured tactics for paper-solving, question selection, negative-marking control, and mock test review.",
                    icon: Target,
                    color: { bg: "#FEFCE8", text: "#B45309" },
                  },
                  {
                    title: "Realistic Planning",
                    desc: "Weekly study targets and revision cycles tailored to school/board exams and competitive exam dates.",
                    icon: Calendar,
                    color: { bg: "#F0FDF4", text: "#059669" },
                  },
                  {
                    title: "Career & PSU Clarity",
                    desc: "First-hand advice on core engineering branches, PSU recruitment via GATE, and long-term opportunities.",
                    icon: ShieldCheck,
                    color: { bg: "#FDF2F8", text: "#BE123C" },
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-3xl bg-white border border-[#DAD8D0] hover:-translate-y-1 transition-all shadow-xs"
                  >
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: item.color.bg, color: item.color.text }}
                    >
                      <item.icon className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <h4 className="text-sm font-black text-[#171717]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#656565] mt-1 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section
        id="services"
        className="py-20 sm:py-24 bg-white border-b border-[#DAD8D0]"
      >
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
              className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#262626] text-white font-black text-xs sm:text-sm px-7 py-3.5 rounded-2xl shadow-[0_4px_0_#000] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#000] transition-all uppercase tracking-wider select-none"
            >
              <span>View All Services & Program Details</span>
              <ArrowRight className="w-4 h-4 text-[#F4C84A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION (5 KEYCAP NUMBERED PILLARS) */}
      <section className="py-20 sm:py-24 bg-[#F8F7F2] border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Personal Difference"
            title="Why Personalised Guidance Makes a Difference"
            subtitle="Mass coaching factories focus on batch averages. We focus exclusively on the individual aspirant's clarity, consistency, and confidence."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 select-none">
            {whyChoosePoints.map((point, index) => {
              const k = pillarColors[index % pillarColors.length];
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-[#DAD8D0] p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all shadow-xs"
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xs mb-4"
                      style={{
                        backgroundColor: k.bg,
                        color: k.text,
                        boxShadow: `0 3px 0 ${k.edge}`,
                      }}
                    >
                      0{index + 1}
                    </div>
                    <h3 className="text-base font-black text-[#171717] mb-2 leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
                      {point.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#DAD8D0]/60 text-[10px] font-black text-[#656565] uppercase tracking-widest">
                    Pillar 0{index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION (HOW RAHUL GUIDES YOU) */}
      <section
        id="process"
        className="py-20 sm:py-24 bg-white border-b border-[#DAD8D0]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Methodology"
            title="How Rahul Guides You"
            subtitle="A systematic, five-step framework designed to remove ambiguity and build steady academic momentum."
          />

          <ProcessTimeline />

          <div className="mt-12 bg-[#F8F7F2] rounded-3xl border border-[#DAD8D0] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#DAD8D0] text-[#171717] flex items-center justify-center shrink-0 shadow-2xs">
                <Compass className="w-6 h-6 text-[#F47757]" />
              </div>
              <div>
                <h4 className="text-base font-black text-[#171717]">
                  Ready to map your first step?
                </h4>
                <p className="text-xs sm:text-sm text-[#656565] font-medium">
                  Book a diagnostic consultation at our SDO Khedar office or schedule a video call with Rahul.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#171717] hover:bg-[#262626] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-[0_4px_0_#000] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#000] transition-all shrink-0 uppercase tracking-wider select-none"
            >
              <CornerDownLeft className="w-4 h-4 stroke-[2.5]" />
              <span>Schedule Diagnostic Session</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. RESOURCES PREVIEW SECTION */}
      <section
        id="resources"
        className="py-20 sm:py-24 bg-[#F8F7F2] border-b border-[#DAD8D0]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#171717] border border-[#DAD8D0] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#F47757]" />
                <span>Academic Library</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight">
                Books, Notes & Study Resources
              </h2>
              <p className="mt-2 text-base text-[#656565] max-w-xl font-medium">
                Curated reference outlines, GATE & JEE study materials, engineering revision notes, and diagnostic test templates.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#171717] font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl border border-[#DAD8D0] transition-colors shadow-xs"
              >
                <span>Explore Resources</span>
                <ArrowRight className="w-4 h-4 text-[#F47757]" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {resourcesData.slice(0, 3).map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. MENTORSHIP ETHOS & FOCUS */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#DAD8D0]">
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
                className="flex flex-col justify-between bg-[#F8F7F2] rounded-3xl border border-[#DAD8D0] p-6 sm:p-7 shadow-xs hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-[#171717] bg-white border border-[#DAD8D0] px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs font-black text-[#B45309] bg-[#FEFCE8] border border-[#F4C84A]/60 px-3 py-1 rounded-full uppercase tracking-wider">
                      Core Commitment
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#171717] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DAD8D0]/60 flex items-center gap-2 text-xs font-black text-[#171717]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#656565] font-semibold">
            Note: We maintain strict ethics—no inflated ranks, fake guarantees, or commercial coaching claims.
          </div>
        </div>
      </section>

      {/* 9. CONSULTATION CTA BANNER */}
      <CtaBanner
        title="Talk to Rahul About Your Academic Goals"
        description="Whether you're targeting JEE, preparing for GATE, or seeking guidance for core engineering careers, let's create a clearer, realistic path forward."
        buttonText="TALK TO RAHUL"
      />
    </div>
  );
}
