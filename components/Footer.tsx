import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/portfolio" },
  { name: "CONTACT", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#D4AF37]/20" style={{ paddingTop: '50px', paddingBottom: '60px' }}>
      <div className="w-full flex justify-center px-8 md:px-6 lg:px-12">
        <div className="max-w-7xl w-full mobile-padding-x">
          {/* Logo - Left aligned */}
          <Link href="/" className="inline-block" style={{ marginBottom: '40px' }}>
            <Image
              src="/logo.svg"
              alt="Quick Fix Construction Logo"
              width={220}
              height={66}
              className="h-16 sm:h-20 w-auto"
            />
          </Link>

          {/* Navigation Links - Vertical on mobile, horizontal on desktop */}
          <nav className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-5 sm:gap-8" style={{ marginBottom: '60px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest text-[#F5F5F5]/70 hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[#F5F5F5]/50 text-sm tracking-wide">
              © {new Date().getFullYear()} QUICK FIX CONSTRUCTION. All rights reserved
            </p>
            <Link
              href="/privacy"
              className="text-[#F5F5F5]/50 text-sm tracking-wide hover:text-[#D4AF37] transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
