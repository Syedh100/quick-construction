"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroimage.webp"
          alt="Construction workshop background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Dark Overlay - For text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/65 to-[#0A0A0A]/75" />
        {/* Gold Tint Overlay - Branding color */}
        <div className="absolute inset-0 bg-[#D4AF37]/15 mix-blend-overlay" />
        {/* Additional subtle darkening for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/10 to-[#0A0A0A]/30" />
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
            style={{ marginBottom: '40px' }}
          >
            <span className="text-[#F5F5F5]">Premium</span>{" "}
            <span className="text-[#D4AF37]">Construction</span>
            <br />
            <span className="text-[#F5F5F5]">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-[#F5F5F5]/80 max-w-4xl mx-auto leading-relaxed"
            style={{ marginBottom: '60px' }}
          >
            Expert carpentry, joinery, painting, and refurbishment services.
            <br />
            Craftsmanship, attention to detail, and commitment to excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              href="/contact"
              variant="outlineGold"
              size="md"
              className="group h-11 md:h-12 px-14 md:px-16 py-0 min-w-[220px]"
            >
              Get Free Quote
            </Button>
            <Button
              href="/portfolio"
              variant="outlineGold"
              size="md"
              className="group h-11 md:h-12 px-14 md:px-16 py-0 min-w-[220px]"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
