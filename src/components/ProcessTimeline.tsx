import React from "react";
import { processSteps } from "@/data/siteData";
import { Compass, CalendarCheck, Activity, TrendingUp, Award } from "lucide-react";

const stepIcons: Record<string, React.ElementType> = {
  Compass,
  CalendarCheck,
  Activity,
  TrendingUp,
  Award,
};

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Desktop connector line */}
      <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-8 h-0.5 bg-gradient-to-r from-brand-200 via-brand-300 to-accent/40 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
        {processSteps.map((step) => {
          const IconComp = stepIcons[step.icon] || Compass;

          return (
            <div
              key={step.stepNumber}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-card hover:border-brand-300 transition-all duration-200"
            >
              {/* Step counter & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-brand-200 group-hover:text-brand-900 transition-colors">
                  {step.stepNumber}
                </span>
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 group-hover:bg-brand-900 group-hover:text-accent-light transition-colors">
                  <IconComp className="w-5 h-5" />
                </div>
              </div>

              {/* Step name */}
              <h3 className="text-lg font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs font-semibold text-accent-dark mb-2">
                {step.tagline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
