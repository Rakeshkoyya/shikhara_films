"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroVideos } from "@/data/videos";

export default function Hero() {
  const [selectedVideo, setSelectedVideo] = useState<typeof heroVideos[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = document.getElementById('video-carousel');
    if (carousel) {
      const scrollAmount = 300;
      carousel.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pb-8 md:pb-12"
    >

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-28 lg:pt-24 xl:pt-20 pb-16 md:pb-24 text-center">
        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#F4A261] text-sm md:text-base uppercase tracking-[0.4em] mb-6 font-medium"
        >
          Premium Ad Production House
        </motion.p>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5C4033] mb-4 md:mb-6 leading-tight"
        >
          Crafting Stories That
          <span className="block mt-1 md:mt-2 gradient-text">Move Audiences</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-[#8B7355] max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed px-2"
        >
          From concept to completion, we bring creativity, strategy, and cinematic 
          excellence together to create advertisements that connect deeply with audiences.
        </motion.p>

        {/* Video Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#5C4033] mb-6 text-left">
            Our Recent Work
          </h3>
          
          <div className="relative group">
            {/* Left Arrow Button */}
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-[#E07B39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-[#E07B39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="relative overflow-hidden">
              <div 
                id="video-carousel"
                className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
              >
                {heroVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative flex-shrink-0 snap-center cursor-pointer"
                    style={{
                      width: hoveredIndex === index ? '400px' : '280px',
                      transition: 'width 0.3s ease-in-out'
                    }}
                    onClick={() => setSelectedVideo(video)}
                  >
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.05 : 1,
                        y: hoveredIndex === index ? -20 : 0,
                        zIndex: hoveredIndex === index ? 10 : 1,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl group/item"
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-video bg-gray-200">
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/item:opacity-80 transition-opacity duration-300"></div>
                        
                        {/* Play button */}
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ 
                            scale: hoveredIndex === index ? 1 : 0.8,
                            opacity: hoveredIndex === index ? 1 : 0
                          }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm">
                            <svg className="w-8 h-8 text-[#E07B39] ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Hover overlay text - show video title */}
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent"
                        >
                          <p className="text-white text-sm font-medium line-clamp-2">
                            {video.title}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-[#D71B5B] transition-colors duration-200 group"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video header */}
              <div className="bg-white p-4 text-center">
                                <h3 className="text-[#D71B5B] font-austhind text-xl md:text-2xl" style={{ fontFamily: "'Austhind', cursive" }}>

                  Be wise, Advertise.
                </h3>
              </div>

              {/* Video iframe */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-[#E07B39] opacity-60 hover:opacity-100 transition-opacity">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
