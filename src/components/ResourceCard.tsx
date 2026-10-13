import React from "react";
import Link from "next/link";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { ResourceItem } from "@/data/siteData";

const categoryPillColors: Record<string, { bg: string; text: string; edge: string }> = {
  "JEE Preparation": { bg: "#F47757", text: "#FFFFFF", edge: "#D93838" },
  "GATE Preparation": { bg: "#A8D5A2", text: "#064E3B", edge: "#059669" },
  Books: { bg: "#F4C84A", text: "#451A03", edge: "#D97706" },
  Notes: { bg: "#F3A6C7", text: "#881337", edge: "#BE123C" },
  "Study Material": { bg: "#F29A48", text: "#FFFFFF", edge: "#C2410C" },
  "College Information": { bg: "#792F35", text: "#FFFFFF", edge: "#4C0519" },
};

const defaultPill = { bg: "#A8D5A2", text: "#064E3B", edge: "#059669" };

interface ResourceCardProps {
  resource: ResourceItem;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const pill = categoryPillColors[resource.category] || defaultPill;

  return (
    <div className="flex flex-col justify-between bg-white rounded-3xl border border-[#DAD8D0] p-6 sm:p-7 shadow-xs hover:-translate-y-1.5 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)] transition-all duration-200">
      <div>
        {/* Category Keycap Badge & Status */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black tracking-wide shadow-2xs select-none"
            style={{
              backgroundColor: pill.bg,
              color: pill.text,
              boxShadow: `0 2.5px 0 ${pill.edge}`,
            }}
          >
            <BookOpen className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{resource.category}</span>
          </span>

          <span className="text-[11px] font-bold text-[#656565] bg-[#F8F7F2] border border-[#DAD8D0] px-2.5 py-0.5 rounded-full">
            {resource.statusBadge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-black text-[#171717] leading-snug">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
          {resource.shortDescription}
        </p>

        {/* Recommendation context */}
        <div className="mt-4 p-3 rounded-2xl bg-[#F8F7F2] border border-[#DAD8D0] text-xs text-[#171717] flex items-center gap-2 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-[#F47757] shrink-0" />
          <span>
            Target: <strong>{resource.recommendedFor}</strong>
          </span>
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-6 pt-4 border-t border-[#DAD8D0]/60 flex items-center justify-between">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#171717] hover:text-[#F47757] transition-colors"
        >
          <span>Request Guidance / Access</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F47757]" />
        </Link>
        <span className="text-[11px] font-bold text-[#656565] uppercase tracking-wider">
          Curated
        </span>
      </div>
    </div>
  );
}
