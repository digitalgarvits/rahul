import React from "react";
import Link from "next/link";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { ResourceItem } from "@/data/siteData";

interface ResourceCardProps {
  resource: ResourceItem;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-card hover:border-brand-300 transition-all duration-200">
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-50 text-brand-800 border border-brand-100">
            <BookOpen className="w-3 h-3 text-brand-600" />
            <span>{resource.category}</span>
          </span>
          <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
            {resource.statusBadge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-brand-950 leading-snug">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {resource.shortDescription}
        </p>

        {/* Recommendation context */}
        <div className="mt-4 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
          <span>Recommended for: <strong>{resource.recommendedFor}</strong></span>
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-700 hover:text-brand-950 transition-colors"
        >
          <span>Request Access / Guidance</span>
          <ArrowRight className="w-3.5 h-3.5 text-accent" />
        </Link>
        <span className="text-[11px] text-slate-400">Curated Reference</span>
      </div>
    </div>
  );
}
