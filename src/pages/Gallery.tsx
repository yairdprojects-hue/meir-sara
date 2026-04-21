import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.jpeg';
import img5 from '../assets/images/img5.jpeg';
import img6 from '../assets/images/img6.jpeg';
import img7 from '../assets/images/img7.jpeg';
import img8 from '../assets/images/img8.jpeg';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

const images = [
  { url: img1, title: 'סלון מרווח', category: 'פנים' },
  { url: img2, title: 'פינת ישיבה', category: 'מיתוג' },
  { url: img3, title: 'חדר אוכל', category: 'דיגיטל' },
  { url: img4, title: 'אולם', category: 'אדריכלות' },
  { url: img5, title: 'חצר אירועים', category: 'צילום' },
  { url: img6, title: 'גינת הוילה', category: 'דיגיטל' },
  { url: img7, title: 'חצר הוילה', category: 'פנים' },
  { url: img8, title: 'סלון', category: 'דיגיטל' },
];
  return (
    <div className="min-h-screen bg-orange-50 pt-24">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 italic">הגלריה שלנו</h1>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
              מבט על חלק קטן מהפרויקטים שהיה לנו הכבוד להיות חלק מהם. כל תמונה היא סיפור של שיתוף פעולה והצלחה.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative cursor-pointer group h-80 overflow-hidden"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4">
                  <Maximize2 size={32} className="mb-4 text-amber-500" />
                  <h3 className="text-lg font-bold text-center mb-1">{image.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-amber-200">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-950/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white hover:text-amber-500 transition-colors"
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
