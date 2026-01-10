import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "outlineGold";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
}: ButtonProps) {
  const baseStyles = "font-semibold transition-all duration-300 rounded-xl inline-flex items-center justify-center min-w-[200px]";
  
  const variants = {
    primary: "bg-[#1A1A1A] text-[#F5F5F5] border-2 border-[#2A2A2A] hover:border-[#D4AF37] hover:bg-[#2A2A2A] hover:shadow-lg hover:shadow-[#D4AF37]/20",
    secondary: "bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A]",
    outline: "bg-[#1A1A1A] text-[#F5F5F5] border-2 border-[#2A2A2A] hover:border-[#D4AF37] hover:bg-[#2A2A2A] hover:shadow-lg hover:shadow-[#D4AF37]/20",
    outlineGold:
      "rounded-none border border-[#D4AF37] bg-[#0A0A0A] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] hover:shadow-lg hover:shadow-[#D4AF37]/20",
  };

  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-12 py-6 text-lg",
  };

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {buttonContent}
    </button>
  );
}
