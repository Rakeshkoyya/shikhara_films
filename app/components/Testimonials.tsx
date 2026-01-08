const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Marketing Director",
    company: "TechVista Solutions",
    quote:
      "Shikhara Films transformed our brand vision into a stunning TV commercial that exceeded all expectations. Their attention to detail and creative approach made our campaign a massive success.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Brand Manager",
    company: "Luxe Fashion House",
    quote:
      "Working with Shikhara Films was an incredible experience. Their cinema ad for our luxury collection was pure art. The team's professionalism and creativity are unmatched.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "CEO",
    company: "FoodieChain Restaurants",
    quote:
      "Our social media engagement tripled after Shikhara Films created our content series. They truly understand how to create scroll-stopping content that converts.",
    rating: 5,
  },
];

const clients = [
  "TechVista",
  "Luxe Fashion",
  "FoodieChain",
  "AutoMax",
  "FinServe Bank",
  "HealthPlus",
  "EduSmart",
  "TravelEase",
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-sm uppercase tracking-[0.3em] mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We take pride in delivering exceptional results that help our clients
            achieve their business goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#2d2d2d] hover:border-[#d4af37]/30 transition-all duration-500 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-[#d4af37]/30 group-hover:text-[#d4af37]/50 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-gray-400 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#d4af37]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#2d2d2d]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4d03f] flex items-center justify-center text-black font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">
            Trusted by Leading Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d] text-gray-500 font-medium hover:border-[#d4af37]/30 hover:text-[#d4af37] transition-all duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
