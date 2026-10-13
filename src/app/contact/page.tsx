import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
  CornerDownLeft,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/siteData";

export const metadata = {
  title: "Book a Consultation | Contact Rahul - SDO HPGCL",
  description:
    "Schedule a personalised IIT-JEE guidance session at Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana or via 1-on-1 video call with Rahul.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8F7F2]">
      {/* 1. PAGE HERO */}
      <PageHero
        badge="Connect & Consult"
        title="Let's Figure Out Your Next Move."
        subtitle="Have questions about JEE, GATE, study planning or engineering careers? Get in touch with Rahul for practical, grounded guidance."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* 2. MAIN FORM & CONTACT INFORMATION SECTION */}
      <section className="py-16 sm:py-24 bg-[#F8F7F2] border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Details & Office Hub (Cols 5) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#171717] border border-[#DAD8D0] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#F47757]" />
                  <span>Office & Advisory Hub</span>
                </div>
                <h2 className="text-3xl font-black text-[#171717] tracking-tight">
                  Reach Out Directly
                </h2>
                <p className="mt-2.5 text-sm text-[#656565] leading-relaxed font-medium">
                  We welcome parents and students for in-person consultations at our office in Barwala, Haryana, as well as scheduled video consultations for students from other regions across India.
                </p>
              </div>

              {/* Consultant Profile Card */}
              <div className="bg-[#171717] text-white p-7 sm:p-8 rounded-3xl border border-black shadow-[0_16px_36px_-10px_rgba(0,0,0,0.25)] space-y-5 select-none">
                <div>
                  <span className="inline-block px-3 py-1 rounded-xl bg-[#F3A6C7] text-[#171717] text-xs font-black uppercase tracking-wider shadow-[0_3px_0_#C2185B] mb-3">
                    Mentor & Consultant
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {siteConfig.consultant.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#F4C84A] mt-1 leading-snug">
                    {siteConfig.consultant.headline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Direct guidance for IIT-JEE aspirants, GATE preparation, PSU selection, and core engineering career pathways.
                </p>

                {/* Direct Telephone & WhatsApp CTAs */}
                <div className="pt-2 space-y-3">
                  <a
                    href={`tel:${siteConfig.contact.phoneTel}`}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-white text-[#171717] font-black text-sm py-3.5 px-4 rounded-2xl shadow-[0_4px_0_#CBD5E1] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#CBD5E1] transition-all uppercase tracking-wider"
                  >
                    <Phone className="w-4 h-4 text-[#F47757]" />
                    <span>Call {siteConfig.contact.phoneDisplay}</span>
                  </a>

                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#A8D5A2] hover:bg-[#86EFAC] text-[#064E3B] font-black text-sm py-3.5 px-4 rounded-2xl shadow-[0_4px_0_#059669] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#059669] transition-all uppercase tracking-wider"
                  >
                    <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Information Cards */}
              <div className="space-y-4">
                {/* Location Card */}
                <div className="bg-white p-6 rounded-3xl border border-[#DAD8D0] shadow-xs flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF3EE] text-[#F47757] flex items-center justify-center shrink-0 border border-[#F47757]/30">
                    <MapPin className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#171717]">
                      Physical Office Location
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#171717] mt-1">
                      {siteConfig.location.title}
                    </p>
                    <p className="text-xs text-[#656565] mt-0.5 font-medium">
                      {siteConfig.location.addressLine2}, {siteConfig.location.cityRegion}
                    </p>
                    <div className="mt-2 text-[11px] font-semibold text-[#656565]">
                      Landmark: Rajiv Gandhi Thermal Power Plant (RGTPP Colony)
                    </div>
                  </div>
                </div>

                {/* Direct Phone Line */}
                <div className="bg-white p-6 rounded-3xl border border-[#DAD8D0] shadow-xs flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FEFCE8] text-[#B45309] flex items-center justify-center shrink-0 border border-[#F4C84A]/50">
                    <Phone className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#171717]">
                      Direct Telephone Line
                    </h3>
                    <a
                      href={`tel:${siteConfig.contact.phoneTel}`}
                      className="text-base font-black text-[#171717] hover:text-[#F47757] mt-1 inline-block transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-[#656565] mt-0.5 font-medium">
                      Clickable telephone link • Direct line for consultations
                    </p>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="bg-white p-6 rounded-3xl border border-[#DAD8D0] shadow-xs flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F0FDF4] text-[#059669] flex items-center justify-center shrink-0 border border-[#A8D5A2]/50">
                    <Clock className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#171717]">
                      Visiting & Consultation Hours
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#171717] mt-1">
                      {siteConfig.contact.timings}
                    </p>
                    <p className="text-xs text-[#656565] mt-0.5 font-medium">
                      Prior appointment recommended to ensure dedicated 1-on-1 time
                    </p>
                  </div>
                </div>
              </div>

              {/* Advisory Pledge */}
              <div className="p-5 rounded-3xl bg-white text-[#171717] border border-[#DAD8D0] text-xs space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-[#171717] font-black uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-[#F47757]" />
                  <span>Student-First Advisory Pledge</span>
                </div>
                <p className="text-[#656565] leading-relaxed font-medium">
                  We maintain total independence and integrity. Every recommendation is tailored strictly to the student's individual aptitude and career aspirations.
                </p>
              </div>
            </div>

            {/* Right Column: ContactForm (Cols 7) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOCATION MAP SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DAD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Location Map"
            title="Locate Our Office at SDO Khedar"
            subtitle="Conveniently situated at Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana."
          />

          <div className="bg-[#F8F7F2] rounded-3xl border border-[#DAD8D0] overflow-hidden shadow-xs relative">
            {/* Visual Map Canvas Placeholder */}
            <div className="h-80 sm:h-96 w-full bg-[#F8F7F2] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#171717] text-white flex items-center justify-center mb-4 shadow-[0_4px_0_#000]">
                <MapPin className="w-7 h-7 text-[#F4C84A]" />
              </div>
              <h3 className="text-xl font-black text-[#171717] max-w-lg">
                Sub-Divisional Offices, Khedar Power Plant (RGTPP Colony)
              </h3>
              <p className="text-sm text-[#656565] mt-1 max-w-md font-medium">
                Barwala, Hisar District, Haryana - 125121
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={siteConfig.location.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#262626] text-white font-black text-xs px-5 py-3 rounded-2xl shadow-[0_3px_0_#000] transition-transform active:translate-y-0.5 uppercase tracking-wider"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-[#656565] font-semibold bg-white px-3.5 py-2.5 rounded-2xl border border-[#DAD8D0]">
                  Landmark: RGTPP Colony Office Complex
                </span>
              </div>
            </div>

            {/* Travel Directions Helper */}
            <div className="bg-white p-6 sm:p-8 border-t border-[#DAD8D0] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#656565]">
              <div>
                <h4 className="font-black text-[#171717] mb-1 text-sm">
                  From Barwala Town
                </h4>
                <p className="font-medium">
                  Approximately 5–7 km via Khedar Thermal Plant access road. Well-connected local transit.
                </p>
              </div>
              <div>
                <h4 className="font-black text-[#171717] mb-1 text-sm">
                  From Hisar City
                </h4>
                <p className="font-medium">
                  Located ~32 km from Hisar Junction via National Highway 52 / Barwala bypass.
                </p>
              </div>
              <div>
                <h4 className="font-black text-[#171717] mb-1 text-sm">
                  Online Advisory Alternative
                </h4>
                <p className="font-medium">
                  Virtual consultations via Google Meet / Zoom available for students across Haryana and all of India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
