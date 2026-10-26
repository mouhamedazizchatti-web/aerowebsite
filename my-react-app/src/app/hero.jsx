import { useState, useEffect } from 'react';

const headlines = [
  "Welcome to Aerotronix Club",
  "Innovate. Build. Fly.",
  "Join the Future of Aviation Tech",
];

const subtexts = [
  "ENISo's Aeronautics Club",
  "Projects, Formations, and Events",
  "Where Passion Meets Engineering",
];

function Hero({ darkMode }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-svg-wrapper">
        <svg viewBox="0 0 200 200" className="hero-svg">
          {/* The circle ring, like your logo */}
          <circle
            cx="100"
            cy="100"
            r="85"
            pathLength="100"
            className="draw-shape draw-circle"
          />
          {/* A simplified plane shape crossing the circle */}
          <path
            d="M100 40 L108 90 L150 100 L108 110 L100 160 L92 110 L50 100 L92 90 Z"
            pathLength="100"
            className="draw-shape draw-plane"
          />
        </svg>
      </div>

      <div className="hero-text">
        <h1>{headlines[index]}</h1>
        <p>{subtexts[index]}</p>
      </div>
    </div>
  );
}

export default Hero;