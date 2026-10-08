import React from "react";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { servicesData } from "@/data/siteData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find(
    (s) => s.slug === slug || s.id === slug
  );

  if (!service) {
    return {
      title: "Service | JEE & GATE Guidance",
    };
  }

  return {
    title: `${service.title} | JEE & GATE Guidance SDO Khedar`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find(
    (s) => s.slug === slug || s.id === slug
  );

  if (!service) return notFound();

  return <ServiceDetailLayout service={service} />;
}
