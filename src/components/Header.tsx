"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteData";
import { Menu, X, MapPin, Phone, CornerDownLeft } from "lucide-react";

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
      <div className="bg-[#171717] text-slate-300 text-xs py-2 px-4 border-b border-black select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <MapPin className="w-3.5 h-3.5 text-[#F4C84A] shrink-0" />
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
              Personalised Guidance by Rahul (SDO HPGCL)
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="flex items-center gap-1.5 text-[#F4C84A] hover:text-white transition-colors font-semibold"
            >
              <Phone className="w-3 h-3 text-[#F4C84A]" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F7F2]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#DAD8D0]"
            : "bg-[#F8F7F2] py-4 border-b border-[#DAD8D0]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#171717] rounded-xl p-1"
            >
              <span className="inline-block px-3 py-1 rounded-xl bg-[#F3A6C7] text-[#171717] font-black text-xl tracking-tight shadow-[0_3px_0_#C2185B] group-hover:-translate-y-0.5 active:translate-y-0.5 transition-transform duration-150">
                Rahul
              </span>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#171717]">
                  JEE · GATE · CAREER
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#656565] -mt-0.5">
                  MENTOR & CONSULTANT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-1 lg:space-x-2"
              aria-label="Main Navigation"
            >
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-xl text-sm font-bold transition-all duration-150 ${
                      isActive
                        ? "text-[#171717] bg-white border border-[#DAD8D0] shadow-xs"
                        : "text-[#656565] hover:text-[#171717] hover:bg-white/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Consultation CTA (Keyboard Enter Button Style) */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                aria-label="Book a Consultation - Let's Talk"
                className="group relative inline-flex items-center gap-2.5 bg-[#171717] hover:bg-[#262626] text-white font-black text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-[0_4px_0_#000] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#000] transition-all duration-150 select-none border border-black"
              >
                <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center">
                  <CornerDownLeft className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                </div>
                <span className="tracking-wider uppercase">LET'S TALK</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#171717] hover:bg-white border border-[#DAD8D0] focus:outline-none focus:ring-2 focus:ring-[#171717]"
                aria-label={
                  mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#171717]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#171717]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F8F7F2] border-b border-[#DAD8D0] shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-2">
              <div className="bg-white p-3 rounded-xl mb-3 border border-[#DAD8D0] text-xs text-[#656565]">
                <p className="font-bold text-[#171717]">
                  Sub-Divisional Offices, Khedar Power Plant
                </p>
                <p className="text-[#656565]">
                  Barwala, Haryana • In-Person & Online Advisory
                </p>
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
                    className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                      isActive
                        ? "text-[#171717] bg-white border border-[#DAD8D0]"
                        : "text-[#656565] hover:bg-white hover:text-[#171717]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-[#DAD8D0]">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#171717] text-white font-black py-3 px-4 rounded-xl shadow-[0_4px_0_#000] tracking-wider uppercase text-sm"
                >
                  <CornerDownLeft className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>LET'S TALK</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
