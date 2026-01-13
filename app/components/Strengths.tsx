export default function Strengths() {
  const strengths = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "End-to-End Production",
      description: "From concept development to final delivery, all under one creative roof.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexible Budgets",
      description: "We work on projects of all scales — from micro-budget digital videos to high-end cinematic commercials.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Creative Expertise",
      description: "Our team of directors, writers, cinematographers, and editors have worked on over 170+ ad films for leading brands.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality & Timeliness",
      description: "We understand brand timelines and deliver professional-grade output with precision and efficiency.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Cinematic Storytelling",
      description: "Our filmmaking background ensures that every frame speaks with emotion, depth, and purpose.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Trusted Partner",
      description: "We've built lasting relationships with brands through consistent quality and creative excellence.",
    },
  ];

  return (
    <section id="strengths" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#E07B39]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#F4A261]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#E07B39] text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4 font-medium">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5C4033] mb-4 md:mb-6">
            Our <span className="gradient-text">Strengths</span>
          </h2>
          <p className="text-[#8B7355] max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            What sets Shikhara Films apart is our commitment to excellence, creativity, 
            and delivering results that exceed expectations.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="group p-5 md:p-8 rounded-xl md:rounded-2xl bg-linear-to-br from-[#FFF8F0] to-[#F5EBE0] border border-[#E6D5C3] hover:border-[#E07B39]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#E07B39]/10"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-linear-to-br from-[#E07B39] to-[#F4A261] flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                {strength.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#5C4033] mb-2 md:mb-3">
                {strength.title}
              </h3>
              <p className="text-[#8B7355] leading-relaxed text-xs sm:text-sm">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-12 md:mt-20 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl bg-linear-to-r from-[#E07B39] to-[#F4A261] relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {[
              { number: "170+", label: "Ad Films Working Experience" },
              { number: "25+", label: "Brands Served" },
              { number: "100%", label: "Satisfaction" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                  {stat.number}
                </p>
                <p className="text-white/80 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
