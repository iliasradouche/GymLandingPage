"use client";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { useState, useRef } from "react";

interface SocialLink {
  icon: React.ElementType;
  href: string;
}

interface TrainerInfo {
  image: string;
  name: string;
  role: string;
  description: string;
  expertise: string[];
  social: SocialLink[];
}

const trainerData: TrainerInfo[] = [
  {
    image: "/assets/img/trainers/coach_1.jpg",
    name: "John Doe",
    role: "Body Builder Coach",
    description: "Certified trainer with 10+ years of bodybuilding experience",
    expertise: ["Strength Training", "Nutrition", "Competition Prep"],
    social: [
      { icon: FaInstagram, href: "http://instagram.com" },
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/coach_2.jpg",
    name: "Jane Smith",
    role: "Fitness Coach",
    description: "Specialized in HIIT and functional training programs",
    expertise: ["HIIT", "Functional Training", "Weight Loss"],
    social: [
      { icon: FaInstagram, href: "http://instagram.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/coach_2.jpg",
    name: "Mike Johnson",
    role: "CrossFit Coach",
    description: "Former athlete helping others achieve their fitness goals",
    expertise: ["CrossFit", "Mobility", "Strength & Conditioning"],
    social: [
      { icon: FaInstagram, href: "http://instagram.com" },
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
    ],
  },
];

// Rest of the Team component code remains the same
const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0 && currentSlide < trainerData.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (touchDiff < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b bg-black  from-black to-gray-900" id="team">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="w-16 h-1 bg-accent mb-4" />
          <h2 className="h2 text-center text-white">Meet Our Expert Trainers</h2>
          <p className="text-white/70 text-center max-w-[600px] mt-4">
            Our certified trainers are here to guide you through your fitness journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <motion.div
              className="overflow-hidden touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                animate={{ x: `${-100 * currentSlide}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
              >
                {trainerData.map((trainer, index) => (
                  <motion.div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-black/20 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                      <div className="relative w-full h-[300px] mb-6 overflow-hidden rounded-xl">
                        <Image 
                          src={trainer.image} 
                          fill 
                          alt={trainer.name}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-2xl font-bold text-white mb-2">{trainer.name}</h4>
                        <p className="text-accent uppercase text-sm tracking-[3px] mb-4">{trainer.role}</p>
                        <p className="text-white/80 mb-6">{trainer.description}</p>
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          {trainer.expertise.map((skill, idx) => (
                            <span key={idx} className="bg-accent/20 text-white/90 text-xs px-3 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-center gap-4">
                          {trainer.social.map((social, idx) => (
                            <Link
                              key={idx}
                              href={social.href}
                              className="text-white/70 hover:text-accent transition-colors"
                              target="_blank"
                            >
                              <social.icon className="text-xl" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {trainerData.map((_, idx) => (
                <button
                title="Select Trainer"
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'w-4 bg-accent' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {trainerData.map((trainer, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Original desktop card content */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-accent/50 transition-all duration-300">
                  <div className="relative w-full h-[300px] mb-6 overflow-hidden rounded-xl">
                    <Image 
                      src={trainer.image} 
                      fill 
                      alt={trainer.name}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-2">{trainer.name}</h4>
                    <p className="text-accent uppercase text-sm tracking-[3px] mb-4">{trainer.role}</p>
                    <p className="text-white/80 mb-6">{trainer.description}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {trainer.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-accent/20 text-white/90 text-xs px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4">
                      {trainer.social.map((social, idx) => (
                        <motion.div key={idx} whileHover={{ y: -3 }}>
                          <Link
                            href={social.href}
                            className="text-white/70 hover:text-accent transition-colors"
                            target="_blank"
                          >
                            <social.icon className="text-xl" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center mt-16"
        >
          <CustomButton 
            text="Meet the Full Team" 
            containerStyles="w-[220px] h-[56px] bg-accent hover:bg-accent/90 rounded-full" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;