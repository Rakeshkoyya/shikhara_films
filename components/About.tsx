'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-red-600">Shikhara Films</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                At Shikhara Films, we don&apos;t just create advertisements—we craft experiences 
                that resonate, inspire, and drive action. With over a decade of excellence in 
                the advertising industry, we&apos;ve established ourselves as a trusted partner for 
                brands seeking to make an impact.
              </p>
              
              <p>
                Our team of creative visionaries, strategic thinkers, and technical experts 
                work collaboratively to bring your brand&apos;s story to life. From initial concept 
                to final delivery, we ensure every frame tells your unique narrative.
              </p>

              <p>
                Whether it&apos;s a 30-second TV spot that becomes a cultural phenomenon, a 
                cinema ad that captivates a captive audience, or a social media campaign 
                that goes viral—we have the expertise and passion to make it happen.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="text-2xl font-bold text-red-500">Our Mission</h4>
                <p className="text-gray-400 mt-2">
                  To transform brands through compelling storytelling and innovative visual communication.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="text-2xl font-bold text-red-500">Our Vision</h4>
                <p className="text-gray-400 mt-2">
                  To be the most sought-after production house for brands that dare to dream big.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Creative Excellence</h4>
                    <p className="text-white/80">Award-winning creative team with proven track record</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Fast Turnaround</h4>
                    <p className="text-white/80">Efficient production process without compromising quality</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Competitive Pricing</h4>
                    <p className="text-white/80">Premium quality at rates that respect your budget</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Full-Service Production</h4>
                    <p className="text-white/80">From scripting to post-production, we handle it all</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
