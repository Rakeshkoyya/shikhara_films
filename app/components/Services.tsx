const services = [
  {
    id: 1,
    title: "Television Commercials (TVCs)",
    subtitle: "Broadcast Excellence",
    description:
      "We create visually stunning and emotionally engaging TV commercials that elevate brand identity. Our team handles every aspect — from scripting, casting, and location scouting to production and post-production — ensuring a seamless process that delivers broadcast-quality results.",
    features: [
      "Scripting & Concept Development",
      "Casting & Location Scouting",
      "Full Production Services",
      "Post-Production & Delivery",
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
    title: "Social Media & Digital Ads",
    subtitle: "Digital Dominance",
    description:
      "In today's fast-paced digital landscape, attention is everything. Shikhara Films produces crisp, high-performing video content tailored for platforms like Instagram, YouTube, Facebook, and OTT. We specialize in short-format storytelling that drives engagement and conversions.",
    features: [
      "Instagram & Facebook Ads",
      "YouTube Pre-roll & Content",
      "OTT Platform Content",
      "Performance-Driven Creatives",
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
  {
    id: 3,
    title: "Influencer Collaborations",
    subtitle: "Authentic Partnerships",
    description:
      "We connect brands with the right influencers to create authentic, impactful campaigns. Our creative direction ensures that every collaboration feels organic while achieving measurable marketing goals.",
    features: [
      "Influencer Matching & Outreach",
      "Campaign Strategy & Planning",
      "Creative Direction",
      "Performance Tracking",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    image: "🤝",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-transparent relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Semi-transparent container for readability */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-xl">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-[#E07B39] text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4 font-medium">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5C4033] mb-4 md:mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-[#8B7355] max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
              We specialize in creating compelling advertisements across all major
              platforms, ensuring your brand message reaches the right audience with
              maximum impact.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-6 md:space-y-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                className={`${index % 2 === 1 ? "md:order-2" : ""} space-y-4 md:space-y-6`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-linear-to-br from-[#E07B39]/20 to-[#F4A261]/10 border border-[#E07B39]/30 flex items-center justify-center text-[#E07B39] shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-[#E07B39] text-[10px] sm:text-xs uppercase tracking-wider font-medium">
                      {service.subtitle}
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#5C4033]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[#8B7355] leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-[#E07B39] shrink-0"
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
                      <span className="text-[#5C4033]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#E07B39] font-medium hover:gap-4 transition-all duration-300"
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
                } aspect-video rounded-2xl bg-linear-to-br from-white to-[#FFF8F0] p-8 flex items-center justify-center relative overflow-hidden group hover:border-[#E07B39]/30 border border-[#E6D5C3] transition-all duration-500 shadow-lg shadow-[#E07B39]/5`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E07B39' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>

                {/* Icon */}
                <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500">
                  {service.image}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#E07B39]/30 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#F4A261]/30 rounded-bl-lg"></div>
              </div>
            </div>
          ))}
        </div>

          {/* Additional Services Banner */}
          <div className="mt-20 p-8 rounded-2xl bg-linear-to-r from-[#E07B39]/10 to-[#F4A261]/5 border border-[#E07B39]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#5C4033] mb-2">
                  Need a Custom Solution?
                </h3>
                <p className="text-[#8B7355]">
                  We work on projects of all scales — from micro-budget digital videos to high-end cinematic commercials.
                </p>
              </div>
              <a
                href="#contact"
                className="px-8 py-4 bg-linear-to-r from-[#E07B39] to-[#F4A261] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#E07B39]/30 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm whitespace-nowrap"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
