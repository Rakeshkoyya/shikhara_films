const services = [
  {
    id: 1,
    title: "Television Commercials",
    subtitle: "Broadcast Excellence",
    description:
      "Create impactful TV commercials that capture attention and drive brand recall. Our end-to-end production services include concept development, scripting, casting, shooting, and post-production for all major networks and cable channels.",
    features: [
      "30s & 60s Commercial Production",
      "Brand Films & Corporate Videos",
      "Infomercials & Program Sponsorship",
      "Regional & National Campaigns",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    image: "📺",
  },
  {
    id: 2,
    title: "Theatre & Cinema Ads",
    subtitle: "Big Screen Impact",
    description:
      "Leverage the immersive cinema experience with stunning theatre advertisements. We produce high-quality cinema ads optimized for the big screen that create lasting impressions on captive audiences.",
    features: [
      "Pre-show Advertisement Production",
      "Cinematic Brand Stories",
      "DCP Mastering & Distribution",
      "3D & IMAX Compatible Content",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
        />
      </svg>
    ),
    image: "🎬",
  },
  {
    id: 3,
    title: "Social Media Content",
    subtitle: "Digital Dominance",
    description:
      "Create scroll-stopping social media content tailored for each platform. From Instagram Reels to YouTube pre-rolls, we craft engaging digital ads that drive engagement, shares, and conversions.",
    features: [
      "Instagram & Facebook Ads",
      "YouTube Pre-roll & Bumper Ads",
      "TikTok & Reels Content",
      "LinkedIn & Twitter Campaigns",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    image: "📱",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#111111] relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-sm uppercase tracking-[0.3em] mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We specialize in creating compelling advertisements across all major
            platforms, ensuring your brand message reaches the right audience with
            maximum impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`${index % 2 === 1 ? "md:order-2" : ""} space-y-6`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-[#d4af37] text-xs uppercase tracking-wider">
                      {service.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-[#d4af37] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#d4af37] font-medium hover:gap-4 transition-all duration-300"
                >
                  Learn More
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

              {/* Visual Card */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1" : ""
                } aspect-video rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-8 flex items-center justify-center relative overflow-hidden group hover:border-[#d4af37]/30 border border-transparent transition-colors duration-500`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>

                {/* Icon */}
                <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500">
                  {service.image}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#d4af37]/30 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#d4af37]/30 rounded-bl-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-[#d4af37]/10 to-transparent border border-[#d4af37]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-400">
                We also offer production services for corporate films, music videos,
                documentaries, and more.
              </p>
            </div>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black font-bold rounded-full hover:shadow-xl hover:shadow-[#d4af37]/30 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm whitespace-nowrap"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
