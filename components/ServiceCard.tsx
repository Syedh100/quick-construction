"use client";

import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  href = "#",
}: ServiceCardProps) {
  return (
    <div className="block">
      <div className="relative overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#1A1A1A]">
        {/* Image Container - Square on mobile, taller on desktop */}
        <div className="relative aspect-square md:aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-80" />
        </div>

        {/* Content Overlay - More breathing room */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 lg:bottom-10 lg:left-10 lg:right-10">
          {/* Gold accent bar */}
          <div className="w-12 h-1 bg-[#D4AF37] mb-4 md:mb-5" />
          
          <h3 className="text-lg md:text-xl font-bold text-[#F5F5F5] mb-3 md:mb-4 leading-tight">
            {title}
          </h3>
          
          <p className="text-[#F5F5F5]/70 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
