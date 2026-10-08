import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/siteData";

export const metadata = {
  title: "Book a Consultation | Contact JEE Guidance SDO Khedar",
  description:
    "Schedule a personalised IIT-JEE guidance session at Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana or via 1-on-1 video call.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Page Hero */}
      <PageHero
        badge="Connect & Consult"
        title="Book a Personalised Academic Consultation"
        subtitle="Let's understand your academic standing, resolve preparation bottlenecks, and establish a clear roadmap for IIT-JEE and engineering admissions."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Main Form & Contact Info Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Details & SDO Khedar Location Info (Cols 5) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-brand-50 text-brand-700 border border-brand-100 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Office & Advisory Hub</span>
                </div>
                <h2 className="text-3xl font-extrabold text-brand-950 tracking-tight">
                  Reach Out to Our Mentorship Team
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  We welcome parents and students for in-person consultations at our office in Barwala, Haryana, as well as scheduled video consultations for students from other regions.
                </p>
              </div>

              {/* Consultant Card */}
              <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 text-white p-7 rounded-3xl border border-brand-850 shadow-elevated space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-brand-800 text-accent-light border border-brand-700/60 mb-3">
                    Mentor & Consultant
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    {siteConfig.consultant.name}
                  </h3>
                  <p className="text-sm font-semibold text-accent-light mt-1 leading-snug">
                    {siteConfig.consultant.headline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Direct guidance for IIT-JEE aspirants, GATE preparation, PSU selection, and core engineering career pathways.
                </p>

                {/* Direct Phone & WhatsApp CTAs */}
                <div className="pt-2 space-y-3">
                  <a
                    href={`tel:${siteConfig.contact.phoneTel}`}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-bold text-sm py-3 px-4 rounded-xl shadow-accent hover:shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {siteConfig.contact.phoneDisplay}</span>
                  </a>

                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Information Cards */}
              <div className="space-y-4">
                {/* Location Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-950">
                      Physical Office Location
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-700 mt-1">
                      {siteConfig.location.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {siteConfig.location.addressLine2}, {siteConfig.location.cityRegion}
                    </p>
                    <div className="mt-2 text-[11px] text-slate-400">
                      Landmark: Rajiv Gandhi Thermal Power Plant (RGTPP Colony)
                    </div>
                  </div>
                </div>

                {/* Telephone Line */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-950">
                      Direct Consultation Line
                    </h3>
                    <a
                      href={`tel:${siteConfig.contact.phoneTel}`}
                      className="text-base font-bold text-brand-900 hover:text-accent mt-1 inline-block transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Clickable telephone link • Direct line for consultations
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-950">
                      Visiting & Consultation Hours
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1">
                      {siteConfig.contact.timings}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Prior appointment recommended to ensure dedicated 1-on-1 time
                    </p>
                  </div>
                </div>
              </div>

              {/* Advisory Pledge */}
              <div className="p-5 rounded-2xl bg-brand-950 text-white border border-brand-900 text-xs space-y-2">
                <div className="flex items-center gap-2 text-accent-light font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Student-First Advisory Pledge</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  We maintain total independence and integrity. Every recommendation is tailored strictly to the student's individual aptitude and career aspirations.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Booking Form (Cols 7) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Location Map"
            title="Locate Our Office at SDO Khedar"
            subtitle="Conveniently situated at Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana."
          />

          <div className="bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden shadow-xs relative">
            {/* Visual Map Canvas Placeholder */}
            <div className="h-80 sm:h-96 w-full bg-gradient-to-br from-slate-200 via-slate-100 to-brand-50 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-900 text-white flex items-center justify-center mb-4 shadow-md">
                <MapPin className="w-7 h-7 text-accent-light" />
              </div>
              <h3 className="text-xl font-bold text-brand-950 max-w-lg">
                Sub-Divisional Offices, Khedar Power Plant (RGTPP Colony)
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-md">
                Barwala, Hisar District, Haryana - 125121
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={siteConfig.location.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-850 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-slate-500 bg-white/80 px-3 py-2 rounded-xl border border-slate-200">
                  Embed Ready for Official Google Maps API Key
                </span>
              </div>
            </div>

            {/* Travel Directions Helper */}
            <div className="bg-white p-6 sm:p-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
              <div>
                <h4 className="font-bold text-brand-950 mb-1">From Barwala Town</h4>
                <p>Approximately 5–7 km via Khedar Thermal Plant access road. Well-connected local transit.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-950 mb-1">From Hisar City</h4>
                <p>Located ~32 km from Hisar Junction via National Highway 52 / Barwala bypass.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-950 mb-1">Online Advisory Alternative</h4>
                <p>Virtual consultations via Google Meet / Zoom available for students across Haryana and all of India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
