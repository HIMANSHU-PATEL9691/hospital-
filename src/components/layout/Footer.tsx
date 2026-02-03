import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Departments', path: '/departments' },
  { name: 'Our Doctors', path: '/doctors' },
  { name: 'Contact Us', path: '/contact' },
];

const services = [
  { name: 'Emergency Care', path: '/services' },
  { name: 'Cardiology', path: '/departments' },
  { name: 'Neurology', path: '/departments' },
  { name: 'Orthopedics', path: '/departments' },
  { name: 'Pediatrics', path: '/departments' },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <FadeIn delay={0}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
                <div>
                  <span className="text-2xl font-serif font-bold">MedCare</span>
                  <p className="text-xs text-background/60">Hospital & Medical Center</p>
                </div>
              </div>
              <p className="text-background/70 leading-relaxed">
                Providing world-class healthcare services with compassion and excellence since 1990. Your health is our priority.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-all hover:bg-primary hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group"
                    >
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Services */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group"
                    >
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.3}>
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-background/70">123 Medical Center Drive, Healthcare City, HC 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-background/70 hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:info@medcare.com" className="text-background/70 hover:text-primary transition-colors">
                    info@medcare.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="text-background/70">
                    <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                    <p>Emergency: 24/7</p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} MedCare Hospital. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/faq" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/faq" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="text-background/60 hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
