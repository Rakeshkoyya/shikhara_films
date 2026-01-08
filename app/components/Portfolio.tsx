const portfolioItems = [
  {
    id: 1,
    title: "Urban Lifestyle Brand",
    category: "Television",
    description: "A 60-second commercial showcasing modern urban lifestyle for a leading apparel brand.",
    year: "2024",
  },
  {
    id: 2,
    title: "Luxury Auto Launch",
    category: "Cinema",
    description: "Cinematic theatre ad for a premium automobile manufacturer's new flagship model.",
    year: "2024",
  },
  {
    id: 3,
    title: "Tech Startup Campaign",
    category: "Social Media",
    description: "Viral social media campaign with multiple format adaptations for a fintech startup.",
    year: "2024",
  },
  {
    id: 4,
    title: "Festival Special",
    category: "Television",
    description: "Emotional festival campaign for a major FMCG brand reaching millions of households.",
    year: "2023",
  },
  {
    id: 5,
    title: "Restaurant Chain",
    category: "Social Media",
    description: "Mouth-watering food content series for a pan-India restaurant chain.",
    year: "2023",
  },
  {
    id: 6,
    title: "Banking Services",
    category: "Cinema",
    description: "Premium cinema ad highlighting digital banking transformation.",
    year: "2023",
  },
];

const categories = ["All", "Television", "Cinema", "Social Media"];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-sm uppercase tracking-[0.3em] mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of award-winning advertisements and creative
            campaigns that have helped brands connect with their audiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                index === 0
                  ? "bg-[#d4af37] text-black"
                  : "bg-[#1a1a1a] text-gray-400 hover:bg-[#2d2d2d] hover:text-white border border-[#2d2d2d]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#2d2d2d] hover:border-[#d4af37]/50 transition-all duration-500"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] relative overflow-hidden">
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-black ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-[#d4af37] text-xs font-medium uppercase tracking-wider rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-[#d4af37]/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-gray-500 text-sm">{item.year}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* View project link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#d4af37] text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  View Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-full hover:bg-[#d4af37] hover:text-black transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            View Complete Portfolio
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
