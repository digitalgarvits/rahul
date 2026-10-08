import React from "react";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";

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
    <div className="relative bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 text-white pt-14 pb-16 sm:pb-20 overflow-hidden border-b border-brand-850">
      {/* Subtle decorative glow & grid patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a67_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs font-medium text-slate-400 mb-6" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-300 font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-800/80 text-accent-light border border-brand-700/60 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {/* Quick Location Note */}
          <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>Consultancy Office: Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana</span>
          </div>

          {/* Optional CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3.5">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="bg-accent hover:bg-accent-dark text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-accent transition-all duration-150"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="bg-brand-850 hover:bg-brand-800 text-slate-200 border border-brand-700 font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
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
