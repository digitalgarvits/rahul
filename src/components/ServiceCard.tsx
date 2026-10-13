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
  Award,
  ShieldCheck,
} from "lucide-react";
import { ServiceItem } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  UserCheck,
  BarChart3,
  GraduationCap,
  HelpCircle,
  BookOpen,
  Award,
  ShieldCheck,
};

interface KeyStyle {
  color: string;
  edge: string;
  text: string;
  lightBg: string;
}

const colorMap: Record<string, KeyStyle> = {
  "jee-guidance": {
    color: "#F47757", // Coral
    edge: "#D93838",
    text: "#FFFFFF",
    lightBg: "#FFF3EE",
  },
  "iit-jee-consultancy": {
    color: "#F47757",
    edge: "#D93838",
    text: "#FFFFFF",
    lightBg: "#FFF3EE",
  },
  "gate-strategy": {
    color: "#A8D5A2", // Mint green
    edge: "#059669",
    text: "#064E3B",
    lightBg: "#F0FDF4",
  },
  "one-to-one-mentorship": {
    color: "#F3A6C7", // Pink
    edge: "#BE123C",
    text: "#881337",
    lightBg: "#FDF2F8",
  },
  "one-to-one-guidance": {
    color: "#F3A6C7",
    edge: "#BE123C",
    text: "#881337",
    lightBg: "#FDF2F8",
  },
  "course-study-planning": {
    color: "#F29A48", // Orange
    edge: "#C2410C",
    text: "#FFFFFF",
    lightBg: "#FFF7ED",
  },
  "course-tracker": {
    color: "#F29A48",
    edge: "#C2410C",
    text: "#FFFFFF",
    lightBg: "#FFF7ED",
  },
  "college-career-counselling": {
    color: "#F4C84A", // Yellow
    edge: "#D97706",
    text: "#451A03",
    lightBg: "#FEFCE8",
  },
  "college-counselling": {
    color: "#F4C84A",
    edge: "#D97706",
    text: "#451A03",
    lightBg: "#FEFCE8",
  },
  "psu-core-engineering": {
    color: "#792F35", // Burgundy
    edge: "#4C0519",
    text: "#FFFFFF",
    lightBg: "#FFF1F2",
  },
  "doubt-solving": {
    color: "#F4C84A",
    edge: "#CA8A04",
    text: "#451A03",
    lightBg: "#FEFCE8",
  },
};

const defaultColor: KeyStyle = {
  color: "#A8D5A2",
  edge: "#059669",
  text: "#064E3B",
  lightBg: "#F0FDF4",
};

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Compass;
  const keyStyle = colorMap[service.slug] || colorMap[service.id] || defaultColor;

  return (
    <div
      className={`group relative flex flex-col justify-between bg-white rounded-3xl border border-[#DAD8D0] p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)] ${
        featured ? "ring-2 ring-[#171717]/10" : ""
      }`}
    >
      <div>
        {/* Top Keycap Icon & Category Label */}
        <div className="flex items-center justify-between mb-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-150 group-hover:scale-105"
            style={{
              backgroundColor: keyStyle.color,
              color: keyStyle.text,
              boxShadow: `0 4px 0 ${keyStyle.edge}`,
            }}
          >
            <IconComponent className="w-5 h-5 stroke-[2.5]" />
          </div>

          <span
            className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-[#DAD8D0]/80 shadow-2xs"
            style={{
              backgroundColor: keyStyle.lightBg,
              color: "#171717",
            }}
          >
            {service.heroBadge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-[#171717] tracking-tight group-hover:text-[#F47757] transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm text-[#656565] leading-relaxed font-medium">
          {service.shortDescription}
        </p>

        {/* Highlight features */}
        {service.features && service.features.length > 0 && (
          <ul className="mt-4 space-y-2 pt-3 border-t border-[#DAD8D0]/60 text-xs font-semibold text-[#171717]">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2
                  className="w-3.5 h-3.5 shrink-0"
                  style={{ color: keyStyle.edge }}
                />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Explore Service Link */}
      <div className="mt-6 pt-4 border-t border-[#DAD8D0]/60 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-black text-[#171717] group-hover:text-[#F47757] transition-colors"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4 text-[#F47757] group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] font-bold text-[#656565] uppercase tracking-wider">
          Personal Guidance
        </span>
      </div>
    </div>
  );
}
