import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function IntroLoader() {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1700); // Start fade out at 1.7s
    
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2200); // Fully remove at 2.2s

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${theme === "dark" ? "bg-[#0F1115]" : "bg-white"}`}
    >
      <div className="relative flex items-center justify-center w-48 h-48">
        {/* Glow behind the logo */}
        <div className={`absolute w-32 h-32 rounded-full blur-2xl transition-all duration-1000 ${
          theme === "dark" ? "bg-blue/25" : "bg-blue/10"
        } animate-pulse`} />
        
        {/* SVG Hexagon and Stylish Monogram S */}
        <svg 
          width="160" 
          height="160" 
          viewBox="0 0 100 100" 
          className="relative z-10"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Faint background hexagon path to guide the eye */}
          <path
            d="M 50 10 L 84.64 30 L 84.64 70 L 50 90 L 15.36 70 L 15.36 30 Z"
            fill="none"
            stroke={theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.06)'}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          
          {/* Animated drawing hexagon loading line */}
          <path
            d="M 50 10 L 84.64 30 L 84.64 70 L 50 90 L 15.36 70 L 15.36 30 Z"
            fill="none"
            stroke="url(#logoGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="240"
            strokeDashoffset="240"
            className="animate-draw-hexagon"
          />

          {/* Stylized monogram S */}
          <text
            x="50"
            y="61"
            textAnchor="middle"
            fontSize="36"
            fontWeight="900"
            fill="url(#logoGrad)"
            filter={theme === 'dark' ? 'url(#logoGlow)' : undefined}
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '-0.02em',
            }}
            className="animate-fadeInScale"
          >
            S
          </text>
        </svg>
      </div>
    </div>
  );
}

function MainApp() {
  return (
    <TooltipProvider>
      <Toaster />
      <IntroLoader />
      <Router />
    </TooltipProvider>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <MainApp />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
