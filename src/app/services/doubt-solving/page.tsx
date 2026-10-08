import React from "react";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { servicesData } from "@/data/siteData";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Doubt Solving | Conceptual Clarification & Strategy",
  description:
    "Focused support to help students overcome academic bottlenecks and master problem-solving methods in Physics, Chemistry, and Math.",
};

export default function DoubtSolvingPage() {
  const service = servicesData.find((s) => s.slug === "doubt-solving");
  if (!service) return notFound();

  return <ServiceDetailLayout service={service} />;
}
