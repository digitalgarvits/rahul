import React from "react";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { servicesData } from "@/data/siteData";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Course Tracker | Academic Progress Monitoring",
  description:
    "Systematic tracking of syllabus completion, problem practice counts, revision cycles, and mock test scores for JEE aspirants.",
};

export default function CourseTrackerPage() {
  const service = servicesData.find(
    (s) => s.slug === "course-study-planning" || s.slug === "course-tracker"
  );
  if (!service) return notFound();

  return <ServiceDetailLayout service={service} />;
}
