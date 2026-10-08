import React from "react";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { servicesData } from "@/data/siteData";
import { notFound } from "next/navigation";

export const metadata = {
  title: "College Counselling | JoSAA & Engineering Admissions",
  description:
    "Objective guidance for choosing engineering colleges, branch trade-offs, JoSAA, CSAB, and State counseling pathways.",
};

export default function CollegeCounsellingPage() {
  const service = servicesData.find(
    (s) => s.slug === "college-career-counselling" || s.slug === "college-counselling"
  );
  if (!service) return notFound();

  return <ServiceDetailLayout service={service} />;
}
