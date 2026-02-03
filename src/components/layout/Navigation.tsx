import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Departments', path: '/departments' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Blog', path: '/blog' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const location = useLocation();
  const menuRef = useRef<HTMLDivElement | null>(null);

  /* ================= Scroll Detection ================= */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* ================= Close Menu on Route Change ================= */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* ================= Lock Body Scroll ================= */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  /* ================= Close on Outside Click ================= */
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:opacity-80">
              <Phone className="h-4 w-4" />
              +1 (234) 567-890
            </a>
            <a href="mailto:info@medcare.com" className="flex items-center gap-2 hover:opacity-80">
              <Mail className="h-4 w-4" />
              info@medcare.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Mon – Sat: 8:00 AM – 8:00 PM | Emergency 24/7
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <motion.header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg' : 'bg-white/95 backdrop-blur'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">
                M
              </div>
              <div>
                <span className="text-2xl font-serif font-bold">MedCare</span>
                <p className="text-xs text-muted-foreground">
                  Hospital & Medical Center
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button className="btn-hero text-sm px-6 py-2">
                Book Appointment
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setIsOpen(false)}
              />

              {/* Drawer */}
              <motion.div
                ref={menuRef}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.25 }}
                className="relative bg-white shadow-xl"
              >
                <div className="container mx-auto px-4 py-6">
                  <nav className="flex flex-col gap-3">
                    {navItems.map((item, i) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-5 py-4 rounded-xl text-base font-medium transition ${
                            location.pathname === item.path
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-primary/10'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}

                    <Button
                      onClick={() => setIsOpen(false)}
                      className="btn-hero mt-4 w-full"
                    >
                      Book Appointment
                    </Button>
                  </nav>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navigation;
