import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/image1.jpg",
      title: "Empowering Lives Through Education, Healthcare & Hope",
      subtitle:
        "Unity for Helping Foundation works to bring hope, education, food, and healthcare to the underprivileged – completely free of cost.",
    },
    {
      image: "/image2.jpg",
      title: "A Ray of Light for the Underprivileged",
      subtitle:
        "Breaking the cycle of poverty through quality education and learning opportunities for underprivileged children.",
    },
    {
      image: "/image3.jpg",
      title: "Together for a Better Tomorrow",
      subtitle:
        "Providing nutritious meals and food security to families in need across rural and urban communities.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden site-bg">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0"
            style={{ willChange: 'opacity' }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === currentSlide ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Better Tomorrow: <br />
            Education, Health & Equality for All
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-flat flex items-center space-x-2">
              <span>Donate Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-outline inline-flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Become a Volunteer</span>
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-orange-500 w-8 h-3' : 'bg-white/30 w-3 h-3'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
