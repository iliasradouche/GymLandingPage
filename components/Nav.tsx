"use client";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const links = [
  { name: "Home", target: "home", offset: -100 },
  { name: "About", target: "about", offset: -80 },
  { name: "Team", target: "team", offset: 0 },
  { name: "Prices", target: "prices", offset: -40 },
  { name: "Contact", target: "contact", offset: -100 },
];

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass="active"
            className="uppercase text-sm tracking-[1px] hover:text-accent cursor-pointer transition-all duration-300 px-4 py-2"
          >
            {link.name}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-left scale-x-0 transition-transform duration-300"
              whileHover={{ scaleX: 1 }}
            />
          </ScrollLink>
        </motion.div>
      ))}
    </nav>
  );
};

export default Nav;