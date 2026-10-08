import React from "react";
import { Quote, MapPin, CheckCircle } from "lucide-react";
import { TestimonialItem } from "@/data/siteData";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-card transition-shadow">
      <div>
        {/* Quote mark and highlight */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center">
            <Quote className="w-5 h-5 text-brand-600" />
          </div>
          <span className="text-xs font-semibold text-accent-dark bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded-full">
            {testimonial.role} Experience
          </span>
        </div>

        {/* Highlight badge */}
        <div className="mb-3 text-xs font-semibold text-brand-900 flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
          <span>{testimonial.highlight}</span>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-sm text-slate-700 leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      {/* Author and context */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-brand-950">
            {testimonial.author}
          </h4>
          <p className="text-xs text-slate-500">{testimonial.gradeOrCategory}</p>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
          <span>{testimonial.location}</span>
        </div>
      </div>
    </div>
  );
}
