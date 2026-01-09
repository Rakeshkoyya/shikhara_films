import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#FFFBF5] via-[#FFF8F0] to-[#F5EBE0] pb-8 md:pb-12"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E07B39]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F4A261]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#E6D5C3]/30 rounded-full blur-3xl"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E07B39' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-28 lg:pt-24 xl:pt-20 pb-16 md:pb-24 text-center">
        {/* Logo */}
        <div className="mb-6 md:mb-8 animate-fade-in">
          <Image 
            src="/logo.png" 
            alt="Shikhara Films" 
            width={200} 
            height={100}
            className="mx-auto w-32 sm:w-40 md:w-48 lg:w-50 h-auto"
          />
        </div>

        {/* Tagline */}
        <p className="text-[#E07B39] text-sm md:text-base uppercase tracking-[0.4em] mb-6 animate-fade-in font-medium">
          Premium Ad Production House
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5C4033] mb-4 md:mb-6 animate-fade-in-up leading-tight">
          Crafting Stories That
          <span className="block mt-1 md:mt-2 gradient-text">Move Audiences</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#8B7355] max-w-3xl mx-auto mb-6 md:mb-10 animate-fade-in-up leading-relaxed px-2">
          From concept to completion, we bring creativity, strategy, and cinematic 
          excellence together to create advertisements that connect deeply with audiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-in-up">
          <a
            href="#services"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-[#E07B39] to-[#F4A261] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#E07B39]/30 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-xs md:text-sm"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-[#E07B39] text-[#E07B39] font-bold rounded-full hover:bg-[#E07B39] hover:text-white transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-xs md:text-sm"
          >
            Start Your Project
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 animate-fade-in">
          {[
            { number: "170+", label: "Ad Films Created" },
            { number: "50+", label: "Happy Brands" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/50 backdrop-blur-sm border border-[#E6D5C3] hover:border-[#E07B39]/30 transition-colors duration-300">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                {stat.number}
              </p>
              <p className="text-[#8B7355] text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mt-1 md:mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
