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
] as const;

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredResources =
    selectedCategory === "All"
      ? resourcesData
      : resourcesData.filter((r) => r.category === selectedCategory);

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        badge="Academic Library & Resources"
        title="Books, Notes & Curated Study Resources"
        subtitle="A curated collection of recommended study resources, standard textbooks, GATE preparation frameworks, engineering notes, and mock test diagnostic templates."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
        primaryCta={{ label: "Talk to Rahul", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />

      {/* Scope of Resources Overview */}
      <section className="py-12 bg-brand-950 text-white border-b border-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-light bg-brand-850 px-3 py-1 rounded-full border border-brand-800">
              Guidance Materials Scope
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-2 text-white">
              Curated Academic Frameworks
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Resources discussed and provided during mentorship sessions may include:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 text-center text-xs">
            <div className="p-4 rounded-xl bg-brand-900/80 border border-brand-800">
              <BookOpen className="w-5 h-5 text-accent mx-auto mb-2" />
              <div className="font-bold text-white">JEE Preparation Books</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Standard reference lists</p>
            </div>
            <div className="p-4 rounded-xl bg-brand-900/80 border border-brand-800">
              <Award className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              <div className="font-bold text-white">GATE Preparation Material</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Core engineering outlines</p>
            </div>
            <div className="p-4 rounded-xl bg-brand-900/80 border border-brand-800">
              <FileText className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
              <div className="font-bold text-white">Engineering Notes</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Concise revision summaries</p>
            </div>
            <div className="p-4 rounded-xl bg-brand-900/80 border border-brand-800">
              <GraduationCap className="w-5 h-5 text-blue-400 mx-auto mb-2" />
              <div className="font-bold text-white">IITian / NITian Notes</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Curated academic notes</p>
            </div>
            <div className="p-4 rounded-xl bg-brand-900/80 border border-brand-800 col-span-2 sm:col-span-1">
              <Library className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <div className="font-bold text-white">Recommended Study Resources</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Error logs & roadmaps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Resource Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Curated Catalog"
            title="Curated Study Materials & Reference Outlines"
            subtitle="Carefully selected academic outlines to streamline your preparation without cluttering your study desk."
          />

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
          <div className="mt-14 max-w-3xl mx-auto bg-slate-50 border border-slate-200/90 rounded-2xl p-6 text-center text-xs text-slate-500 space-y-2">
            <p className="font-semibold text-brand-950">
              Note on Academic Materials & Intellectual Integrity:
            </p>
            <p>
              We recommend standard, proven textbooks and provide diagnostic study roadmaps and error templates. We do not claim authorship of standard commercial textbooks or third-party notes. All material recommendations are personalized during 1-on-1 guidance sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Books Guidance Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Book Selection Philosophy"
            title="How to Choose the Right Reference Books"
            subtitle="The biggest mistake competitive exam aspirants make is collecting too many books and completing none. Here is our structured strategy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-amber-50 px-2.5 py-1 rounded-md inline-block mb-3">
                Physics Principle
              </span>
              <h3 className="text-base font-bold text-brand-950 mb-2">
                Concept Depth Over Formula Cramming
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prioritize core conceptual clarity over ten different generic question banks. Solve standard sets completely without checking solutions prematurely.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-amber-50 px-2.5 py-1 rounded-md inline-block mb-3">
                Chemistry Principle
              </span>
              <h3 className="text-base font-bold text-brand-950 mb-2">
                NCERT as the Sacred Baseline
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every line of NCERT Inorganic and Organic Chemistry is high-yield for JEE Main and Advanced. Supplement with dedicated problem practice only after line-by-line mastery.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-dark bg-amber-50 px-2.5 py-1 rounded-md inline-block mb-3">
                Mathematics & Technical Subjects
              </span>
              <h3 className="text-base font-bold text-brand-950 mb-2">
                Active Problem Solving & PYQ Rhythm
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Technical topics and mathematics cannot be read passively. Maintain a clean rough notebook for timed problem sets and Previous Years Questions (PYQs), analyzing speed leaks chapter by chapter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Need Advice on What Study Material to Focus On?"
        description="Book a consultation at SDO Khedar, Barwala or via video call to audit your current books and eliminate clutter."
        buttonText="Talk to Rahul"
      />
    </div>
  );
}
