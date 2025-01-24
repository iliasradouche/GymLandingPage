// HeroSlider.jsx
"use client";

import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { useState } from "react";
import { ArrowDown, Dumbbell, Target } from 'lucide-react';

const HeroSlider = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div className="h-full flex justify-end pt-[140px] relative">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute left-0 top-20 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute -left-10 top-1/4"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-32 h-32 rounded-full border-2 border-accent/30 flex items-center justify-center backdrop-blur-sm">
            <Dumbbell className="w-12 h-12 text-accent" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute right-10 top-1/3"
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-24 h-24 rounded-full border-2 border-accent/30 flex items-center justify-center backdrop-blur-sm">
            <Target className="w-10 h-10 text-accent" />
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] relative z-10">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="absolute -top-20 left-0 lg:left-auto text-sm text-accent font-bold tracking-[0.3em] uppercase"
        >
          Elite Fitness Program
        </motion.div>

        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h1 text-center lg:text-left mb-2 text-shadow-lg relative"
        >
          Build your body into a{" "}
          <motion.span 
            className="text-accent inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            healthy
          </motion.span>{" "}
          and{" "}
          <motion.span 
            className="text-accent inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            strong body
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-white font-light text-center lg:text-left mb-8 text-shadow-sm max-w-[500px] leading-relaxed"
        >
          Transform your life with our expert trainers and state-of-the-art facilities.
          Join our community and achieve your fitness goals today.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col lg:flex-row gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredButton('start')}
            onHoverEnd={() => setHoveredButton(null)}
            className="relative"
          >
            <CustomButton
              text="Start Your Journey"
              containerStyles={`
                w-[200px] h-[56px] rounded-full bg-accent 
                relative overflow-hidden transition-all duration-300
                ${hoveredButton === 'start' ? 'bg-white text-black' : ''}
              `}
            />
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: hoveredButton === 'start' ? 1 : 0,
                opacity: hoveredButton === 'start' ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredButton('contact')}
            onHoverEnd={() => setHoveredButton(null)}
            className="relative"
          >
            <CustomButton
              text="Contact Us"
              containerStyles={`
                w-[200px] h-[56px] rounded-full
                border-2 border-white/50
                relative overflow-hidden transition-all duration-300
                ${hoveredButton === 'contact' ? 'border-accent' : ''}
              `}
            />
            <motion.div
              className="absolute inset-0 bg-accent/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: hoveredButton === 'contact' ? 1 : 0,
                opacity: hoveredButton === 'contact' ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="absolute bottom-0 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <ArrowDown className="w-6 h-6 text-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/70">Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlider;