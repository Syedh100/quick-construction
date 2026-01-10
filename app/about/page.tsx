"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Target } from "lucide-react";
import Button from "@/components/Button";

const values = [
  {
    icon: Award,
    title: "Craftsmanship",
    description: "We take pride in delivering exceptional quality in every project, with meticulous attention to detail.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "You can count on us to deliver on time, on budget, and to the highest standards.",
  },
  {
    icon: Users,
    title: "Professionalism",
    description: "Our team brings years of experience and a commitment to excellence to every job.",
  },
  {
    icon: CheckCircle,
    title: "Tailored Service",
    description: "We work closely with you to understand your needs and deliver solutions that exceed expectations.",
  },
];

export default function AboutPage() {
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
              About <span className="text-[#D4AF37]">Quick Fix</span>
            </h1>
            <p className="text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto">
              Your all-in-one solution for high-quality home improvement and property renovation services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
                Our <span className="text-[#D4AF37]">Story</span>
              </h2>
              <div className="space-y-4 text-[#F5F5F5]/80 text-lg leading-relaxed">
                <p>
                  Quick Fix Construction is your all-in-one solution for high-quality home improvement and property renovation services. While we specialize in expert carpentry and joinery—with a strong reputation for custom woodwork, bespoke furniture, and structural timber projects—we are far more than just woodwork professionals.
                </p>
                <p>
                  Our skilled team also provides painting and decorating, carpet fitting, tiling, and general refurbishment services for both residential and commercial clients. Whether you need a room refreshed with a new coat of paint, a complete flooring upgrade, or a fully tailored renovation, we bring the same level of craftsmanship, attention to detail, and commitment to excellence to every aspect of the job.
                </p>
                <p>
                  At Quick Fix Construction, we pride ourselves on delivering reliable, efficient, and professional service tailored to meet your specific needs—no matter the size or scope of the project.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-2xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#D4AF37] mb-4">10+</div>
                  <div className="text-xl text-[#F5F5F5]">Years of Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
              Our <span className="text-[#D4AF37]">Values</span>
            </h2>
            <p className="text-xl text-[#F5F5F5]/80 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-[#2A2A2A] p-6 rounded-xl inline-block mb-4">
                  <value.icon className="text-[#D4AF37]" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#F5F5F5]/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
              Why Choose <span className="text-[#D4AF37]">Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Expert craftsmanship and attention to detail",
              "Reliable and efficient service",
              "Tailored solutions for every project",
              "Residential and commercial expertise",
              "Commitment to excellence",
              "Professional team with years of experience",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="text-[#D4AF37] flex-shrink-0" size={24} />
                <span className="text-[#F5F5F5] text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-[#F5F5F5]/80 mb-8">
              Let's discuss your project and bring your vision to life
            </p>
            <Button href="/contact" size="lg">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
