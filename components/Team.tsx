"use client";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const trainerData = [
  {
    image: "/assets/img/trainers/coach_1.jpg",
    name: "John Doe",
    role: "Body builder coach",
    description: "lorem ipsom, idi , dolor jhieloo ljh elit",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/coach_2.jpg",
    name: "John Doe",
    role: "Fitness Coach",
    description: "lorem ipsom, idi , dolor jhieloo ljh elit",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/coach_2.jpg",
    name: "John Doe",
    role: "Fitness Coach",
    description: "lorem ipsom, idi , dolor jhieloo ljh elit",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 bg-black lg:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center text-white mb-6"
        >
          Our trainers
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 text-white"
        >
          {trainerData.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                <div className="relative w-[298px] h-[200px] mx-auto mb-4">
                  <Image src={trainer.image} fill alt="" className="rounded-lg"/>
                </div>
                <h4 className="h4 mb-2 text-accent">{trainer.name}</h4>
                <p className="uppercase text-xs tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                <p className="mb-6 max-w-[320px] mx-auto">
                  {trainer.description}
                </p>
                <div className="flex gap-12 justify-center">
                  {trainer.social.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link
                          href={social.href}
                          className="hover:text-accent transition-all"
                        >
                          <social.icon className="text-lg" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton containerStyles="w-[196px] h-[62px]" text="View All" />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
