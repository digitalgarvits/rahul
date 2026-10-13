import React from "react";
import Link from "next/link";
import { ChevronRight, MapPin, CornerDownLeft } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; href?: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function PageHero({
  badge,
  title,
  subtitle,
  breadcrumbs,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <div className="relative bg-[#F8F7F2] text-[#171717] pt-12 pb-14 sm:pt-16 sm:pb-18 overflow-hidden border-b border-[#DAD8D0]">
      {/* Subtle dotted matrix texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 1.15px, transparent 1.15px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          className="flex items-center space-x-2 text-xs font-bold text-[#656565] mb-6"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-[#171717] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#171717] font-extrabold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-[#171717] border border-[#DAD8D0] shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F47757]" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#171717] leading-[1.12]">
            {title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#656565] font-medium leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {/* Quick Location Note */}
          <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#656565]">
            <MapPin className="w-3.5 h-3.5 text-[#F47757] shrink-0" />
            <span>
              Consultancy Hub: Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana
            </span>
          </div>

          {/* Optional CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2.5 bg-[#171717] hover:bg-[#262626] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-[0_4px_0_#000] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#000] transition-all duration-150 uppercase tracking-wider"
                >
                  <CornerDownLeft className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>{primaryCta.label}</span>
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="bg-white hover:bg-slate-50 text-[#171717] border border-[#DAD8D0] font-bold text-xs sm:text-sm px-5 py-3.5 rounded-2xl transition-colors shadow-xs"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
