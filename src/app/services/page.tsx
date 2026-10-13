import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import { servicesData, siteConfig } from "@/data/siteData";

export const metadata = {
  title: "Find Your Next Step | Guidance Services by Rahul - SDO HPGCL",
  description:
    "Explore our complete suite of mentorship services: JEE Guidance, GATE Strategy, One-to-One Mentorship, Course & Study Planning, College & Career Counselling, PSU & Core Engineering Guidance, Doubt Solving, and Study Resources.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F8F7F2]">
      {/* 1. PAGE HERO */}
      <PageHero
        badge="Guidance Directory"
        title="Find Your Next Step."
        subtitle="Practical guidance for competitive exams, academic planning and engineering careers."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        primaryCta={{ label: "TALK TO RAHUL", href: "/contact" }}
        secondaryCta={{ label: "View Study Resources", href: "/resources" }}
      />

      {/* 2. CREATIVE SERVICES DIRECTORY (8 TRACKS) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Guidance Directory"
            title="Comprehensive Services Built on Real Experience"
            subtitle="Explore our specialized guidance tracks built to support aspirants from early preparation to final college and career milestones."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 7 Defined Services from servicesData */}
            {servicesData.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={idx === 0 || idx === 1}
              />
            ))}

            {/* 8. Books, Notes & Study Resources Card */}
            <div className="group relative flex flex-col justify-between bg-white rounded-3xl border border-[#DAD8D0] p-6 sm:p-7 shadow-xs hover:-translate-y-1.5 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)] transition-all duration-200">
              <div>
                {/* Keycap Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-150 group-hover:scale-105"
                    style={{
                      backgroundColor: "#A8D5A2",
                      color: "#064E3B",
                      boxShadow: "0 4px 0 #059669",
                    }}
                  >
                    <BookOpen className="w-5 h-5 stroke-[2.5]" />
                  </div>

                  <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#F0FDF4] text-[#171717] border border-[#DAD8D0]/80">
                    Academic Library
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#171717] tracking-tight group-hover:text-[#F47757] transition-colors">
                  Books, Notes & Study Resources
                </h3>

                <p className="mt-2.5 text-sm text-[#656565] leading-relaxed font-medium">
                  Curated standard references, JEE & GATE preparation notes, formula outlines, and mock test diagnostic error-logging templates.
                </p>

                <ul className="mt-4 space-y-2 pt-3 border-t border-[#DAD8D0]/60 text-xs font-semibold text-[#171717]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>Recommended Standard Reference Books</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>Structured Chapter Revision Checklists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>Mock Test Error-Logging Templates</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DAD8D0]/60 flex items-center justify-between">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 text-sm font-black text-[#171717] group-hover:text-[#F47757] transition-colors"
                >
                  <span>Explore Resources</span>
                  <ArrowRight className="w-4 h-4 text-[#F47757] group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] font-bold text-[#656565] uppercase tracking-wider">
                  Academic Outlines
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="py-16 sm:py-24 bg-[#F8F7F2] border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Distinction"
            title="How Our Advisory Compares to Typical Mass Coaching"
            subtitle="We complement and optimize your preparation rather than replacing self-study with more passive lectures."
          />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-3xl shadow-xs overflow-hidden border border-[#DAD8D0]">
              <thead>
                <tr className="bg-[#171717] text-white text-xs sm:text-sm uppercase tracking-wider">
                  <th className="py-4 px-6 font-black">Aspect</th>
                  <th className="py-4 px-6 font-semibold text-slate-300">
                    Typical Coaching Centre
                  </th>
                  <th className="py-4 px-6 font-black text-[#F4C84A] bg-[#222222]">
                    Rahul's Mentorship Advisory
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DAD8D0]/60 text-xs sm:text-sm text-[#171717]">
                <tr>
                  <td className="py-4 px-6 font-black text-[#171717]">
                    Batch Size & Focus
                  </td>
                  <td className="py-4 px-6 text-[#656565] font-medium">
                    100–300 students per batch; focuses on top 5% toppers
                  </td>
                  <td className="py-4 px-6 font-bold text-[#171717] bg-[#FEFCE8]">
                    100% Individual One-to-One Focus
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-black text-[#171717]">
                    Study Planning
                  </td>
                  <td className="py-4 px-6 text-[#656565] font-medium">
                    One rigid syllabus calendar forced on every student
                  </td>
                  <td className="py-4 px-6 font-bold text-[#171717] bg-[#FEFCE8]">
                    Personalized weekly roadmap adapted to student's pace
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-black text-[#171717]">
                    Test Analysis
                  </td>
                  <td className="py-4 px-6 text-[#656565] font-medium">
                    Only publishes marks and batch ranks on a leaderboard
                  </td>
                  <td className="py-4 px-6 font-bold text-[#171717] bg-[#FEFCE8]">
                    Root-cause error analysis to fix negative marks & accuracy leaks
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-black text-[#171717]">
                    College Counselling
                  </td>
                  <td className="py-4 px-6 text-[#656565] font-medium">
                    Minimal or often promotes affiliated private institutions
                  </td>
                  <td className="py-4 px-6 font-bold text-[#171717] bg-[#FEFCE8]">
                    Objective JoSAA / CSAB counseling with zero commercial bias
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-black text-[#171717]">
                    Parent Communication
                  </td>
                  <td className="py-4 px-6 text-[#656565] font-medium">
                    Automated SMS attendance alerts only
                  </td>
                  <td className="py-4 px-6 font-bold text-[#171717] bg-[#FEFCE8]">
                    Open joint discussions to ensure a calm home environment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <CtaBanner
        title="Find the Right Guidance Track for Your Goals"
        description="Book an initial consultation to discuss your specific academic challenges and discover which guidance plan fits best."
        buttonText="TALK TO RAHUL"
      />
    </div>
  );
}
