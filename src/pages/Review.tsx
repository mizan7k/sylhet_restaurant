import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Sarah Jenkins', rating: 5, text: 'The best Indian food I have had in years. The Chicken Tikka Masala was incredibly creamy and flavorful.', date: '2 days ago' },
  { name: 'David Thompson', rating: 5, text: 'Excellent service and even better food. The atmosphere is warm and inviting. Highly recommend the Sylhet Special.', date: '1 week ago' },
  { name: 'Michael Chen', rating: 4, text: 'Great takeaway experience. Food arrived hot and the portions were generous. Will definitely order again.', date: '2 weeks ago' },
  { name: 'Emma Wilson', rating: 5, text: 'A hidden gem! The staff are so friendly and the tandoori mixed grill is to die for.', date: '1 month ago' },
];

export function Review() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Guest <span className="text-amber-500 italic">Reviews</span>
          </motion.h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Hear what our customers have to say about their experience at Sylhet.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-white/5 p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 text-amber-500/10" size={64} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? "text-amber-500 fill-amber-500" : "text-white/10"} 
                  />
                ))}
              </div>
              <p className="text-lg text-white/80 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-white">{review.name}</h4>
                <span className="text-xs text-white/30 uppercase tracking-widest">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-white/40 mb-8">Want to share your experience?</p>
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-amber-500 transition-colors">
            WRITE A REVIEW
          </button>
        </div>
      </div>
    </div>
  );
}
