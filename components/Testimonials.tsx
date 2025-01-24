"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    quote: "This gym transformed my life. Lost 30 pounds in 6 months!",
    rating: 5,
    image: "/assets/img/testimonials/person.png"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Professional Athlete",
    quote: "Best training facilities and coaches I've ever worked with.",
    rating: 5,
    image: "/assets/img/testimonials/person.png"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Yoga Practitioner",
    quote: "The trainers here are incredibly knowledgeable and supportive.",
    rating: 5,
    image: "/assets/img/testimonials/person.png"
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black overflow-hidden" id="testimonial">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <h2 className="h2 text-white">What Our Members Say</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative bg-black/20 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative w-32 h-32 mx-auto">
                    <Image
                      src={testimonials[activeTestimonial].image}
                      fill
                      alt={testimonials[activeTestimonial].name}
                      className="object-cover rounded-full"
                    />
                    <div className="absolute inset-0 border-2 border-accent rounded-full" />
                  </div>
                </div>

                <div className="w-full md:w-2/3 text-center md:text-left">
                  <p className="text-white text-lg md:text-xl italic leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-bold text-xl">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-accent">{testimonials[activeTestimonial].role}</p>
                    <div className="flex gap-1 md:justify-start justify-center">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <FaStar key={i} className="text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                title="Testimonial"
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                    ${activeTestimonial === idx ? 'bg-accent w-6' : 'bg-accent/20'}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;