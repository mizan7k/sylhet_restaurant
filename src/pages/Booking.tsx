import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Send } from 'lucide-react';

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Book a <span className="text-amber-500 italic">Table</span>
          </motion.h1>
          <p className="text-white/50">
            Join us for an unforgettable dining experience. Please fill out the form below.
          </p>
        </header>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900/50 border border-amber-500/30 p-12 rounded-3xl text-center space-y-6"
          >
            <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto">
              <Send className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white">Booking Request Sent!</h2>
            <p className="text-white/60">
              Thank you for choosing Sylhet. We will contact you shortly to confirm your reservation.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-amber-500 font-bold hover:underline"
            >
              Make another booking
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-3xl space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="01234 567890"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <select className="w-full bg-black/50 border border-white/10 rounded-xl pl-14 pr-6 py-4 text-white focus:border-amber-500 outline-none transition-colors appearance-none">
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input 
                    required
                    type="date" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-14 pr-6 py-4 text-white focus:border-amber-500 outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Time</label>
                <div className="relative">
                  <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input 
                    required
                    type="time" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-14 pr-6 py-4 text-white focus:border-amber-500 outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Special Requests</label>
              <textarea 
                rows={4}
                placeholder="Any allergies or special occasions?"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-amber-600/10"
            >
              CONFIRM BOOKING
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
