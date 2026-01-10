"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import {
  Hammer,
  Paintbrush,
  SquareStack,
  Layers,
  Sofa,
  TreePine,
  Home,
  Wrench,
} from "lucide-react";

const services = [
  {
    id: "carpentry",
    title: "Carpentry & Joinery",
    description: "Our specialty. Expert craftsmanship in custom woodwork, bespoke furniture, and structural timber projects. We bring years of experience and attention to detail to every carpentry and joinery project, ensuring precision and quality in every cut, joint, and finish.",
    icon: Hammer,
    featured: true,
  },
  {
    id: "woodwork",
    title: "Custom Woodwork",
    description: "Bespoke woodwork solutions tailored to your specific needs. From custom cabinets and shelving to unique architectural features, we create beautiful, functional pieces that enhance your space.",
    icon: TreePine,
  },
  {
    id: "furniture",
    title: "Bespoke Furniture",
    description: "Handcrafted furniture designed and built to your exact specifications. Each piece is a work of art, combining functionality with aesthetic appeal to create furniture that stands the test of time.",
    icon: Sofa,
  },
  {
    id: "timber",
    title: "Structural Timber Projects",
    description: "Professional structural timber work for residential and commercial projects. From framing to complex structural elements, we ensure strength, durability, and code compliance in every project.",
    icon: TreePine,
  },
  {
    id: "painting",
    title: "Painting & Decorating",
    description: "Professional interior and exterior painting services with meticulous attention to detail. We use premium paints and techniques to deliver flawless finishes that transform your space.",
    icon: Paintbrush,
  },
  {
    id: "carpet",
    title: "Carpet Fitting",
    description: "Expert carpet installation and fitting services for residential and commercial properties. We ensure perfect fitting, proper preparation, and professional finishing for carpets that look and feel great.",
    icon: Layers,
  },
  {
    id: "tiling",
    title: "Tiling",
    description: "Precision tile installation for bathrooms, kitchens, and commercial spaces. From intricate patterns to large-format tiles, we deliver flawless results with attention to detail and proper waterproofing.",
    icon: SquareStack,
  },
  {
    id: "refurbishment",
    title: "General Refurbishment",
    description: "Complete property refurbishment services for both residential and commercial clients. We manage every aspect of your renovation project, ensuring seamless coordination and exceptional results.",
    icon: Home,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-6">
              Our <span className="text-[#D4AF37]">Services</span>
            </h1>
            <p className="text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto">
              Comprehensive construction and renovation services tailored to meet your specific needs—no matter the size or scope of the project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  featured={service.featured}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#F5F5F5]/80 mb-8">
              Contact us today for a free consultation and quote
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] rounded-lg font-semibold hover:bg-[#E5C158] transition-colors duration-300"
            >
              Get Free Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
