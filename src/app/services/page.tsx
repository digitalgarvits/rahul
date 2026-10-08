import React from "react";
import Link from "next/link";
import {
  Compass,
  UserCheck,
  BarChart3,
  GraduationCap,
  HelpCircle,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Library,
  MapPin,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import { servicesData, siteConfig } from "@/data/siteData";

export const metadata = {
  title: "All Guidance Services | JEE, GATE & Core Engineering Mentorship",
  description:
    "Explore our complete suite of mentorship services: JEE Guidance, GATE Strategy, One-to-One Mentorship, Course & Study Planning, College & Career Counselling, PSU & Core Engineering Guidance, and Doubt Solving.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* Page Hero */}
      <PageHero
        badge="Guidance Services"
        title="Comprehensive Guidance, Designed for Every Stage."
        subtitle="From competitive exam preparation and GATE strategy to post-exam JoSAA college counselling and PSU guidance, we provide personal, data-backed mentorship."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        primaryCta={{ label: "Talk to Rahul", href: "/contact" }}
        secondaryCta={{ label: "View Study Resources", href: "/resources" }}
      />

      {/* Services Grid Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Advisory Programs"
            title="Our Full Range of Guidance Services"
            subtitle="Select any service to view a detailed breakdown of what is included, who it is for, how it works, and key benefits."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. IIT-JEE Consultancy */}
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}

            {/* 7. Books & Study Material Card */}
            <div className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 hover:border-brand-300 p-6 sm:p-7 transition-all duration-300 hover:shadow-card">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-200">
                    <Library className="w-6 h-6 text-amber-600 group-hover:text-accent-light" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-full">
                    Reference Library
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
                  Books & Study Material
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  Curated outlines, recommended standard textbook lists, formula sheets, and diagnostic mock test templates.
                </p>

                <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Recommended Standard Reference Books</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Structured Chapter Revision Checklists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Mock Test Error-Logging Templates</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-950 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Explore Resources</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </Link>
                <span className="text-xs text-slate-400">Study Outlines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory vs Mass Coaching Comparison */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Distinction"
            title="How Our Advisory Compares to Typical Coaching"
            subtitle="We complement and optimize your preparation rather than replacing self-study with more passive lectures."
          />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-200">
              <thead>
                <tr className="bg-brand-950 text-white text-xs sm:text-sm uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Aspect</th>
                  <th className="py-4 px-6 font-semibold text-slate-300">Typical Coaching Centre</th>
                  <th className="py-4 px-6 font-semibold text-amber-300 bg-brand-900">
                    {siteConfig.brandName} Advisory
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-bold text-brand-950">Batch Size & Focus</td>
                  <td className="py-4 px-6 text-slate-500">100–300 students per batch; focuses on top 5% toppers</td>
                  <td className="py-4 px-6 font-semibold text-brand-950 bg-amber-50/40">
                    100% Individual One-to-One Focus
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-brand-950">Study Planning</td>
                  <td className="py-4 px-6 text-slate-500">One rigid syllabus calendar forced on every student</td>
                  <td className="py-4 px-6 font-semibold text-brand-950 bg-amber-50/40">
                    Personalized weekly roadmap adapted to student's pace
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-brand-950">Test Analysis</td>
                  <td className="py-4 px-6 text-slate-500">Only publishes marks and batch ranks on a leaderboard</td>
                  <td className="py-4 px-6 font-semibold text-brand-950 bg-amber-50/40">
                    Root-cause error analysis to fix negative marks & time leaks
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-brand-950">College Counselling</td>
                  <td className="py-4 px-6 text-slate-500">Minimal or often promotes affiliated private institutions</td>
                  <td className="py-4 px-6 font-semibold text-brand-950 bg-amber-50/40">
                    Objective JoSAA / CSAB counseling with zero commercial bias
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-brand-950">Parent Communication</td>
                  <td className="py-4 px-6 text-slate-500">Automated SMS attendance alerts only</td>
                  <td className="py-4 px-6 font-semibold text-brand-950 bg-amber-50/40">
                    Open joint discussions to ensure a calm home environment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Find the Right Guidance Track for Your Goals"
        description="Book an initial consultation to discuss your specific academic challenges and discover which guidance plan fits best."
        buttonText="Book a Consultation"
      />
    </div>
  );
}
