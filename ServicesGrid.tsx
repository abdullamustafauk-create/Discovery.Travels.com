import { useState, useEffect } from 'react';
import { Plane, Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Shared';
import { BUSINESS_DATA } from '../../types';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-brand-900 text-accent p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Plane size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tight leading-none ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
              Discovery
            </span>
            <span className={`text-xs font-medium tracking-[0.2em] uppercase ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
              Travels
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? 'primary' : 'secondary'} size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Plan A Trip
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-brand-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-brand-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <Phone size={18} className="text-accent" />
                  <span className="text-sm font-medium">{BUSINESS_DATA.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail size={18} className="text-accent" />
                  <span className="text-sm font-medium">{BUSINESS_DATA.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
