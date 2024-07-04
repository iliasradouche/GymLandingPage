"use client";

import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlider = () => {
  return (
    <div className="h-full flex justify-end pt-[140px] relative">
      <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h1 text-center lg:text-left mb-2"
        >
          Build your body into a <span className="text-accent">healthy</span>{" "}
          and <span className="text-accent">strong body</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-white font-extralight text-center lg:text-left mb-4"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          convallis, eros vel dignissim pharetra.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col lg:flex-row gap-4"
        >
          <CustomButton
            text="Inscription"
            containerStyles="w-[170px] h-[50px] rounded-3xl"
          />
          <CustomButton
            text="Contactez nous"
            containerStyles="w-[170px] h-[50px] rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlider;
