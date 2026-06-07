import './BackgroundSVG.css';

export default function BackgroundSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1080 1920"
      className={`${className}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <g
          id="wireframe-dashboard"
          fill="none"
          stroke="var(--wireframe-stroke)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="360" height="240" className="wireframe-line" />
          <path className="wireframe-line" d="M0 30h360" />
          <circle cx="15" cy="15" r="3" className="wireframe-line" />
          <circle cx="27" cy="15" r="3" className="wireframe-line" />
          <circle cx="39" cy="15" r="3" className="wireframe-line" />
          <rect x="15" y="45" width="70" height="180" rx="4" className="wireframe-line" />
          <path className="wireframe-line" d="M25 70h50M25 95h40m-40 25h45" />
          <rect x="100" y="45" width="115" height="80" rx="4" className="wireframe-line" />
          <rect x="230" y="45" width="115" height="80" rx="4" className="wireframe-line" />
          <rect x="100" y="140" width="245" height="85" rx="4" className="wireframe-line" />
          <path className="wireframe-line" d="M115 165h215m-215 25h175" />
        </g>
        <g
          id="wireframe-grid"
          fill="none"
          stroke="var(--wireframe-stroke)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="360" height="240" className="wireframe-line" />
          <path className="wireframe-line" d="M0 30h360" />
          <circle cx="15" cy="15" r="3" className="wireframe-line" />
          <circle cx="27" cy="15" r="3" className="wireframe-line" />
          <circle cx="39" cy="15" r="3" className="wireframe-line" />
          <rect x="15" y="45" width="330" height="65" rx="4" className="wireframe-line" />
          <rect x="15" y="125" width="96" height="100" rx="4" className="wireframe-line" />
          <path className="wireframe-line" d="m25 200 h75 m-75 12 h55" />
          <rect x="132" y="125" width="96" height="100" rx="4" className="wireframe-line" />
          <path className="wireframe-line" d="m142 200 h75 m-75 12 h55" />
          <rect x="249" y="125" width="96" height="100" rx="4" className="wireframe-line" />
          <path className="wireframe-line" d="m259 200 h75 m-75 12 h55" />
        </g>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'var(--bg-stop-0)' }} />
          <stop offset="50%" style={{ stopColor: 'var(--bg-stop-50)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--bg-stop-100)' }} />
        </linearGradient>
      </defs>
      <path fill="url(#bg-gradient)" d="M0 0h1080v1920H0z" />
      <g transform="rotate(-30 366.494 498.196)">
        <use className="wireframe-line" href="#wireframe-dashboard" x="100" />
        <use className="wireframe-line" href="#wireframe-grid" x="550" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="-100" y="300" />
        <use className="wireframe-line" href="#wireframe-grid" x="350" y="300" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="800" y="300" />
        <use className="wireframe-line" href="#wireframe-grid" x="1250" y="300" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="-350" y="600" />
        <use className="wireframe-line" href="#wireframe-grid" x="100" y="600" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="550" y="600" />
        <use className="wireframe-line" href="#wireframe-grid" x="1000" y="600" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="-550" y="900" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="-100" y="900" />
        <use className="wireframe-line" href="#wireframe-grid" x="350" y="900" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="800" y="900" />
        <use className="wireframe-line" href="#wireframe-grid" x="1250" y="900" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="-800" y="1240" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="-350" y="1240" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="100" y="1240" />
        <use className="wireframe-line" href="#wireframe-grid" x="550" y="1240" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="1000" y="1240" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="-550" y="1560" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="-100" y="1560" />
        <use className="wireframe-line" href="#wireframe-dashboard" x="350" y="1560" />
        <use className="wireframe-line" href="#wireframe-grid" x="-350" y="1880" />
        <use className="wireframe-line" href="#wireframe-grid" x="100" y="1880" />
      </g>
    </svg>
  );
}
