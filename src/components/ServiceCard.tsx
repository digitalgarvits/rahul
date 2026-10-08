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

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Compass;

  return (
    <div
      className={`group relative flex flex-col justify-between bg-white rounded-2xl border transition-all duration-300 p-6 sm:p-7 ${
        featured
          ? "border-brand-300/80 shadow-card hover:shadow-elevated ring-1 ring-brand-500/10"
          : "border-slate-200/80 hover:border-brand-200 hover:shadow-card"
      }`}
    >
      <div>
        {/* Top Icon & Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-200">
            <IconComponent className="w-6 h-6 text-brand-600 group-hover:text-accent-light transition-colors" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-full">
            {service.heroBadge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-950 group-hover:text-brand-700 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Highlight features */}
        {service.features && service.features.length > 0 && (
          <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Learn More link */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-950 group-hover:translate-x-0.5 transition-all"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
        </Link>
        <span className="text-xs text-slate-400">Personal Guidance</span>
      </div>
    </div>
  );
}
