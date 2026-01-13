"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you shortly.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-linear-to-b from-[#FFF8F0] to-[#FFFBF5] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#E07B39]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#F4A261]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#E07B39] text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4 font-medium">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5C4033] mb-4 md:mb-6">
            Let&apos;s Create <span className="gradient-text">Together</span>
          </h2>
          <p className="text-[#8B7355] max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            Ready to bring your vision to life? Contact us today to discuss your
            project and discover how we can help elevate your brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#5C4033] mb-4 md:mb-6">
                Contact Information
              </h3>
              <p className="text-[#8B7355] leading-relaxed mb-6 md:mb-8 text-sm sm:text-base">
                We&apos;re always excited to hear about new projects. Reach out to
                us through any of the channels below, and our team will get back
                to you within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-white border border-[#E6D5C3] hover:border-[#E07B39]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-linear-to-br from-[#E07B39] to-[#F4A261] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#5C4033] font-semibold mb-1 text-sm md:text-base">Office Address</h4>
                  <p className="text-[#8B7355] text-xs md:text-sm">
                    1-8-505, Prakash Nagar,
                    <br />
                    Begumpet, Hyderabad,
                    <br />
                    Telangana, 500016
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-white border border-[#E6D5C3] hover:border-[#E07B39]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-linear-to-br from-[#E07B39] to-[#F4A261] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#5C4033] font-semibold mb-1 text-sm md:text-base">Email Us</h4>
                  <a 
                    href="mailto:shikharafilms@gmail.com"
                    className="text-[#8B7355] text-xs md:text-sm hover:text-[#E07B39] transition-colors"
                  >
                    shikharafilms@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-white border border-[#E6D5C3] hover:border-[#E07B39]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-linear-to-br from-[#E07B39] to-[#F4A261] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#5C4033] font-semibold mb-1 text-sm md:text-base">Call Us</h4>
                  <a 
                    href="tel:+919059089982"
                    className="text-[#8B7355] text-xs md:text-sm hover:text-[#E07B39] transition-colors"
                  >
                    90590 89982
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-[#5C4033] font-semibold mb-3 md:mb-4 text-sm md:text-base">Follow Us</h4>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="https://www.instagram.com/shikhara_films"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white border border-[#E6D5C3] flex items-center justify-center text-[#8B7355] hover:bg-linear-to-br hover:from-[#E07B39] hover:to-[#F4A261] hover:text-white hover:border-transparent transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@shikharafilms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white border border-[#E6D5C3] flex items-center justify-center text-[#8B7355] hover:bg-linear-to-br hover:from-[#E07B39] hover:to-[#F4A261] hover:text-white hover:border-transparent transition-all duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 border border-[#E6D5C3] shadow-xl shadow-[#E07B39]/5">
            <h3 className="text-xl md:text-2xl font-bold text-[#5C4033] mb-4 md:mb-6">
              Start Your Project
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#5C4033] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#FFF8F0] border border-[#E6D5C3] rounded-xl text-[#5C4033] placeholder-[#8B7355]/50 focus:outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#5C4033] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#FFF8F0] border border-[#E6D5C3] rounded-xl text-[#5C4033] placeholder-[#8B7355]/50 focus:outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#5C4033] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FFF8F0] border border-[#E6D5C3] rounded-xl text-[#5C4033] placeholder-[#8B7355]/50 focus:outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/20 transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[#5C4033] mb-2"
                  >
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#FFF8F0] border border-[#E6D5C3] rounded-xl text-[#5C4033] focus:outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="tvc">Television Commercial (TVC)</option>
                    <option value="social">Social Media & Digital Ads</option>
                    <option value="influencer">Influencer Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#5C4033] mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#FFF8F0] border border-[#E6D5C3] rounded-xl text-[#5C4033] placeholder-[#8B7355]/50 focus:outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, target audience, and timeline..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-linear-to-r from-[#E07B39] to-[#F4A261] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#E07B39]/30 transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-wider"
              >
                Submit Inquiry
              </button>

              <p className="text-center text-[#8B7355] text-sm">
                By submitting, you agree to our{" "}
                <a href="#" className="text-[#E07B39] hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
