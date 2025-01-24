"use client";
import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "Home", target: "home", offset: -100 },
  { name: "About", target: "about", offset: -80 },
  { name: "Classes", target: "class", offset: -80 },
  { name: "Team", target: "team", offset: 0 },
  { name: "Prices", target: "prices", offset: -40 },
  { name: "Blog", target: "blog", offset: 0 },
  { name: "Contact", target: "contact", offset: -100 },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({ query: "(max-width:640px)" });
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className={`${containerStyles} py-4`}>
      <AnimatePresence>
        {links.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredItem(link.name)}
            onHoverEnd={() => setHoveredItem(null)}
            className="relative mb-3"
          >
            <ScrollLink
              offset={link.offset}
              to={link.target}
              smooth
              spy
              activeClass={`${!isMobile && "active"}`}
              className="relative flex items-center gap-2 text-base font-medium tracking-wide cursor-pointer transition-all duration-300 py-2 px-4"
            >
              <span className="relative z-10">{link.name}</span>
              {hoveredItem === link.name && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-accent/10 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </ScrollLink>
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-accent"
              initial={{ width: "0%" }}
              animate={{
                width: hoveredItem === link.name ? "100%" : "0%",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;