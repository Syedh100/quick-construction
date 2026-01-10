"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "./Button";
import { sendQuoteEmail } from "@/lib/emailjs";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  projectType: z.string().min(1, "Please select a project type"),
  projectDetails: z.string().min(20, "Please provide more details about your project"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const projectTypes = [
  "Carpentry & Joinery",
  "Custom Woodwork",
  "Bespoke Furniture",
  "Structural Timber",
  "Painting & Decorating",
  "Carpet Fitting",
  "Tiling",
  "General Refurbishment",
  "Multiple Services",
];

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const success = await sendQuoteEmail(data);
      if (success) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError("Failed to submit quote request. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#F5F5F5] mb-2">
            Name *
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#F5F5F5] mb-2">
            Email *
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#F5F5F5] mb-2">
          Phone *
        </label>
        <input
          {...register("phone")}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-[#F5F5F5] mb-2">
          Project Type *
        </label>
        <select
          {...register("projectType")}
          id="projectType"
          className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className="mt-1 text-sm text-red-400">{errors.projectType.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="projectDetails" className="block text-sm font-medium text-[#F5F5F5] mb-2">
          Project Details *
        </label>
        <textarea
          {...register("projectDetails")}
          id="projectDetails"
          rows={6}
          className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
          placeholder="Describe your project in detail..."
        />
        {errors.projectDetails && (
          <p className="mt-1 text-sm text-red-400">{errors.projectDetails.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-[#F5F5F5] mb-2">
            Budget (Optional)
          </label>
          <select
            {...register("budget")}
            id="budget"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-plus">$50,000+</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-[#F5F5F5] mb-2">
            Timeline (Optional)
          </label>
          <select
            {...register("timeline")}
            id="timeline"
            className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors"
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-month">Within 1 month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-plus-months">6+ months</option>
          </select>
        </div>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-lg"
        >
          <AlertCircle size={20} />
          <span>{error}</span>
        </motion.div>
      )}

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2 text-[#D4AF37] bg-[#D4AF37]/10 p-4 rounded-lg"
        >
          <CheckCircle size={20} />
          <span>Quote request submitted successfully! We'll contact you soon.</span>
        </motion.div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        onClick={() => {}}
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            Request Quote
            <Send className="ml-2" size={20} />
          </>
        )}
      </Button>
    </motion.form>
  );
}
