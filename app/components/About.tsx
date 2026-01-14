import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Semi-transparent container for readability */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-[#E07B39] text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4 font-medium">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5C4033] mb-4 md:mb-6 leading-tight">
                We Bring Your
                <span className="gradient-text block">Vision to Life</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-[#8B7355] leading-relaxed text-sm sm:text-base">
                <p>
                  <span className="text-[#5C4033] font-semibold">Shikhara Films</span> is a
                  full-service ad production house specializing in crafting impactful visual 
                  stories for brands. From concept to completion, we bring creativity, strategy, 
                  and cinematic excellence together to create advertisements that connect deeply 
                  with audiences.
                </p>
                <p>
                  Founded by a team of passionate filmmakers and advertising professionals, 
                  Shikhara Films has quickly grown into a trusted name for TVCs, social media 
                  commercials, and influencer promotions. Whether it&apos;s a fast-paced digital 
                  campaign or a high-end television commercial, we bring the same dedication, 
                  precision, and storytelling power to every project.
                </p>
              </div>

              {/* Vision & Mission */}
              <div className="grid grid-cols-1 gap-4 md:gap-6 mt-8 md:mt-10">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-linear-to-br from-[#FFF8F0] to-[#F5EBE0] border border-[#E6D5C3] hover:border-[#E07B39]/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-linear-to-br from-[#E07B39] to-[#F4A261] flex items-center justify-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-[#5C4033]">Our Vision</h3>
                  </div>
                  <p className="text-[#8B7355] text-xs md:text-sm leading-relaxed">
                    To be recognized as one of India&apos;s most creative and reliable ad production 
                    houses, known for combining artistic storytelling with strategic marketing impact.
                  </p>
              </div>
              
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-linear-to-br from-[#FFF8F0] to-[#F5EBE0] border border-[#E6D5C3] hover:border-[#E07B39]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-linear-to-br from-[#E07B39] to-[#F4A261] flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#5C4033]">Our Mission</h3>
                </div>
                <p className="text-[#8B7355] text-xs md:text-sm leading-relaxed">
                  To help brands communicate their essence through powerful visuals — by blending 
                  creativity, emotion, and innovation into every frame we produce.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-4/5 sm:aspect-square max-w-md mx-auto md:max-w-none rounded-2xl md:rounded-3xl bg-linear-to-br from-[#FFF8F0] to-[#F5EBE0] p-6 sm:p-8 md:p-10 relative overflow-hidden border border-[#E6D5C3] shadow-xl shadow-[#E07B39]/5">
              {/* Decorative elements */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 w-14 h-14 md:w-20 md:h-20 border-2 border-[#E07B39]/20 rounded-lg"></div>
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-12 h-12 md:w-16 md:h-16 border-2 border-[#F4A261]/20 rounded-full"></div>
              
              {/* Main content */}
              <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center mb-5 md:mb-6 overflow-hidden bg-white shadow-lg">
                  <Image 
                    src="/logo_icon.png" 
                    alt="Shikhara Films" 
                    width={100} 
                    height={100}
                    className="object-contain w-16 sm:w-20 md:w-24 h-auto"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#5C4033] mb-3 md:mb-4">Our Philosophy</h3>
                <p className="text-[#8B7355] text-sm sm:text-base leading-relaxed max-w-sm">
                  Every frame tells a story. We believe in the power of visual
                  storytelling to create emotional connections between brands and
                  their audiences.
                </p>
                
                {/* Quote */}
                <blockquote className="mt-5 md:mt-8 border-l-4 border-[#E07B39] pl-4 md:pl-5 text-left bg-white/50 p-4 md:p-5 rounded-r-lg">
                  <p className="text-[#5C4033] italic text-sm sm:text-base">
                    &ldquo;Great advertising doesn&apos;t just sell products—it creates
                    experiences that people remember.&rdquo;
                  </p>
                  <cite className="text-[#E07B39] text-xs sm:text-sm mt-2 md:mt-3 block font-medium">
                    — Shikhara Films Team
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
