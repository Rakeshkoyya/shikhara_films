'use client'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Crafting Stories That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
              Captivate & Convert
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Shikhara Films - Where creativity meets strategy. We produce high-impact advertisements 
            for television, theatre, and social media that elevate your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-red-600/50"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-4xl font-bold text-red-500">500+</h3>
              <p className="text-gray-300 mt-2">Ads Produced</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-4xl font-bold text-red-500">200+</h3>
              <p className="text-gray-300 mt-2">Happy Clients</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-4xl font-bold text-red-500">10+</h3>
              <p className="text-gray-300 mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
