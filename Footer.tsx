import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionTitle } from '../ui/Shared';
import { CheckCircle2 } from 'lucide-react';

const travelImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070", // Luxury Resort
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070", // Grand Hotel
  "https://images.unsplash.com/photo-1512100356956-c1b472460411?auto=format&fit=crop&q=80&w=2070", // Coastline
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070", // Island
];

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % travelImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const highlights = [
    "One-stop shop for all travel details",
    "Extensive global network of partners",
    "Competitive rates and high-quality service",
    "Expert visa and insurance assistance",
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 bg-slate-200">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={travelImages[currentImageIndex]} 
                  alt="Luxury Travel Experience" 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
            {/* Design accents */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent rounded-full -z-0 opacity-20 blur-2xl" />
            <div className="absolute -top-8 -left-8 w-64 h-64 border-2 border-accent/20 rounded-[3rem] -z-0" />
            
            <div className="absolute top-12 -right-12 bg-white p-8 rounded-3xl shadow-xl z-20 max-w-[200px] hidden md:block">
              <div className="text-4xl font-serif text-brand-900 font-bold mb-1">10+</div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Years of Excellence</p>
            </div>
          </motion.div>

          <div className="flex flex-col">
            <SectionTitle subtitle="About Discovery Travels">
              Your Gateway to the World from Qatar
            </SectionTitle>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Discovery Travels is your one-stop shop for comprehensive travel arrangements in Qatar. We provide a wide range of travel-related products and services under one roof, making it easy for travelers to manage every detail of their journey in one place.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-10">
              Whether you're looking for global accommodations, flight bookings, or specialized packages like Disney specials and cruises, our committed team ensures competitive rates and premium service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-accent/10 p-1 rounded-full text-accent">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-brand-900/5 p-6 rounded-2xl border-l-4 border-accent">
              <p className="italic text-brand-900 font-medium">
                "We are committed to providing our clients with competitive rates and high-quality service for all their travel needs."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
