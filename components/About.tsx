"use client";
import { useState, useRef, useEffect } from "react";
import { FaTrophy, FaChartLine, FaDumbbell } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

interface Feature {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  stat: string;
  statLabel: string;
  bgColor: string;
}

const featured: Feature[] = [
  {
    icon: <FaTrophy className="text-4xl" />,
    title: "Expert Training",
    subtitle: "Professional coaches with proven success",
    stat: "15+",
    statLabel: "Certified Trainers",
    bgColor: "from-purple-600/20 to-purple-800/20"
  },
  {
    icon: <FaChartLine className="text-4xl" />,
    title: "Results Driven",
    subtitle: "Achieve your fitness goals faster",
    stat: "90%",
    statLabel: "Success Rate",
    bgColor: "from-blue-600/20 to-blue-800/20"
  },
  {
    icon: <FaDumbbell className="text-4xl" />,
    title: "Premium Facility",
    subtitle: "State-of-the-art equipment",
    stat: "2000m²",
    statLabel: "Training Space",
    bgColor: "from-red-600/20 to-red-800/20"
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(feature.stat);

  useEffect(() => {
    let start = 0;
    const end = parseInt(feature.stat);
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      if (start < end) {
        start += increment;
        setCount(Math.floor(start));
      } else {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [feature.stat]);

  return (
    <div className={`h-full rounded-2xl bg-gradient-to-br ${feature.bgColor} p-1`}>
      <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 h-full hover:bg-black/40 transition-colors duration-300">
        <div className="flex flex-col h-full items-center text-center">
          <div className="bg-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-accent">
            {feature.icon}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
          <p className="text-white/70 mb-6 flex-grow">{feature.subtitle}</p>
          
          <div className="bg-black/30 rounded-xl p-4 backdrop-blur-sm w-full">
            <div className="text-3xl font-bold text-accent mb-1">
              {feature.stat.includes('+') 
                ? `${count}+`
                : feature.stat.includes('%')
                ? `${count}%`
                : feature.stat.includes('m²')
                ? `${count}m²`
                : count}
            </div>
            <div className="text-white/60 text-sm">{feature.statLabel}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
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
      if (touchDiff > 0 && currentSlide < featured.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (touchDiff < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b bg-black from-black to-gray-900" id="about">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-12 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-accent rounded-full" />
            <h3 className="text-accent uppercase tracking-[4px]">Why Choose Us</h3>
            <div className="w-8 h-1 bg-accent rounded-full" />
          </div>
          <h2 className="h2 text-white">Transform Your Fitness Journey</h2>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
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
              {featured.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <FeatureCard feature={feature} />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {featured.map((_, idx) => (
              <button
              title="Choose Your Plan"
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'w-8 bg-accent' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {featured.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 * (index + 2))}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;