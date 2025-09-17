'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Hand-Selected Wood',
    description: 'We source only the finest sustainably harvested wood from trusted suppliers around the world.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
    icon: '🌳',
  },
  {
    title: 'Master Craftsmanship',
    description: 'Each piece is meticulously crafted by artisans with decades of woodworking experience.',
    image: 'https://images.pexels.com/photos/5974291/pexels-photo-5974291.jpeg',
    icon: '🔨',
  },
  {
    title: 'Timeless Design',
    description: 'Our designs blend traditional techniques with contemporary aesthetics for lasting beauty.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    icon: '✨',
  },
];

export default function Craftsmanship() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Art of
            <span className="block bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Craftsmanship
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every piece of furniture we create is a testament to our commitment to quality, 
            tradition, and the timeless beauty of handcrafted wood furniture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-amber-600 to-amber-800 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-8 py-16 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  40 Years of Excellence
                </h3>
                <p className="text-amber-100 text-lg leading-relaxed mb-8">
                  Since 1985, Royalwood has been crafting exceptional furniture that stands the test of time. 
                  Our commitment to quality and customer satisfaction has made us a trusted name in premium 
                  wooden furniture.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                    <div className="text-amber-200 text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">5,000+</div>
                    <div className="text-amber-200 text-sm">Custom Pieces</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/5974291/pexels-photo-5974291.jpeg"
                    alt="Master craftsman at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}