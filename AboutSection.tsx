import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Button, SectionTitle } from '../ui/Shared';
import { CheckCircle, Send, Loader2, MapPin, ExternalLink } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please provide more details (min 10 chars)'),
});

type FormData = z.infer<typeof formSchema>;

export default function InquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Prepare the email content
    const subject = encodeURIComponent(`Inquiry: ${data.service} - ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Service: ${data.service}\n\n` +
      `Details:\n${data.message}`
    );
    
    // Open default mail client
    window.location.href = `mailto:info@discover.qa?subject=${subject}&body=${body}`;

    // Small delay to simulate processing before showing success state
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">Request Received</h2>
            <p className="text-slate-600 mb-8 max-w-md">
              Thank you for choosing Discovery Travels. One of our specialist travel consultants will contact you shortly to discuss your requirements.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>Send Another Inquiry</Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle subtitle="Get in Touch">
              Ready to Start Your Journey?
            </SectionTitle>
            <p className="text-slate-600 mb-8 text-lg">
              Fill out the form below to share your travel plans with us. Our team of experts will craft a personalized proposal that meets your exact needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">Personalized Consultations</h4>
                  <p className="text-slate-500 text-sm">Every traveler is unique, and so are our plans.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">24/7 Support</h4>
                  <p className="text-slate-500 text-sm">We are with you every step of the way.</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-900">Our Location</h4>
                    <p className="text-slate-500 text-sm">Othman Bin Affan St, Doha, Qatar</p>
                  </div>
                </div>
                
                <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 bg-slate-100">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=Discovery%20Travels,%20Othman%20Bin%20Affan%20St,%20Doha&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                  <input
                    {...register('name')}
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input
                    {...register('email')}
                    placeholder="john@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Service Required</label>
                <select
                  {...register('service')}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="accommodation">Global Accommodation</option>
                  <option value="flights">Flight Bookings</option>
                  <option value="transfers">Airport Transfers</option>
                  <option value="packages">Specialized Packages</option>
                  <option value="essentials">Travel Essentials</option>
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Travel Details</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Tell us about your dream destination, dates, and any special requests..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors resize-none"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <Button 
                type="submit" 
                className="w-full py-4 text-brand-900 bg-accent hover:bg-accent/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin mr-2" size={20} />
                ) : (
                  <Send className="mr-2" size={20} />
                )}
                {isSubmitting ? 'Processing...' : 'Send Inquiry Request'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
