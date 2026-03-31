import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Get in <span className="text-amber-500 italic">Touch</span>
          </motion.h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Have a question or want to order? Reach out to us using the details below or send us a message.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Our Location</h4>
                  <p className="text-sm text-white/50">123 Curry Lane, Foodtown, UK</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Phone Number</h4>
                  <p className="text-sm text-white/50">01234 567890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email Address</h4>
                  <p className="text-sm text-white/50">hello@sylhet-restaurant.co.uk</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Opening Hours</h4>
                  <p className="text-sm text-white/50">Mon - Sun: 17:00 - 23:00</p>
                  <p className="text-xs text-amber-500/60 mt-1">Closed on Tuesdays</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-zinc-900 rounded-3xl overflow-hidden border border-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.819243647692!2d-0.12775829999999997!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c3216931dd%3A0x7030f51a4744148!2sTrafalgar%20Square!5e0!3m2!1sen!2suk!4v1679933000000!5m2!1sen!2suk" 
                className="w-full h-full grayscale invert opacity-50"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-3xl space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Your message..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-white text-black py-5 rounded-xl font-bold text-lg transition-all hover:bg-amber-500">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
