"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for Building Muscle",
    category: "Strength Training",
    date: "Jan 15, 2024",
    image: "/assets/img/blog/1.jpeg",
    excerpt: "Expert advice on muscle growth and recovery",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Nutrition Guide for Athletes",
    category: "Nutrition",
    date: "Jan 18, 2024",
    image: "/assets/img/blog/2.jpg",
    excerpt: "Complete guide to pre and post workout nutrition",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Beginner's HIIT Workout",
    category: "Cardio",
    date: "Jan 20, 2024",
    image: "/assets/img/blog/3.jpg",
    excerpt: "High-intensity interval training for beginners",
    readTime: "4 min read"
  }
];

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0 && currentSlide < blogPosts.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (touchDiff < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }
  };

  return (
    <section className="py-20 bg-black" id="blog">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <h2 className="h2 text-white mb-4">Latest Fitness Tips</h2>
          <p className="text-white/70">Stay updated with the latest in fitness and nutrition</p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              animate={{ x: `${-100 * currentSlide}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {blogPosts.map((_, idx) => (
              <button
              title="Choose Your Plan"
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'w-4 bg-accent' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 * (index + 2))}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mt-12"
        >
          <button className="bg-accent/20 hover:bg-accent/30 text-white py-3 px-8 rounded-full transition-colors">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => (
  <div className="group cursor-pointer">
    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300">
      <div className="relative h-[240px] overflow-hidden">
        <Image
          src={post.image}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          alt={post.title}
        />
        <div className="absolute top-4 left-4 bg-accent py-1 px-3 rounded-full">
          <span className="text-white text-sm">{post.category}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center text-white/60 text-sm mb-3">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-white/70 mb-4">{post.excerpt}</p>

        <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all duration-300">
          <span className="font-medium">Read More</span>
          <FaArrowRight />
        </div>
      </div>
    </div>
  </div>
);

export default Blog;