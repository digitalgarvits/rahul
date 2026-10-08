import React from "react";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { servicesData } from "@/data/siteData";
import { notFound } from "next/navigation";

export const metadata = {
  title: "IIT-JEE Consultancy | Strategic Exam Planning",
  description:
    "Strategic guidance for IIT-JEE preparation, syllabus roadmaps, and personal exam planning based at Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana.",
};

export default function IitJeeConsultancyPage() {
  const service = servicesData.find(
    (s) => s.slug === "jee-guidance" || s.slug === "iit-jee-consultancy"
  );
  if (!service) return notFound();

  return <ServiceDetailLayout service={service} />;
}
