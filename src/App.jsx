import { useCallback, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Bookshelf from "./pages/Bookshelf";
import Interests from "./pages/Interests";
import Experience from "./pages/Experience";

function EngineeringBackdrop() {
  return (
    <div className="engineering-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="tech-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M80 0H0V80" className="grid-line" />
            <circle cx="0" cy="0" r="1.6" className="grid-dot" />
          </pattern>
          <pattern id="star-field" width="190" height="150" patternUnits="userSpaceOnUse">
            <circle cx="22" cy="34" r="1" className="star star-small" />
            <circle cx="116" cy="21" r="1.4" className="star" />
            <circle cx="169" cy="88" r=".8" className="star star-small" />
            <circle cx="61" cy="121" r="1.2" className="star" />
            <path d="M142 128h6M145 125v6" className="star-cross" />
          </pattern>
        </defs>

        <rect width="1600" height="1000" fill="url(#tech-grid)" />
        <rect width="1600" height="1000" fill="url(#star-field)" />

        <g className="circuit-lines">
          <path d="M0 220h185l42 42h178l55-55h156" />
          <path d="M1600 155h-216l-48 48h-156l-72 72H932" />
          <path d="M0 795h262l58-58h207l48 48h190" />
          <path d="M1600 734h-176l-66-66h-218l-43-43H930" />
          <path d="M260 0v112l52 52v116M1320 1000V872l-58-58V690" />
        </g>

        <g className="circuit-nodes">
          <circle cx="185" cy="220" r="4" />
          <circle cx="405" cy="262" r="4" />
          <circle cx="616" cy="207" r="4" />
          <circle cx="1384" cy="155" r="4" />
          <circle cx="1180" cy="203" r="4" />
          <circle cx="932" cy="275" r="4" />
          <circle cx="262" cy="795" r="4" />
          <circle cx="527" cy="737" r="4" />
          <circle cx="765" cy="785" r="4" />
          <circle cx="1424" cy="734" r="4" />
          <circle cx="1140" cy="668" r="4" />
          <circle cx="930" cy="625" r="4" />
        </g>

        <g className="orbit-lines">
          <circle cx="800" cy="500" r="420" />
          <circle cx="800" cy="500" r="300" />
          <path d="M482 226a420 420 0 0 1 584-48" />
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("light"),
  );
  const toggleTheme = useCallback(() => {
    setDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", next ? "#1a1a1a" : "#ffffff");
      return next;
    });
  }, []);

  return (
    <>
      <EngineeringBackdrop />
      <Routes>
        <Route path="/" element={<Home dark={dark} onToggle={toggleTheme} />} />
        <Route
          path="/posts"
          element={<Posts dark={dark} onToggle={toggleTheme} />}
        />
        <Route
          path="/bookshelf"
          element={<Bookshelf dark={dark} onToggle={toggleTheme} />}
        />
        <Route
          path="/interests"
          element={<Interests dark={dark} onToggle={toggleTheme} />}
        />
        <Route
          path="/experience"
          element={<Experience dark={dark} onToggle={toggleTheme} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
