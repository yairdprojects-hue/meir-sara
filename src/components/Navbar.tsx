import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, Info, Image as ImageIcon, MessageSquare, Phone } from 'lucide-react';
import logoMeir from '../assets/images/logo-meir.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'דף בית', path: '/', icon: <Home size={18} /> },
    { name: 'עלינו', path: '/about', icon: <Info size={18} /> },
    { name: 'גלריה', path: '/gallery', icon: <ImageIcon size={18} /> },
    { name: 'המלצות', path: '/testimonials', icon: <MessageSquare size={18} /> },
    { name: 'צור קשר', path: '/contact', icon: <Phone size={18} /> },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 border-b-2 border-amber-300/80 bg-orange-50/98 shadow-[0_4px_24px_-4px_rgba(180,83,9,0.2)] backdrop-blur-xl transition-[box-shadow] duration-300 ${
        scrolled ? 'shadow-[0_8px_32px_-6px_rgba(154,52,18,0.22)]' : ''
      }`}
    >
      <div className="pt-[env(safe-area-inset-top,0px)]">
        <div className={scrolled ? 'py-2' : 'py-3.5'}>
          <div
            className="mx-auto w-full min-w-0 max-w-full pl-[max(1.5rem,env(safe-area-inset-left,0px))] pr-[max(1.5rem,env(safe-area-inset-right,0px))] sm:pl-[max(1.75rem,env(safe-area-inset-left,0px))] sm:pr-[max(1.75rem,env(safe-area-inset-right,0px))] lg:pl-[max(2rem,env(safe-area-inset-left,0px))] lg:pr-[max(2rem,env(safe-area-inset-right,0px))]"
          >
            <div className="flex min-w-0 items-center justify-between gap-3 sm:gap-4">
              <div className="flex min-w-0 shrink-0 items-center">
                <NavLink
                  to="/"
                  className="group flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-[3px] ring-amber-500 shadow-lg shadow-amber-900/30 transition duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-amber-900/35 group-hover:ring-amber-600 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem]">
                    <img
                      src={logoMeir}
                      alt="מאיר שרה"
                      className="h-full w-full object-cover"
                    />
                  </span>
                </NavLink>
              </div>

              {/* Desktop Menu */}
              <div className="hidden items-center gap-10 md:flex lg:gap-12">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 text-base font-semibold tracking-wide transition-colors hover:text-amber-700 ${
                        isActive
                          ? 'border-b-[3px] border-amber-600 pb-0.5 text-amber-900'
                          : 'text-stone-800'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="flex shrink-0 items-center md:hidden">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="touch-manipulation rounded-xl border-2 border-amber-400/60 bg-amber-100/50 p-2 text-stone-800 shadow-sm transition-colors hover:border-amber-500 hover:bg-amber-200/60 hover:text-amber-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  aria-expanded={isOpen}
                  aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
                >
                  {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-b-2 border-amber-200/70 bg-orange-100/60"
          >
            <div
              className="flex flex-col items-start space-y-2 pt-2 pb-6 pl-[max(1.5rem,env(safe-area-inset-left,0px))] pr-[max(1.5rem,env(safe-area-inset-right,0px))]"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex w-full items-center gap-3 rounded-xl px-3 py-3.5 text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-amber-200/90 text-amber-950 shadow-inner'
                        : 'text-stone-800 hover:bg-orange-200/50'
                    }`
                  }
                >
                  <span className="text-amber-600">{item.icon}</span>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
