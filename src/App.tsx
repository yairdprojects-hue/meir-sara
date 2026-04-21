import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import UserWayWidget from './components/UserWayWidget';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));

function RouteFallback() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center text-stone-500"
      role="status"
      aria-live="polite"
    >
      טוען…
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[200] focus:inline-block focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-base focus:font-bold focus:text-stone-900 focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
    >
      דלג לתוכן הראשי
    </a>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen min-w-0 max-w-full flex-col overflow-x-clip bg-orange-50">
        <ScrollToTop />
        <SkipToMain />
        <Navbar />
        <main
          id="main-content"
          tabIndex={-1}
          className="min-w-0 max-w-full flex-grow overflow-x-clip outline-none focus:outline-none"
        >
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <UserWayWidget />
        <AccessibilityToolbar />
      </div>
    </Router>
  );
}
