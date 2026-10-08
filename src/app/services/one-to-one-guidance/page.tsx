import React from "react";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { servicesData } from "@/data/siteData";
import { notFound } from "next/navigation";

export const metadata = {
  title: "One-to-One Interaction | Personalised Mentorship",
  description:
    "Dedicated 1-on-1 interaction sessions focusing on individual student needs, mental stamina, and study roadmaps at SDO Khedar, Barwala.",
};

export default function OneToOneGuidancePage() {
  const service = servicesData.find(
    (s) => s.slug === "one-to-one-mentorship" || s.slug === "one-to-one-guidance"
  );
  if (!service) return notFound();

  return <ServiceDetailLayout service={service} />;
}
