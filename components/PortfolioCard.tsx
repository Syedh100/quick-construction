"use client";

import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
}

export default function PortfolioCard({
  title,
  category,
  image,
  onClick,
}: PortfolioCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-[#1A1A1A] w-full"
      onClick={onClick}
    >
      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden bg-[#2A2A2A]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/70 via-transparent to-transparent" />
        
        {/* Text positioned at top-left with padding */}
        <div className="absolute top-5 left-5 md:top-6 md:left-6">
          <h3 className="text-[#F5F5F5] font-semibold text-lg md:text-xl mb-1">{title}</h3>
          <p className="text-[#D4AF37] text-sm">{category}</p>
        </div>
      </div>
    </div>
  );
}
