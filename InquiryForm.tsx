@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", serif;
  
  --color-brand-900: #0F172A;
  --color-brand-800: #1E293B;
  --color-accent: #D4AF37;
}

@layer base {
  body {
    @apply bg-slate-50 text-slate-900 antialiased font-sans;
  }
}

.glass-morphism {
  @apply bg-white/80 backdrop-blur-md border border-white/20;
}

.text-balance {
  text-wrap: balance;
}
