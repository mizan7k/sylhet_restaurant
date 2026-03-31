import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white/60 py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold text-white tracking-tighter">SYLHET</h3>
          <p className="text-sm leading-relaxed">
            Authentic Indian cuisine crafted with passion and tradition. Experience the true flavors of Sylhet in every bite.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/menu" className="hover:text-amber-500 transition-colors">Our Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-amber-500 transition-colors">Gallery</Link></li>
            <li><Link to="/booking" className="hover:text-amber-500 transition-colors">Reservations</Link></li>
            <li><Link to="/faq" className="hover:text-amber-500 transition-colors">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-amber-500" />
              <span>123 Curry Lane, Foodtown, UK</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-amber-500" />
              <span>01234 567890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-amber-500" />
              <span>hello@sylhet-restaurant.co.uk</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Opening Hours</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between"><span>Mon - Sun</span> <span>17:00 - 23:00</span></li>
            <li className="flex justify-between text-amber-500/80"><span>Tuesday</span> <span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
        <p>© 2026 Sylhet Restaurant and Takeaway. All rights reserved.</p>
        <p>Powered by mizan7k</p>
      </div>
    </footer>
  );
}
