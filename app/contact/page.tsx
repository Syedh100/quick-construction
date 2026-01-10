"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import QuoteForm from "@/components/QuoteForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
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
              Get In <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <p className="text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto">
              Have a project in mind? Contact us for a free consultation and quote
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Forms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#F5F5F5] mb-8">
                Contact <span className="text-[#D4AF37]">Information</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37] p-3 rounded-lg">
                    <Phone className="text-[#0A0A0A]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#F5F5F5] mb-1">
                      Phone
                    </h3>
                    <p className="text-[#F5F5F5]/70">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37] p-3 rounded-lg">
                    <Mail className="text-[#0A0A0A]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#F5F5F5] mb-1">
                      Email
                    </h3>
                    <p className="text-[#F5F5F5]/70">info@quickfixconstruction.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37] p-3 rounded-lg">
                    <MapPin className="text-[#0A0A0A]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#F5F5F5] mb-1">
                      Service Area
                    </h3>
                    <p className="text-[#F5F5F5]/70">
                      Serving residential and commercial clients
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37] p-3 rounded-lg">
                    <Clock className="text-[#0A0A0A]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#F5F5F5] mb-1">
                      Business Hours
                    </h3>
                    <p className="text-[#F5F5F5]/70">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#F5F5F5] mb-8">
                Send Us a <span className="text-[#D4AF37]">Message</span>
              </h2>
              <ContactForm />
            </motion.div>
          </div>

          {/* Quote Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#F5F5F5] mb-4 text-center">
                Request a <span className="text-[#D4AF37]">Free Quote</span>
              </h2>
              <p className="text-[#F5F5F5]/70 text-center mb-8">
                Fill out the form below with your project details, and we'll get back to you with a personalized quote.
              </p>
              <QuoteForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
