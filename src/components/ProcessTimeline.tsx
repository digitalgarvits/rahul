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

const stepKeycapColors = [
  { bg: "#F47757", text: "#FFFFFF", edge: "#D93838" }, // Coral
  { bg: "#A8D5A2", text: "#064E3B", edge: "#059669" }, // Mint Green
  { bg: "#F4C84A", text: "#451A03", edge: "#D97706" }, // Yellow
  { bg: "#F3A6C7", text: "#881337", edge: "#BE123C" }, // Pink
  { bg: "#F29A48", text: "#FFFFFF", edge: "#C2410C" }, // Orange
];

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Desktop connector line */}
      <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-[#DAD8D0] z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
        {processSteps.map((step, idx) => {
          const IconComp = stepIcons[step.icon] || Compass;
          const keycap = stepKeycapColors[idx % stepKeycapColors.length];

          return (
            <div
              key={step.stepNumber}
              className="group flex flex-col justify-between bg-white rounded-3xl border border-[#DAD8D0] p-6 shadow-xs hover:-translate-y-1.5 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              <div>
                {/* Step Keycap Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm select-none transition-transform group-hover:scale-105"
                    style={{
                      backgroundColor: keycap.bg,
                      color: keycap.text,
                      boxShadow: `0 3.5px 0 ${keycap.edge}`,
                    }}
                  >
                    {step.stepNumber}
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-[#F8F7F2] border border-[#DAD8D0] flex items-center justify-center text-[#171717] group-hover:text-[#F47757] transition-colors">
                    <IconComp className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                {/* Step title */}
                <h3 className="text-base sm:text-lg font-black text-[#171717] tracking-tight group-hover:text-[#F47757] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-bold text-[#F47757] mt-1 mb-2 uppercase tracking-wide">
                  {step.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#656565] leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DAD8D0]/60 text-[10px] font-bold text-[#656565] uppercase tracking-widest">
                Milestone Phase 0{idx + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
