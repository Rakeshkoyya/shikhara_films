"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const router = useRouter();
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
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
  }, []);

  const handleEnter = () => {
    router.push("/home");
  };

  const isVisible = (index: number) => visibleLines.includes(index);

  return (
    <div className="splash-container">
      {/* Animated Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>

      {/* Content Container */}
      <div className="splash-content">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-text">
            <span
              className={`logo-shikhara ${isVisible(0) ? "visible" : ""}`}
            >
              SHIKHARA
            </span>
            <span
              className={`logo-films ${isVisible(1) ? "visible" : ""}`}
            >
              FILMS
            </span>
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

      <style jsx>{`
        .splash-container {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(
            135deg,
            #fdfcfb 0%,
            #f5f3ef 25%,
            #faf8f5 50%,
            #f8f6f2 75%,
            #fdfcfb 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          z-index: 9999;
        }

        /* Animated Blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          animation: float 20s ease-in-out infinite;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
          top: -150px;
          left: -100px;
          animation-delay: 0s;
          opacity: 0.25;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #e8d5b7 0%, #d4c4a8 100%);
          bottom: -100px;
          right: -100px;
          animation-delay: -5s;
          opacity: 0.3;
        }

        .blob-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #c9b896 0%, #d4af37 100%);
          top: 50%;
          right: 10%;
          animation-delay: -10s;
          opacity: 0.2;
        }

        .blob-4 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #f4d03f 0%, #e8d5b7 100%);
          bottom: 20%;
          left: 5%;
          animation-delay: -15s;
          opacity: 0.25;
        }

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
          padding: 2rem;
          padding-top: 6rem;
          min-height: 100vh;
          gap: 2.5rem;
        }

        /* Logo */
        .logo-section {
          position: absolute;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15rem;
        }

        .logo-shikhara {
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.5em;
          color: #1a1a1a;
          text-transform: uppercase;
        }

        .logo-films {
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 0.8em;
          color: #d4af37;
          text-transform: uppercase;
          margin-left: 0.8em;
        }

        /* Quote */
        .quote-section {
          max-width: 900px;
        }

        .main-quote {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .quote-line {
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.3;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }

        /* Tagline */
        .tagline-section {
          margin-top: 1rem;
        }

        .tagline {
          font-family: var(--font-dancing), "Dancing Script", "Brush Script MT", cursive;
          font-size: clamp(1.5rem, 3.5vw, 2.5rem);
          font-weight: 500;
          color: #d4af37;
          font-style: italic;
          letter-spacing: 0.02em;
        }

        /* Button */
        .button-section {
          margin-top: 2rem;
        }

        .enter-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          background: transparent;
          border: 2px solid #1a1a1a;
          color: #1a1a1a;
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .enter-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: #1a1a1a;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }

        .enter-button:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }

        .enter-button:hover {
          color: #fdfcfb;
          border-color: #1a1a1a;
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .enter-button:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* Transition-based animations - elements start hidden */
        .logo-shikhara,
        .logo-films {
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .quote-line,
        .tagline {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .enter-button {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Visible state */
        .logo-shikhara.visible,
        .logo-films.visible,
        .quote-line.visible,
        .tagline.visible,
        .enter-button.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .splash-content {
            gap: 2rem;
            padding: 1.5rem;
          }

          .logo-shikhara {
            font-size: 1.2rem;
            letter-spacing: 0.4em;
          }

          .logo-films {
            font-size: 0.7rem;
            letter-spacing: 0.6em;
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
            gap: 1.5rem;
          }

          .logo-shikhara {
            font-size: 1rem;
            letter-spacing: 0.3em;
          }

          .logo-films {
            font-size: 0.6rem;
            letter-spacing: 0.5em;
          }
        }
      `}</style>
    </div>
  );
}
