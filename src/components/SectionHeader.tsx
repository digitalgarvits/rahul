import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl mb-12 ${
        centered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-[#171717] border border-[#DAD8D0] shadow-xs mb-3 ${
            centered ? "mx-auto" : ""
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#F47757]" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#656565] font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
