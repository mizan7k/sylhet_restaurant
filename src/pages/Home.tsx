import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070"
            alt="Restaurant Interior"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
              Authentic Indian Cuisine
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter leading-none mb-8">
              SYLHET <br />
              <span className="text-amber-500 italic">Restaurant</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the vibrant spices and rich traditions of Sylhet. A culinary journey through the heart of India, right in your neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/menu"
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
              >
                VIEW MENU <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/booking"
                className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold transition-all"
              >
                BOOK A TABLE
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Info */}
        <div className="absolute bottom-10 left-0 right-0 hidden md:flex justify-center gap-12 text-xs uppercase tracking-[0.2em] text-white/50">
          <div className="flex items-center gap-2"><Clock size={14} className="text-amber-500" /> 17:00 - 23:00</div>
          <div className="flex items-center gap-2"><MapPin size={14} className="text-amber-500" /> Foodtown, UK</div>
          <div className="flex items-center gap-2"><Star size={14} className="text-amber-500" /> 4.9 Rating</div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=1000"
              alt="Chef cooking"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-amber-600 p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-serif font-bold">15+</p>
              <p className="text-xs uppercase tracking-widest font-bold opacity-80">Years of Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              A Legacy of <span className="text-amber-500">Flavor</span> & Tradition
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              At Sylhet, we believe that food is more than just sustenance—it's a celebration of culture. Our chefs use time-honored techniques and the freshest ingredients to bring you authentic dishes that tell a story.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-amber-500 font-bold mb-2">Authentic Spices</h4>
                <p className="text-sm text-white/50">Hand-picked and ground in-house for maximum aroma.</p>
              </div>
              <div>
                <h4 className="text-amber-500 font-bold mb-2">Tandoor Oven</h4>
                <p className="text-sm text-white/50">Traditional clay oven for that perfect smoky flavor.</p>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-amber-500 font-bold hover:gap-4 transition-all">
              LEARN MORE ABOUT US <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Chef's Recommendations</h2>
          <p className="text-white/50 max-w-xl mx-auto">Our most loved dishes, prepared with extra care and secret family recipes.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Chicken Tikka Masala', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800', price: '£9.50' },
            { name: 'Lamb Biryani', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800', price: '£11.95' },
            { name: 'Tandoori Mixed Grill', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800', price: '£12.95' },
          ].map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <Link to="/menu" className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold">ORDER NOW</Link>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{dish.name}</h3>
              <p className="text-amber-500 font-serif italic">{dish.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
