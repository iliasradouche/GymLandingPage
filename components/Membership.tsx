"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";

interface PlanFeature {
  included: boolean;
  feature: string;
}

interface Plan {
  name: string;
  duration: string;
  price: string;
  originalPrice?: string;
  features: PlanFeature[];
  recommended?: boolean;
  savingsPercent?: number;
}

const plans: Plan[] = [
  {
    name: "Basic",
    duration: "1 Month",
    price: "49",
    features: [
      { included: true, feature: "Access to gym facilities" },
      { included: true, feature: "Basic equipment usage" },
      { included: true, feature: "2 Group classes/month" },
      { included: true, feature: "Locker room access" },
      { included: false, feature: "Personal trainer sessions" },
      { included: false, feature: "Nutrition guidance" },
      { included: false, feature: "Premium classes" },
    ],
  },
  {
    name: "Premium",
    duration: "6 Months",
    price: "239",
    originalPrice: "294",
    savingsPercent: 15,
    recommended: true,
    features: [
      { included: true, feature: "Access to gym facilities" },
      { included: true, feature: "All equipment access" },
      { included: true, feature: "Unlimited group classes" },
      { included: true, feature: "Locker room access" },
      { included: true, feature: "2 Personal trainer sessions" },
      { included: true, feature: "Basic nutrition guidance" },
      { included: false, feature: "Premium classes" },
    ],
  },
  {
    name: "Elite",
    duration: "12 Months",
    price: "399",
    originalPrice: "588",
    savingsPercent: 30,
    features: [
      { included: true, feature: "Access to gym facilities" },
      { included: true, feature: "All equipment access" },
      { included: true, feature: "Unlimited group classes" },
      { included: true, feature: "Locker room access" },
      { included: true, feature: "Monthly PT sessions" },
      { included: true, feature: "Advanced nutrition plan" },
      { included: true, feature: "Premium classes access" },
    ],
  },
];

const Membership = () => {
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
      if (touchDiff > 0 && currentSlide < plans.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (touchDiff < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }
  };

  return (
    <section className="py-20 bg-black" id="prices">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <h2 className="h2 text-white mb-4">Choose Your Plan</h2>
          <p className="text-white/70 max-w-[600px] mx-auto">
            Select the perfect membership plan that fits your fitness goals
          </p>
        </motion.div>

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
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <PlanCard plan={plan} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {plans.map((_, idx) => (
              <button
              title="Select Plan"
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
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 * (index + 2))}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({ plan }: { plan: Plan }) => (
  <div className={`relative bg-black/20 rounded-2xl backdrop-blur-sm border ${
    plan.recommended ? 'border-accent' : 'border-white/10'
  } p-6 h-full hover:transform hover:scale-105 transition-all duration-300`}>
    {plan.recommended && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-accent text-white text-sm px-4 py-1 rounded-full">
          Most Popular
        </span>
      </div>
    )}

    <div className="text-center mb-8">
      <h3 className="text-2xl text-white font-bold mb-2">{plan.name}</h3>
      <p className="text-accent uppercase text-sm mb-4">{plan.duration}</p>
      <div className="flex items-center justify-center gap-2">
        <span className="text-4xl font-bold text-white">${plan.price}</span>
        {plan.originalPrice && (
          <span className="text-lg text-white/50 line-through">${plan.originalPrice}</span>
        )}
      </div>
      {plan.savingsPercent && (
        <span className="text-accent text-sm">Save {plan.savingsPercent}%</span>
      )}
    </div>

    <ul className="space-y-4 mb-8">
      {plan.features.map((feature, idx) => (
        <li key={idx} className={`flex items-center gap-2 ${feature.included ? 'text-white/80' : 'text-white/40'}`}>
          {feature.included ? (
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          {feature.feature}
        </li>
      ))}
    </ul>

    <CustomButton
      text="Get Started"
      containerStyles={`w-full h-[50px] rounded-xl ${
        plan.recommended ? 'bg-accent hover:bg-accent/90' : 'bg-white/5 hover:bg-white/10'
      }`}
    />
  </div>
);

export default Membership;