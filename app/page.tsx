"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import Button from "@/components/Button";
import {
  Home as HomeIcon,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const featuredServices = [
  {
    title: "Carpentry & Joinery",
    description: "Expert craftsmanship in custom woodwork, bespoke furniture, and structural timber projects.",
    image: "/carpentry.jpg",
    href: "/services#carpentry",
  },
  {
    title: "Painting & Decorating",
    description: "Professional interior and exterior painting services with attention to detail and quality finishes.",
    image: "/painting and decorating .jpg",
    href: "/services#painting",
  },
  {
    title: "Tiling",
    description: "Precision tile installation for bathrooms, kitchens, and commercial spaces.",
    image: "/tiling.jpg",
    href: "/services#tiling",
  },
];

const whyChooseUs = [
  "Expert craftsmanship and attention to detail",
  "Reliable and efficient service",
  "Tailored solutions for every project",
  "Residential and commercial expertise",
  "Commitment to excellence",
  "Professional team with years of experience",
];

const portfolioItems = [
  {
    title: "Custom Kitchen Renovation",
    category: "Carpentry & Joinery",
    image: "/custom kitchen renovations .jpg",
  },
  {
    title: "Modern Office Refurbishment",
    category: "General Refurbishment",
    image: "/office refurbishment.webp",
  },
  {
    title: "Luxury Bathroom Tiling",
    category: "Tiling",
    image: "/luxury bathroom tiling.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-[#0A0A0A]">
      <Hero />

      {/* Services Preview */}
      <section style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        {/* Header - Properly centered with generous breathing room */}
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8" style={{ marginTop: '3px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl px-8 md:px-12 lg:px-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-[1.1]">
              Our <span className="text-[#D4AF37]">Services</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
              Comprehensive construction and renovation services tailored to your needs
            </p>
          </motion.div>
        </div>

        {/* Service Cards - 3 Column Grid - Centered */}
        <div className="w-full flex justify-center px-8 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl w-full justify-items-center">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="w-full max-w-[350px] md:max-w-none"
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Services Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full flex justify-center px-4"
          style={{ marginTop: '40px', marginBottom: '20px' }}
        >
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center px-16 md:px-20 h-12 md:h-14 min-w-[220px] md:min-w-[260px] rounded-none border border-[#D4AF37] bg-transparent text-[#D4AF37] text-base md:text-lg font-semibold transition-all duration-300 ease-out hover:bg-[#D4AF37] hover:text-[#0A0A0A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
          >
            View All Services
          </Link>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#1A1A1A]" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <div className="w-full flex justify-center px-8 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start text-left space-y-8 w-full"
            >
              <div className="w-full mobile-padding-x">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F5F5] leading-tight">
                Why Choose Quick<br />
                <span className="text-[#D4AF37]">Fix</span>
              </h2>
              <p className="text-base md:text-lg text-[#F5F5F5]/80 leading-relaxed max-w-lg">
                At Quick Fix Construction, we pride ourselves on delivering reliable, efficient, and professional service tailored to meet your specific needs no matter the size or scope of the project.
              </p>
              <ul className="space-y-5 pt-2">
                {whyChooseUs.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-2 text-[#F5F5F5] text-sm md:text-base leading-relaxed"
                  >
                    <span className="text-[#D4AF37] font-medium">—</span>
                    <span>&nbsp;{item}</span>
                  </motion.li>
                ))}
              </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full flex justify-end mobile-padding-x md:px-0"
            >
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/20 bg-[#0A0A0A] p-2">
                <Image
                  src="/house1.jpg"
                  alt="Quality construction and renovation work"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        {/* Header - Properly centered like Our Services */}
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8" style={{ marginTop: '3px', marginBottom: '50px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl px-8 md:px-12 lg:px-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-[1.1]">
              Featured <span className="text-[#D4AF37]">Projects</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
              Showcasing our craftsmanship and attention to detail
            </p>
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="w-full flex justify-center px-8 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl w-full justify-items-center">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full max-w-[350px] md:max-w-none"
              >
                <PortfolioCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Full Portfolio Button */}
        <div className="w-full flex justify-center" style={{ marginTop: '40px', marginBottom: '20px' }}>
          <Link 
            href="/portfolio" 
            className="inline-flex items-center justify-center px-16 md:px-20 h-12 md:h-14 min-w-[220px] md:min-w-[280px] rounded-none border border-[#D4AF37] bg-transparent text-[#D4AF37] text-base md:text-lg font-semibold transition-all duration-300 ease-out hover:bg-[#D4AF37] hover:text-[#0A0A0A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5" style={{ paddingTop: '50px', paddingBottom: '55px' }}>
        <div className="w-full flex justify-center px-8 md:px-6 lg:px-12">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start text-left mobile-padding-x"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5]" style={{ marginBottom: '24px' }}>
                Ready to Start Your <span className="text-[#D4AF37]">Project?</span>
              </h2>
              <p className="text-base md:text-lg text-[#F5F5F5]/80 leading-relaxed" style={{ marginBottom: '32px' }}>
                Get a free quote today and let's bring your vision to life
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-16 md:px-20 h-10 md:h-11 min-w-[180px] md:min-w-[210px] rounded-none border border-[#D4AF37] bg-transparent text-[#D4AF37] text-sm lg:text-base font-semibold transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A0A0A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Get Quote
              </Link>
            </motion.div>

            {/* Right Column - Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full flex justify-center lg:justify-end mobile-padding-x"
            >
              <div className="w-full max-w-[350px] md:max-w-none lg:w-full">
                <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#D4AF37]/20 bg-[#1A1A1A]">
                  <Image
                    src="/house1.jpg"
                    alt="Quality construction project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 350px, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}