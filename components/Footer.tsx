"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaDumbbell, FaClock } from "react-icons/fa";
import { ScrollLink } from "react-scroll";

interface FooterLink {
  name: string;
  href: string;
}

const quickLinks: FooterLink[] = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Classes", href: "classes" },
  { name: "Schedule", href: "schedule" },
  { name: "Pricing", href: "prices" },
  { name: "Contact", href: "contact" }
];

const Footer = () => {
  return (
    <footer className="pt-20 bg-gradient-to-t bg-black  from-black to-gray-900" id="contact">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
          {/* Column 1 - About */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center lg:text-left"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="relative">
                <Image 
                  src="/assets/img/logo.png" 
                  width={80} 
                  height={80} 
                  alt="Logo" 
                  className="rounded-full hover:scale-105 transition-transform duration-300"
                />
                <motion.div 
                  className="absolute inset-0 border-2 border-accent rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </Link>
            <p className="text-white/70 mb-6">
              Transform your body and mind with our state-of-the-art facilities and expert trainers.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                >
                  <Link
                    href="#"
                    className="text-white/70 hover:text-accent text-lg transition-colors"
                  >
                    <Icon />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center lg:text-left"
          >
            <h4 className="text-white text-lg font-bold mb-6 flex items-center justify-center lg:justify-start gap-2">
              <FaDumbbell className="text-accent" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={`#${link.href}`}
                    className="text-white/70 hover:text-accent transition-colors inline-block hover:translate-x-2 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Hours */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center lg:text-left"
          >
            <h4 className="text-white text-lg font-bold mb-6 flex items-center justify-center lg:justify-start gap-2">
              <FaClock className="text-accent" />
              Working Hours
            </h4>
            <div className="flex flex-col gap-4">
              <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-white font-medium">Monday - Friday:</p>
                <p className="text-white/70">6:00 AM - 10:00 PM</p>
              </div>
              <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-white font-medium">Saturday:</p>
                <p className="text-white/70">7:00 AM - 8:00 PM</p>
              </div>
              <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-white font-medium">Sunday:</p>
                <p className="text-white/70">8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center lg:text-left"
          >
            <h4 className="text-white text-lg font-bold mb-6 flex items-center justify-center lg:justify-start gap-2">
              <FaPhone className="text-accent" />
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <Link 
                href="tel:+1234567890" 
                className="flex items-center justify-center lg:justify-start gap-2 text-white/70 hover:text-accent transition-colors bg-black/20 p-4 rounded-xl backdrop-blur-sm"
              >
                <FaPhone />
                <span>+1 (234) 567-890</span>
              </Link>
              <Link 
                href="mailto:info@gymfit.com" 
                className="flex items-center justify-center lg:justify-start gap-2 text-white/70 hover:text-accent transition-colors bg-black/20 p-4 rounded-xl backdrop-blur-sm"
              >
                <FaEnvelope />
                <span>info@gymfit.com</span>
              </Link>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/70 bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                <FaMapMarkerAlt className="flex-shrink-0" />
                <span>123 Fitness Street, Gym City, ST 12345</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-center md:text-left">
              © {new Date().getFullYear()} GymFit. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link 
                href="#" 
                className="text-white/70 hover:text-accent transition-colors hover:-translate-y-1 duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="#" 
                className="text-white/70 hover:text-accent transition-colors hover:-translate-y-1 duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;