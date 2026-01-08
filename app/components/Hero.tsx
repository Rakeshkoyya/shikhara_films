export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Film strip decoration */}
        <div className="absolute left-0 top-0 bottom-0 w-16 opacity-10">
          <div className="h-full flex flex-col justify-around">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-full h-6 bg-white/20 mx-2"></div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-16 opacity-10">
          <div className="h-full flex flex-col justify-around">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-full h-6 bg-white/20 mx-2"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Tagline */}
        <p className="text-[#d4af37] text-sm md:text-base uppercase tracking-[0.4em] mb-6 animate-fade-in">
          Premium Ad Production House
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Crafting Stories That
          <span className="block mt-2 gradient-text">Move Audiences</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 animate-fade-in-up leading-relaxed">
          From the silver screen to the smallest screen, we create compelling
          advertisements that captivate, inspire, and drive results for
          <span className="text-white font-medium"> Television</span>,
          <span className="text-white font-medium"> Theatre</span>, and
          <span className="text-white font-medium"> Social Media</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black font-bold rounded-full hover:shadow-xl hover:shadow-[#d4af37]/30 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-full hover:bg-[#d4af37] hover:text-black transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Start Your Project
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          {[
            { number: "150+", label: "Projects Delivered" },
            { number: "50+", label: "Happy Clients" },
            { number: "10+", label: "Years Experience" },
            { number: "25+", label: "Awards Won" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.number}
              </p>
              <p className="text-gray-500 text-sm uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-[#d4af37] opacity-60 hover:opacity-100 transition-opacity">
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
