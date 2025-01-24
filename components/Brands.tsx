"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-12 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Title */}
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-accent mx-auto mb-4" />
            <h2 className="h2 text-white">Contact Us</h2>
          </div>

          {/* WhatsApp Button */}
          <Link 
            href="https://wa.me/1234567890"  // Replace with your WhatsApp number
            target="_blank"
            className="group relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#25D366] hover:bg-[#128C7E] px-8 py-4 rounded-full flex items-center gap-3 transition-colors"
            >
              <FaWhatsapp className="text-white text-2xl" />
              <span className="text-white font-medium">Start Training Today</span>
            </motion.div>
            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20"></div>
          </Link>

          {/* Additional Info */}
          <motion.p 
            variants={fadeIn("up", 0.4)}
            className="text-white/70 text-center mt-6 max-w-[300px]"
          >
            Available 24/7 for your fitness journey. Get started with a free consultation!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;