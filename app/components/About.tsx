export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#d4af37] text-sm uppercase tracking-[0.3em] mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We Bring Your
              <span className="gradient-text block">Vision to Life</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                <span className="text-white font-semibold">Shikhara Films</span> is a
                premier ad production house dedicated to creating powerful visual
                narratives that resonate with audiences across all platforms. Our
                name, inspired by the peak of a mountain, reflects our commitment
                to reaching the highest standards of creative excellence.
              </p>
              <p>
                With over a decade of experience in the industry, we&apos;ve
                partnered with leading brands to produce advertisements that not
                only capture attention but also drive meaningful engagement and
                results.
              </p>
              <p>
                Our team of visionary directors, skilled cinematographers, and
                creative storytellers work together to transform your brand&apos;s
                message into compelling visual content that stands out in
                today&apos;s crowded media landscape.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: "🎬", title: "Creative Direction" },
                { icon: "🎥", title: "4K Production" },
                { icon: "✨", title: "VFX & Animation" },
                { icon: "🎵", title: "Sound Design" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d] hover:border-[#d4af37]/50 transition-colors duration-300"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-white font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-[#d4af37]/30 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-[#d4af37]/30 rounded-full"></div>
              
              {/* Main content */}
              <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-12 h-12 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Our Philosophy</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  Every frame tells a story. We believe in the power of visual
                  storytelling to create emotional connections between brands and
                  their audiences.
                </p>
                
                {/* Quote */}
                <blockquote className="mt-8 border-l-4 border-[#d4af37] pl-4 text-left">
                  <p className="text-white italic text-sm">
                    &ldquo;Great advertising doesn&apos;t just sell products—it creates
                    experiences that people remember.&rdquo;
                  </p>
                  <cite className="text-[#d4af37] text-xs mt-2 block">
                    — Shikhara Films Team
                  </cite>
                </blockquote>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#d4af37] text-black px-6 py-3 rounded-full font-bold shadow-xl">
              Est. 2014
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
