"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const featured = [
  {
    icon: <FaUsers />,
    title: "award-wining training",
    subtitle: "eros vel dignissim pharetra",
  },
  {
    icon: <IoIosPricetag />,
    title: "Excelent prices",
    subtitle: "eros vel dignissim pharetra",
  },
  {
    icon: <FaDumbbell />,
    title: "Modern equipement",
    subtitle: "eros vel dignissim pharetra",
  },
];
const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-20 lg:pb-25 bg-black" id="about">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="h2 text-center text-white">About us</h2>
          <p className="max-w-[600px] mx-auto text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            convallis, eros vel dignissim pharetra.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 text-white">
          {featured.map((feature, index) => {
            return (
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col justify-center items-center gap-4 border p-10 hover:bg-lime-100 hover:text-black rounded-xl"
                key={index}
              >
                <div className="text-4xl bg-lime-400 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
