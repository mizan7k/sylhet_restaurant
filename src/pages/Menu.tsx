import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MENU_DATA } from '@/src/data';
import { Flame, Leaf } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Menu() {
  const categories = Array.from(new Set(MENU_DATA.map(item => item.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredMenu = MENU_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Our <span className="text-amber-500 italic">Menu</span>
          </motion.h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Explore our diverse selection of authentic Indian dishes, from traditional favorites to unique house specialties.
          </p>
        </header>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all border",
                activeCategory === cat 
                  ? "bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-600/20" 
                  : "bg-transparent border-white/10 text-white/60 hover:border-white/30"
              )}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {filteredMenu.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex justify-between items-start group"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex gap-1">
                    {item.isSpicy && <Flame size={14} className="text-red-500" />}
                    {item.isVegetarian && <Leaf size={14} className="text-green-500" />}
                  </div>
                </div>
                <p className="text-sm text-white/40 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="text-right ml-8">
                <span className="text-lg font-serif italic text-amber-500">
                  £{item.price.toFixed(2)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-24 flex justify-center gap-8 text-xs uppercase tracking-widest text-white/30">
          <div className="flex items-center gap-2"><Flame size={14} className="text-red-500" /> Spicy</div>
          <div className="flex items-center gap-2"><Leaf size={14} className="text-green-500" /> Vegetarian</div>
        </div>
      </div>
    </div>
  );
}
