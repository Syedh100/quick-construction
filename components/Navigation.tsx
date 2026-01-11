"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-[#D4AF37]/10 border-[#D4AF37]/20"
          : "bg-[#0A0A0A]/90 backdrop-blur-md border-[#D4AF37]/15"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 relative">
          {/* Mobile: Logo Left, Menu Button Right */}
          {/* Logo - Left on mobile, part of centered group on desktop */}
          <Link href="/" className="flex items-center md:hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Image
                src="/new-logo-no-background.png"
                alt="Quick Fix Construction Logo"
                width={240}
                height={72}
                className="h-10 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Mobile Menu Button - Right */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute right-4 sm:right-6 text-[#F5F5F5] hover:text-[#D4AF37] transition-colors z-10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Only: Centered Navigation - Logo + Links */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {/* Logo - Desktop */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <Image
                  src="/new-logo-no-background.png"
                  alt="Quick Fix Construction Logo"
                  width={320}
                  height={96}
                  className="h-16 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="flex items-center gap-3 lg:gap-4">
              {navLinks.map((link) => (
                (() => {
                  const isActive =
                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                  return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative whitespace-nowrap px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 uppercase",
                    isActive ? "text-[#D4AF37]" : "text-[#F5F5F5]/85 hover:text-[#D4AF37]",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                  )}
                >
                  {/* Gold highlight box: appears only on hover, stays on active */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute -inset-x-2 -inset-y-2 rounded-xl",
                      "border border-[#D4AF37]/0 bg-[#D4AF37]/0",
                      "transition-all duration-300 ease-out",
                      "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:border-[#D4AF37]/55 group-hover:bg-[#D4AF37]/10",
                      "group-hover:shadow-[0_0_0_1px_rgba(212,175,55,0.12)]"
                    )}
                  />

                  <span className="relative z-10">{link.name}</span>
                </Link>
                  );
                })()
              ))}
            </div>

            {/* Get Quote Button - Desktop only */}
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-none border border-[#D4AF37]",
                "px-16 md:px-20 h-10 md:h-11 min-w-[180px] md:min-w-[210px]",
                "font-semibold leading-none text-sm lg:text-base uppercase",
                "transition-all duration-300",
                "hover:bg-[#D4AF37] hover:text-[#0A0A0A] hover:shadow-lg hover:shadow-[#D4AF37]/20",
                pathname.startsWith("/contact")
                  ? "bg-[#D4AF37] text-[#0A0A0A]"
                  : "bg-transparent text-[#D4AF37]"
              )}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-md border-t border-[#D4AF37]/20 overflow-hidden"
          >
            <div className="flex flex-col items-center px-6" style={{ paddingTop: '30px', paddingBottom: '35px' }}>
              {/* Centered Navigation Links */}
              <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                {navLinks.map((link) => (
                  (() => {
                    const isActive =
                      link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                    return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "group relative text-xl font-semibold transition-all duration-300 text-center w-full py-3 uppercase",
                      isActive 
                        ? "text-[#D4AF37] font-bold" 
                        : "text-[#D4AF37] hover:text-[#D4AF37]/90"
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                    );
                  })()
                ))}
                
                {/* Get Quote - Primary action with extra spacing */}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "group relative text-xl font-bold transition-all duration-300 text-center w-full block pt-6 uppercase",
                    "text-[#D4AF37] pb-3",
                    "hover:text-[#D4AF37]/90"
                  )}
                >
                  <span className="relative z-10">Get Quote</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
