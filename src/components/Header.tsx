"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteData";
import { Menu, X, ArrowRight, MapPin, Compass, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Location & Direct Guidance Bar */}
      <div className="bg-brand-950 text-slate-300 text-xs py-2 px-4 border-b border-brand-900/60 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="font-medium text-slate-200">
              Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana
            </span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="hidden md:inline-block text-slate-400">
              In-Person & Online Advisory
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden lg:inline text-slate-400">
              Personalised Student Guidance
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="flex items-center gap-1.5 text-accent-light hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-accent" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Placeholder */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-900 to-brand-700 flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-shadow">
                <Compass className="w-5 h-5 text-accent-light" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-brand-950 group-hover:text-brand-700 transition-colors">
                  {siteConfig.brandName}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 -mt-1">
                  SDO Khedar Advisory
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? "text-brand-900 bg-slate-100/80 shadow-xs"
                        : "text-slate-600 hover:text-brand-900 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-850 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] group"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-accent-light group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-brand-950" />
                ) : (
                  <Menu className="w-6 h-6 text-brand-950" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-2">
              <div className="bg-slate-50 p-3 rounded-lg mb-3 border border-slate-200/60 text-xs text-slate-600">
                <p className="font-semibold text-brand-950">Sub-Divisional Offices, Khedar Power Plant</p>
                <p className="text-slate-500">Barwala, Haryana • In-person & Online Guidance</p>
              </div>

              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-brand-900 bg-slate-100 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-brand-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-brand-900 text-white font-semibold py-3 px-4 rounded-lg shadow-sm hover:bg-brand-850 transition-colors"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 text-accent-light" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
