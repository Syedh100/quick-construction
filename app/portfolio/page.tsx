"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PortfolioCard from "@/components/PortfolioCard";
import { X } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Custom Kitchen Renovation",
    category: "Carpentry & Joinery",
    image: "/images/portfolio/placeholder-1.jpg",
  },
  {
    id: 2,
    title: "Modern Office Refurbishment",
    category: "General Refurbishment",
    image: "/images/portfolio/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "Luxury Bathroom Tiling",
    category: "Tiling",
    image: "/images/portfolio/placeholder-3.jpg",
  },
  {
    id: 4,
    title: "Bespoke Dining Room Furniture",
    category: "Carpentry & Joinery",
    image: "/images/portfolio/placeholder-4.jpg",
  },
  {
    id: 5,
    title: "Interior Painting Project",
    category: "Painting & Decorating",
    image: "/images/portfolio/placeholder-5.jpg",
  },
  {
    id: 6,
    title: "Commercial Carpet Installation",
    category: "Carpet Fitting",
    image: "/images/portfolio/placeholder-6.jpg",
  },
  {
    id: 7,
    title: "Structural Timber Framing",
    category: "Structural Timber",
    image: "/images/portfolio/placeholder-7.jpg",
  },
  {
    id: 8,
    title: "Complete Home Refurbishment",
    category: "General Refurbishment",
    image: "/images/portfolio/placeholder-8.jpg",
  },
  {
    id: 9,
    title: "Custom Wardrobe Installation",
    category: "Carpentry & Joinery",
    image: "/images/portfolio/placeholder-9.jpg",
  },
];

const categories = [
  "All",
  "Carpentry & Joinery",
  "Painting & Decorating",
  "Tiling",
  "Carpet Fitting",
  "Structural Timber",
  "General Refurbishment",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

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
              Our <span className="text-[#D4AF37]">Portfolio</span>
            </h1>
            <p className="text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto">
              Showcasing our craftsmanship, attention to detail, and commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2 rounded-lg font-medium transition-all duration-300
                  ${
                    selectedCategory === category
                      ? "bg-[#D4AF37] text-[#0A0A0A]"
                      : "bg-[#1A1A1A] text-[#F5F5F5] hover:bg-[#2A2A2A] border border-[#2A2A2A]"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <PortfolioCard
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    onClick={() => setSelectedImage(item.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#F5F5F5]/60 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = portfolioItems.find((i) => i.id === selectedImage);
                if (!item) return null;
                return (
                  <>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 z-10 bg-[#0A0A0A]/80 text-[#F5F5F5] p-2 rounded-full hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors"
                    >
                      <X size={24} />
                    </button>
                    <div className="relative aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="90vw"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#D4AF37]">{item.category}</p>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
