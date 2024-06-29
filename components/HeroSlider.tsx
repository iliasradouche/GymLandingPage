"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperButton from "./SwiperButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2"
            >
              <span>Where Hard</span>work meets success
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
              className="flex gap-4"
            >
              <CustomButton
                text="Join Member"
                containerStyles="w-[170px] h-[50px] rounded-lg"
              />
              <CustomButton
                text="Contact Us"
                containerStyles="w-[170px] h-[50px] rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2"
            >
              <span>Là ou</span> l effort forge la réussite
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
              className="flex gap-4"
            >
              <CustomButton
                text="Inscription"
                containerStyles="w-[170px] h-[50px] rounded-lg"
              />
              <CustomButton
                text="Contactez nous"
                containerStyles="w-[170px] h-[50px] rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperButton
        containerStyles="absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1"
        btnStyles="border rounded-full border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
        iconsStyles="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;
