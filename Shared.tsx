import { motion } from 'motion/react';
import { ArrowRight, Globe, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from '../ui/Shared';
import { BUSINESS_DATA } from '../../types';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-900">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1615460541115-83e950797a8e?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Doha Skyline"
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-900/60 via-transparent to-brand-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">
              Based in Doha, Qatar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-8 text-balance"
          >
            Discovery Travels: <span className="italic">Excellence</span> In Every Journey.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed"
          >
            Your comprehensive partner for global travel arrangements. From luxury hotels to seamless transfers, we manage every detail of your journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="group" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brand-900" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Our Story
            </Button>
          </motion.div>
        </div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
        >
          <div className="flex items-start gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-accent">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Global Network</h3>
              <p className="text-slate-400 text-sm">250,000+ Hotels in 10,000 Destinations</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-accent">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Verified Quality</h3>
              <p className="text-slate-400 text-sm">Elite partnerships with top airlines & chains</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-accent">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Local Expertise</h3>
              <p className="text-slate-400 text-sm">Centrally located in Doha for your convenience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
