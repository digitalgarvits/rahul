"use client";

import React, { useState } from "react";
import { CheckCircle2, CornerDownLeft, Send } from "lucide-react";

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-[#DAD8D0] p-6 sm:p-10 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.06)]">
      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-[#A8D5A2]/20 text-[#064E3B] rounded-2xl flex items-center justify-center mx-auto border border-[#A8D5A2] shadow-[0_4px_0_#059669]">
            <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
          </div>
          <h3 className="text-2xl font-black text-[#171717]">
            Consultation Request Received
          </h3>
          <p className="text-sm text-[#656565] max-w-md mx-auto leading-relaxed font-medium">
            Thank you, <strong>{formData.fullName}</strong>. Rahul will review your
            academic background from our office at{" "}
            <strong>Sub-Divisional Offices, Khedar Power Plant, Barwala</strong> and
            contact you on <strong>{formData.phoneNumber}</strong> to schedule
            your personalized session.
          </p>
          <div className="p-4 bg-[#F8F7F2] rounded-2xl text-xs text-[#171717] max-w-md mx-auto text-left border border-[#DAD8D0] space-y-1 font-medium">
            <p>
              <strong>Selected Guidance Track:</strong> {formData.serviceRequired}
            </p>
            <p>
              <strong>Student Grade & Target:</strong> {formData.studentClass}{" "}
              (Exam Year {formData.attemptYear})
            </p>
            <p className="text-[#656565] pt-1">
              Confirmation dispatched to:{" "}
              {formData.email || "Phone SMS / Call"}
            </p>
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
            className="inline-flex items-center gap-2 text-xs font-black text-[#171717] hover:underline pt-2 uppercase tracking-wider"
          >
            Submit Another Query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-[#DAD8D0]/60 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F8F7F2] text-[#171717] border border-[#DAD8D0] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F47757]" />
              <span>Diagnostic Consultation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight">
              Book a Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#656565] mt-1 font-medium">
              Share your details below. Rahul will reach out to understand your
              academic standing and arrange an in-person or video advisory
              session.
            </p>
          </div>

          {/* User Type: Student / Parent */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#656565] mb-2">
              I am reaching out as a:
            </label>
            <div className="grid grid-cols-2 gap-3">
              {["Student", "Parent"].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setFormData({ ...formData, userType: type })}
                  className={`py-2.5 px-4 rounded-xl text-sm font-black border transition-all text-center select-none ${
                    formData.userType === type
                      ? "bg-[#171717] text-white border-black shadow-[0_3px_0_#000]"
                      : "bg-[#F8F7F2] text-[#171717] border-[#DAD8D0] hover:bg-white"
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
                className="block text-xs font-bold text-[#171717] mb-1.5"
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
                className="w-full px-4 py-2.5 rounded-xl border border-[#DAD8D0] bg-[#F8F7F2] text-[#171717] text-sm focus:outline-none focus:ring-2 focus:ring-[#171717] focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-xs font-bold text-[#171717] mb-1.5"
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
                className="w-full px-4 py-2.5 rounded-xl border border-[#DAD8D0] bg-[#F8F7F2] text-[#171717] text-sm focus:outline-none focus:ring-2 focus:ring-[#171717] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Email & Class */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-[#171717] mb-1.5"
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
                className="w-full px-4 py-2.5 rounded-xl border border-[#DAD8D0] bg-[#F8F7F2] text-[#171717] text-sm focus:outline-none focus:ring-2 focus:ring-[#171717] focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="studentClass"
                className="block text-xs font-bold text-[#171717] mb-1.5"
              >
                Current Class / Stage <span className="text-rose-500">*</span>
              </label>
              <select
                id="studentClass"
                name="studentClass"
                required
                value={formData.studentClass}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DAD8D0] bg-[#F8F7F2] text-[#171717] text-sm focus:outline-none focus:ring-2 focus:ring-[#171717] focus:bg-white transition-colors"
              >
                <option value="Class 10 (Moving to 11)">Class 10 (Moving to 11)</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
                <option value="Dropper / Repeater">Dropper / Repeater</option>
                <option value="Engineering Student / Graduate">
                  Engineering Student / Graduate
                </option>
                <option value="Completed 12th (College Decisions)">
                  Completed 12th (College Decisions)
                </option>
              </select>
            </div>
          </div>

          {/* Target Exam Year & Service Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="attemptYear"
                className="block text-xs font-bold text-[#171717] mb-1.5"
              >
                Target Exam Year <span className="text-rose-500">*</span>
              </label>
              <select
                id="attemptYear"
                name="attemptYear"
                required
                value={formData.attemptYear}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DAD8D0] bg-[#F8F7F2] text-[#171717] text-sm focus:outline-none focus:ring-2 focus:ring-[#171717] focus:bg-white transition-colors"
              >
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="Current JoSAA / CSAB Cycle">
                  Current JoSAA / CSAB Cycle
                </option>
                <option value="GATE 2026 / 2027">GATE 2026 / 2027</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="serviceRequired"
                className="block text-xs font-bold text-[#171717] mb-1.5"
              >
                Primary Guidance Track <span className="text-rose-500">*</span>
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                required
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DAD8D0] bg-[#F8F7F2] text-[#171717] text-sm focus:outline-none focus:ring-2 focus:ring-[#171717] focus:bg-white transition-colors"
              >
                <option value="JEE Guidance">JEE Guidance</option>
                <option value="GATE Strategy">GATE Strategy</option>
                <option value="One-to-One Mentorship">One-to-One Mentorship</option>
                <option value="Course & Study Planning">
                  Course & Study Planning
                </option>
                <option value="College & Career Counselling">
                  College & Career Counselling
                </option>
                <option value="PSU & Core Engineering Guidance">
                  PSU & Core Engineering Guidance
                </option>
                <option value="Doubt Solving">Doubt Solving</option>
              </select>
            </div>
          </div>

          {/* Message / Academic context */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold text-[#171717] mb-1.5"
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
              className="w-full px-4 py-2.5 rounded-xl border border-[#DAD8D0] bg-[#F8F7F2] text-[#171717] text-sm focus:outline-none focus:ring-2 focus:ring-[#171717] focus:bg-white transition-colors"
            />
          </div>

          {/* Submit button: 3D Keyboard Enter Key */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-3 bg-[#171717] hover:bg-[#262626] text-white font-black text-sm sm:text-base py-4 px-6 rounded-2xl shadow-[0_5px_0_#000] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_#000] transition-all duration-150 disabled:opacity-75 select-none uppercase tracking-wider"
          >
            {loading ? (
              <span>Processing Request...</span>
            ) : (
              <>
                <CornerDownLeft className="w-5 h-5 text-white stroke-[2.5]" />
                <span>SUBMIT ENQUIRY</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-[#656565] font-medium">
            Consultations conducted in person at Sub-Divisional Offices, Khedar Power
            Plant, Barwala or via scheduled 1-on-1 video call. Confidential and
            objective.
          </p>
        </form>
      )}
    </div>
  );
}
