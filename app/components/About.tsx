import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#FFF8F0] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-linear-to-tr from-[#F4A261]/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#E07B39] text-sm uppercase tracking-[0.3em] mb-4 font-medium">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5C4033] mb-6 leading-tight">
              We Bring Your
              <span className="gradient-text block">Vision to Life</span>
            </h2>
            <div className="space-y-6 text-[#8B7355] leading-relaxed">
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
            <div className="grid grid-cols-1 gap-6 mt-10">
              <div className="p-6 rounded-2xl bg-linear-to-br from-[#FFF8F0] to-[#F5EBE0] border border-[#E6D5C3] hover:border-[#E07B39]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#E07B39] to-[#F4A261] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#5C4033]">Our Vision</h3>
                </div>
                <p className="text-[#8B7355] text-sm leading-relaxed">
                  To be recognized as one of India&apos;s most creative and reliable ad production 
                  houses, known for combining artistic storytelling with strategic marketing impact.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-linear-to-br from-[#FFF8F0] to-[#F5EBE0] border border-[#E6D5C3] hover:border-[#E07B39]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#E07B39] to-[#F4A261] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#5C4033]">Our Mission</h3>
                </div>
                <p className="text-[#8B7355] text-sm leading-relaxed">
                  To help brands communicate their essence through powerful visuals — by blending 
                  creativity, emotion, and innovation into every frame we produce.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-linear-to-br from-[#FFF8F0] to-[#F5EBE0] p-8 relative overflow-hidden border border-[#E6D5C3] shadow-xl shadow-[#E07B39]/5">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-[#E07B39]/20 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-[#F4A261]/20 rounded-full"></div>
              
              {/* Main content */}
              <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 overflow-hidden bg-white shadow-lg">
                  <Image 
                    src="/logo_icon.png" 
                    alt="Shikhara Films" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#5C4033] mb-3">Our Philosophy</h3>
                <p className="text-[#8B7355] text-sm leading-relaxed max-w-xs">
                  Every frame tells a story. We believe in the power of visual
                  storytelling to create emotional connections between brands and
                  their audiences.
                </p>
                
                {/* Quote */}
                <blockquote className="mt-8 border-l-4 border-[#E07B39] pl-4 text-left bg-white/50 p-4 rounded-r-lg">
                  <p className="text-[#5C4033] italic text-sm">
                    &ldquo;Great advertising doesn&apos;t just sell products—it creates
                    experiences that people remember.&rdquo;
                  </p>
                  <cite className="text-[#E07B39] text-xs mt-2 block font-medium">
                    — Shikhara Films Team
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
