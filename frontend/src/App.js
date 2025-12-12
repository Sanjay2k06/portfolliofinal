import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CursorProvider } from './context/CursorContext';
import { initSmoothScroll, destroySmoothScroll } from './lib/smoothScroll';
import SplashScreen from './components/animations/SplashScreen';
import ScrollProgress from './components/animations/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Toaster } from './components/ui/toaster';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Initialize smooth scroll after splash screen
    if (!showSplash) {
      const lenis = initSmoothScroll();
      return () => {
        destroySmoothScroll();
      };
    }
  }, [showSplash]);

  return (
    <CursorProvider>
      <div className="App">
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        {!showSplash && (
          <BrowserRouter>
            <ScrollProgress />
            <Navbar />
            <AnimatedRoutes />
            <Footer />
            <Toaster />
          </BrowserRouter>
        )}
      </div>
    </CursorProvider>
  );
}

export default App;
