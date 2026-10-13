"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Library,
  FileText,
  GraduationCap,
  Award,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ResourceCard from "@/components/ResourceCard";
import CtaBanner from "@/components/CtaBanner";
import SectionHeader from "@/components/SectionHeader";
import { resourcesData } from "@/data/siteData";

const categories = [
  "All",
  "JEE Preparation",
  "GATE Preparation",
  "Books",
  "Notes",
  "Study Material",
  "College Information",
] as const;

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredResources =
    selectedCategory === "All"
      ? resourcesData
      : resourcesData.filter((r) => r.category === selectedCategory);

  return (
    <div className="bg-[#F8F7F2]">
      {/* 1. PAGE HERO */}
      <PageHero
        badge="Academic Library"
        title="Your Next Study Resource."
        subtitle="A curated collection of recommended study resources, standard textbooks, GATE preparation frameworks, engineering notes, and mock test diagnostic templates."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
        primaryCta={{ label: "TALK TO RAHUL", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />

      {/* 2. SCOPE OF RESOURCES OVERVIEW */}
      <section className="py-12 bg-white border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#171717] bg-[#F8F7F2] px-3.5 py-1.5 rounded-full border border-[#DAD8D0]">
              Curated Materials Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 text-[#171717]">
              Essential Academic Frameworks
            </h2>
            <p className="text-xs sm:text-sm text-[#656565] mt-1 font-medium">
              Resources evaluated and structured during personal mentorship sessions:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center text-xs">
            <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-[#DAD8D0] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#FFF3EE] text-[#F47757] flex items-center justify-center mx-auto mb-2 border border-[#F47757]/30">
                <BookOpen className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="font-black text-[#171717]">JEE Preparation Books</div>
              <p className="text-[11px] text-[#656565] mt-0.5">Standard reference lists</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-[#DAD8D0] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#F0FDF4] text-[#059669] flex items-center justify-center mx-auto mb-2 border border-[#A8D5A2]/50">
                <Award className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="font-black text-[#171717]">GATE Study Material</div>
              <p className="text-[11px] text-[#656565] mt-0.5">Core engineering outlines</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-[#DAD8D0] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#FEFCE8] text-[#B45309] flex items-center justify-center mx-auto mb-2 border border-[#F4C84A]/50">
                <FileText className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="font-black text-[#171717]">Engineering Notes</div>
              <p className="text-[11px] text-[#656565] mt-0.5">Concise revision summaries</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-[#DAD8D0] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#FDF2F8] text-[#BE123C] flex items-center justify-center mx-auto mb-2 border border-[#F3A6C7]/50">
                <GraduationCap className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="font-black text-[#171717]">IITian / NITian Notes</div>
              <p className="text-[11px] text-[#656565] mt-0.5">Curated academic notes</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-[#DAD8D0] shadow-xs col-span-2 sm:col-span-1">
              <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] text-[#C2410C] flex items-center justify-center mx-auto mb-2 border border-[#F29A48]/50">
                <Library className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="font-black text-[#171717]">College & Career Info</div>
              <p className="text-[11px] text-[#656565] mt-0.5">Cutoffs & JoSAA trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN CATALOG & CATEGORY FILTER TABS */}
      <section className="py-16 sm:py-24 bg-[#F8F7F2] border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Curated Catalog"
            title="Curated Study Materials & Reference Outlines"
            subtitle="Carefully selected academic outlines to streamline your preparation without cluttering your study desk."
          />

          {/* Keycap Styled Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 select-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  selectedCategory === cat
                    ? "bg-[#171717] text-white shadow-[0_3px_0_#000] -translate-y-0.5"
                    : "bg-white text-[#171717] border border-[#DAD8D0] hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>

          {/* Transparent Editorial Disclaimer / Policy */}
          <div className="mt-14 max-w-3xl mx-auto bg-white border border-[#DAD8D0] rounded-3xl p-6 sm:p-7 text-center text-xs text-[#656565] space-y-2 shadow-xs">
            <p className="font-black text-[#171717] uppercase tracking-wide">
              Note on Academic Materials & Intellectual Integrity
            </p>
            <p className="leading-relaxed font-medium">
              We recommend standard, proven textbooks and provide diagnostic study roadmaps and error templates. We do not claim authorship of standard commercial textbooks or third-party notes. All material recommendations are personalized during 1-on-1 guidance sessions.
            </p>
          </div>
        </div>
      </section>

      {/* 4. REFERENCE BOOK SELECTION PRINCIPLES */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Book Selection Philosophy"
            title="How to Choose the Right Reference Books"
            subtitle="The biggest mistake competitive exam aspirants make is collecting too many books and completing none. Here is our structured strategy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#F8F7F2] p-7 rounded-3xl border border-[#DAD8D0] shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-white bg-[#F47757] px-3 py-1 rounded-xl shadow-2xs inline-block mb-4">
                Physics Principle
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#171717] mb-2">
                Concept Depth Over Formula Cramming
              </h3>
              <p className="text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
                Prioritize core conceptual clarity over ten different generic question banks. Solve standard sets completely without checking solutions prematurely.
              </p>
            </div>

            <div className="bg-[#F8F7F2] p-7 rounded-3xl border border-[#DAD8D0] shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-[#064E3B] bg-[#A8D5A2] px-3 py-1 rounded-xl shadow-2xs inline-block mb-4">
                Chemistry Principle
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#171717] mb-2">
                NCERT as the Sacred Baseline
              </h3>
              <p className="text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
                Every line of NCERT Inorganic and Organic Chemistry is high-yield for JEE Main and Advanced. Supplement with dedicated problem practice only after line-by-line mastery.
              </p>
            </div>

            <div className="bg-[#F8F7F2] p-7 rounded-3xl border border-[#DAD8D0] shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-[#451A03] bg-[#F4C84A] px-3 py-1 rounded-xl shadow-2xs inline-block mb-4">
                Mathematics & Technical
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#171717] mb-2">
                Active Problem Solving & PYQ Rhythm
              </h3>
              <p className="text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
                Technical topics and mathematics cannot be read passively. Maintain a clean rough notebook for timed problem sets and Previous Years Questions (PYQs), analyzing speed leaks chapter by chapter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CtaBanner
        title="Need Advice on What Study Material to Focus On?"
        description="Book a consultation at SDO Khedar, Barwala or via video call to audit your current books and eliminate clutter."
        buttonText="TALK TO RAHUL"
      />
    </div>
  );
}
