'use client'

export default function Portfolio() {
  const projects = [
    {
      title: "Luxury Car Launch",
      category: "Television Commercial",
      description: "A cinematic 60-second commercial showcasing elegance and performance, aired during prime time on major networks.",
      tags: ["Automotive", "Luxury Brand", "National Campaign"]
    },
    {
      title: "Fashion Brand Anthology",
      category: "Theatre Advertising",
      description: "A series of stunning visual stories displayed in premium multiplexes, creating buzz around a new fashion collection.",
      tags: ["Fashion", "Premium Cinema", "Multi-city"]
    },
    {
      title: "Food Delivery App Campaign",
      category: "Social Media",
      description: "Viral short-form content series across Instagram, TikTok, and YouTube, generating 10M+ views and 250K+ engagements.",
      tags: ["Digital First", "Viral", "User Generated"]
    },
    {
      title: "Banking Innovation",
      category: "Television Commercial",
      description: "Trust-building narrative for a leading bank's digital transformation, connecting emotionally with diverse audiences.",
      tags: ["Financial", "Emotional", "Pan-India"]
    },
    {
      title: "Smartphone Launch",
      category: "Multi-Platform",
      description: "Integrated campaign across TV, cinema, and social media for a flagship smartphone launch, achieving record-breaking awareness.",
      tags: ["Technology", "360° Campaign", "Launch"]
    },
    {
      title: "E-commerce Festival Sale",
      category: "Social Media",
      description: "High-energy, fast-paced content designed for social platforms, driving massive traffic during festive season.",
      tags: ["E-commerce", "Festival", "Performance Marketing"]
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of campaigns that moved audiences and delivered results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-red-500"
            >
              {/* Image placeholder with gradient */}
              <div className="h-48 bg-gradient-to-br from-red-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-red-600 font-semibold mb-2">
                  {project.category}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to see more examples of our work? Let&apos;s discuss your project!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
