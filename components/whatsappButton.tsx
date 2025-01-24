// components/WhatsAppButton.tsx
"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
 return (
   <motion.a
     href="https://wa.me/1234567890" // Replace with your number
     target="_blank"
     className="fixed bottom-6 right-6 z-50"
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
   >
     <div className="relative">
       <div className="bg-[#25D366] p-4 rounded-full">
         <FaWhatsapp className="text-white text-3xl" />
       </div>
       <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
     </div>
   </motion.a>
 );
};

export default WhatsAppButton;