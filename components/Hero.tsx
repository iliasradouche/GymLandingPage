"use client";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";

const Hero = () => {
 return (
   <section className="relative h-screen overflow-hidden" id="home">
     {/* Background Video */}
     <video
       autoPlay
       loop
       muted
       playsInline
       className="absolute w-full h-full object-cover"
     >
       <source src="/assets/video/hero.mp4" type="video/mp4" />
     </video>

     {/* Overlay */}
     <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

     {/* Content */}
     <div className="container mx-auto h-full relative z-10">
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
         className="flex flex-col items-center justify-center h-full text-center px-4"
       >
         <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6">
           Transform Your Body
           <span className="text-accent block mt-2">Transform Your Life</span>
         </h1>
         <p className="text-white/80 text-lg mb-8 max-w-[600px]">
           Join our community and achieve your fitness goals with expert trainers
         </p>
         <CustomButton
           text="Start Your Journey"
           containerStyles="w-48 h-14 bg-accent hover:bg-accent/90"
         />
       </motion.div>
     </div>
   </section>
 );
};

export default Hero;