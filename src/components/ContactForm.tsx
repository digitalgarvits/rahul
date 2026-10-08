"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, AlertCircle, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    userType: "Student",
    phoneNumber: "",
    email: "",
    studentClass: "Class 12",
    attemptYear: "2026",
    serviceRequired: "JEE Guidance",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate consultation inquiry submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-card">
      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-bold text-brand-950">
            Consultation Request Received
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. Rahul will review your academic background from our office at{" "}
            <strong>Sub-Divisional Offices, Khedar Power Plant, Barwala</strong> and contact you on{" "}
            <strong>{formData.phoneNumber}</strong> to schedule your personalized session.
          </p>
          <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-500 max-w-md mx-auto text-left border border-slate-100">
            <p><strong>Selected Guidance Track:</strong> {formData.serviceRequired}</p>
            <p><strong>Student Grade & Attempt:</strong> {formData.studentClass} (Target Exam Year {formData.attemptYear})</p>
            <p className="mt-1 text-slate-400">Confirmation dispatched to: {formData.email || "Phone SMS / Call"}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                userType: "Student",
                phoneNumber: "",
                email: "",
                studentClass: "Class 12",
                attemptYear: "2026",
                serviceRequired: "JEE Guidance",
                message: "",
              });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-700 hover:text-brand-950 underline pt-2"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-950">
              Book a Consultation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Share your details below. We will reach out to understand your academic situation and arrange an in-person or video consultation with Rahul.
            </p>
          </div>

          {/* User Type: Student / Parent */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              I am reaching out as a:
            </label>
            <div className="grid grid-cols-2 gap-3">
              {["Student", "Parent"].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setFormData({ ...formData, userType: type })}
                  className={`py-2.5 px-4 rounded-xl text-sm font-semibold border transition-all text-center ${
                    formData.userType === type
                      ? "bg-brand-900 text-white border-brand-900 shadow-xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Amit Kumar"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g. +91 96716 96317"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
              />
            </div>
          </div>

          {/* Email & Class */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. aspirant@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="studentClass"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Current Class / Stage <span className="text-rose-500">*</span>
              </label>
              <select
                id="studentClass"
                name="studentClass"
                required
                value={formData.studentClass}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
              >
                <option value="Class 10 (Moving to 11)">Class 10 (Moving to 11)</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
                <option value="Dropper / Repeater">Dropper / Repeater</option>
                <option value="Engineering Student / Graduate">Engineering Student / Graduate</option>
                <option value="Completed 12th (College Decisions)">Completed 12th (College Decisions)</option>
              </select>
            </div>
          </div>

          {/* JEE Attempt Year & Service Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="attemptYear"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Target Exam Year <span className="text-rose-500">*</span>
              </label>
              <select
                id="attemptYear"
                name="attemptYear"
                required
                value={formData.attemptYear}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
              >
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="Current JoSAA / CSAB Cycle">Current JoSAA / CSAB Cycle</option>
                <option value="GATE 2026 / 2027">GATE 2026 / 2027</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="serviceRequired"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Primary Guidance Track <span className="text-rose-500">*</span>
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                required
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
              >
                <option value="JEE Guidance">JEE Guidance</option>
                <option value="GATE Strategy">GATE Strategy</option>
                <option value="One-to-One Mentorship">One-to-One Mentorship</option>
                <option value="Course & Study Planning">Course & Study Planning</option>
                <option value="College & Career Counselling">College & Career Counselling</option>
                <option value="PSU & Core Engineering Guidance">PSU & Core Engineering Guidance</option>
                <option value="Doubt Solving">Doubt Solving</option>
              </select>
            </div>
          </div>

          {/* Message / Academic context */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Tell us about your current preparation challenges or goals
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Managing physics backlogs, difficulty in chemistry mock tests, GATE revision strategy, or confused about branch vs college preference in JoSAA..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-850 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] disabled:opacity-75"
          >
            {loading ? (
              <span>Processing Request...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-accent-light" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-slate-400">
            Consultations held in person at Sub-Divisional Offices, Khedar Power Plant, Barwala or via scheduled 1-on-1 video call. Your details remain completely confidential.
          </p>
        </form>
      )}
    </div>
  );
}
