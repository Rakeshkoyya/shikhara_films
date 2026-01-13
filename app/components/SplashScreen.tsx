"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  // First, mark as mounted after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Staggered reveal - each line appears after a delay
    const delays = [200, 500, 900, 1300, 1700, 2100];
    const timers: NodeJS.Timeout[] = [];

    delays.forEach((delay, index) => {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, delay);
      timers.push(timer);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, [mounted]);

  const handleEnter = () => {
    router.push("/home");
  };

  const isVisible = (index: number) => visibleLines.includes(index);

  return (
    <div className="splash-container">
      {/* Animated Background Blobs */}
      {/* <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div> */}

      {/* Content Container - only render when mounted */}
      {mounted && (
        <div className="splash-content">
          {/* Logo Section */}
          <div className="logo-section">
            <div className={`logo-image ${isVisible(0) ? "visible" : ""}`}>
              <Image 
                src="/logo.png" 
                alt="Shikhara Films" 
                width={180} 
                height={90}
                priority
              />
            </div>
          </div>

        {/* Main Quote Section */} 
        <div className="quote-section">
          <h1 className="main-quote">
            <span
              className={`quote-line ${isVisible(2) ? "visible" : ""}`}
            >
              A good product survives.
            </span>
            <span
              className={`quote-line ${isVisible(3) ? "visible" : ""}`}
            >
              Great advertising makes it rule.
            </span>
          </h1>
        </div>

        {/* Tagline Section */}
        <div className="tagline-section">
          <p
            className={`tagline ${isVisible(4) ? "visible" : ""}`}
          >
            Be wise, Advertise.
          </p>
        </div>

        {/* Enter Button */}
        <div className="button-section">
          <button
            onClick={handleEnter}
            className={`enter-button ${isVisible(5) ? "visible" : ""}`}
          >
            <span>Enter Website</span>
            <svg
              className="arrow-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        </div>
      )}

      <style jsx>{`
        @font-face {
          font-family: 'Austhind';
          src: url('/Austhind.woff2') format('woff2'),
               url('/Austhind.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .splash-container {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background-image: url('/splash_bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          z-index: 9999;
          overflow-x: hidden;
        }

        /* Animated Blobs */
        // .blob {
        //   position: absolute;
        //   border-radius: 50%;
        //   filter: blur(80px);
        //   opacity: 0.5;
        //   animation: float 20s ease-in-out infinite;
        // }

        // .blob-1 {
        //   width: 500px;
        //   height: 500px;
        //   background: linear-gradient(135deg, #E07B39 0%, #F4A261 100%);
        //   top: -150px;
        //   left: -100px;
        //   animation-delay: 0s;
        //   opacity: 0.2;
        // }

        // .blob-2 {
        //   width: 400px;
        //   height: 400px;
        //   background: linear-gradient(135deg, #E6D5C3 0%, #D4956A 100%);
        //   bottom: -100px;
        //   right: -100px;
        //   animation-delay: -5s;
        //   opacity: 0.25;
        // }

        // .blob-3 {
        //   width: 350px;
        //   height: 350px;
        //   background: linear-gradient(135deg, #C17A56 0%, #E07B39 100%);
        //   top: 50%;
        //   right: 10%;
        //   animation-delay: -10s;
        //   opacity: 0.15;
        // }

        // .blob-4 {
        //   width: 300px;
        //   height: 300px;
        //   background: linear-gradient(135deg, #F4A261 0%, #E6D5C3 100%);
        //   bottom: 20%;
        //   left: 5%;
        //   animation-delay: -15s;
        //   opacity: 0.2;
        // }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.05);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.95);
          }
          75% {
            transform: translate(-30px, -20px) scale(1.02);
          }
        }

        /* Content */
        .splash-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.5rem;
          padding-top: 6rem;
          min-height: 100vh;
          min-height: 100dvh;
          gap: 2rem;
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          overflow-x: hidden;
        }

        /* Logo */
        .logo-section {
          position: absolute;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
        }

        .logo-image {
          opacity: 0;
          visibility: hidden;
          transform: translateY(15px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      visibility 0s linear 0.8s;
        }

        .logo-image.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      visibility 0s linear 0s;
        }

        /* Quote */
        .quote-section {
          max-width: 900px;
          width: 100%;
          padding: 0 0.5rem;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
        }

        .main-quote {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          width: 100%;
        }

        .quote-line {
          font-family: var(--font-amatic), "Amatic SC", Georgia, serif;
          font-size: clamp(2rem, 5vw, 5.5rem);
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: -0.02em;
          display: block;
          width: 100%;
          text-align: center;
        }

        /* Tagline */
        .tagline-section {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .tagline {
          font-family: 'Austhind', var(--font-dancing), "Dancing Script", cursive;
          font-size: clamp(1.5rem, 3.5vw, 5.5rem);
          font-weight: bold;
          color: #D71B5B;
          font-style: normal;
          letter-spacing: 0.02em;
          text-align: center;
        }

        /* Button */
        .button-section {
          margin-top: 2rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .enter-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          background: transparent;
          border: 2px solid #5C4033;
          color:  #D71B5B;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border-radius: 50px;
        }

        .enter-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #712B87 0%,  #D71B5B 100%);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
          border-radius: 50px;
        }

        .enter-button:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }

        .enter-button:hover {
          color: white;
          border-color: #D71B5B;
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .enter-button:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* Transition-based animations - elements start hidden */
        .quote-line,
        .tagline {
          opacity: 0;
          visibility: hidden;
          transform: translateY(25px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      visibility 0s linear 0.8s;
        }

        .enter-button {
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      visibility 0s linear 0.8s,
                      color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Visible state */
        .quote-line.visible,
        .tagline.visible,
        .enter-button.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      visibility 0s linear 0s,
                      color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .splash-content {
            gap: 1.5rem;
            padding: 1rem;
            padding-top: 5rem;
            padding-bottom: 2rem;
            justify-content: center;
            align-items: center;
          }

          .logo-section {
            top: 1rem;
          }

          .logo-image :global(img) {
            width: 140px;
            height: auto;
          }

          .quote-section {
            padding: 0 1rem;
            width: 100%;
          }

          .tagline-section {
            margin-top: 0.5rem;
            width: 100%;
          }

          .button-section {
            margin-top: 1rem;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .blob {
            filter: blur(60px);
          }

          .blob-1 {
            width: 300px;
            height: 300px;
          }

          .blob-2 {
            width: 250px;
            height: 250px;
          }

          .blob-3 {
            width: 200px;
            height: 200px;
          }

          .blob-4 {
            width: 180px;
            height: 180px;
          }

          .enter-button {
            padding: 0.875rem 2rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .splash-content {
            gap: 1rem;
            padding: 0.75rem;
            padding-top: 4.5rem;
            padding-bottom: 1.5rem;
            align-items: center;
          }

          .logo-section {
            top: 0.75rem;
          }

          .logo-image :global(img) {
            width: 110px;
            height: auto;
          }

          .quote-section {
            padding: 0 0.5rem;
          }

          .quote-line {
            font-size: clamp(1.6rem, 6vw, 2.5rem);
          }

          .tagline {
            font-size: clamp(1.3rem, 5vw, 2rem);
          }

          .tagline-section {
            margin-top: 0.25rem;
          }

          .button-section {
            margin-top: 0.75rem;
          }

          .enter-button {
            padding: 0.75rem 1.75rem;
            font-size: 0.85rem;
            gap: 0.5rem;
          }
        }

        @media (max-height: 600px) {
          .splash-content {
            padding-top: 4rem;
            gap: 0.75rem;
          }

          .tagline-section {
            margin-top: 0.25rem;
          }

          .button-section {
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
