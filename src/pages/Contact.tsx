import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-orange-50 pt-24">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-right">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 underline decoration-amber-300 underline-offset-8 decoration-4">
              בואו נתחיל <br />
              <span className="text-amber-600">משהו נהדר.</span>
            </h1>
            <p className="ms-auto max-w-xl text-lg leading-relaxed text-stone-600">
              השאירו פרטים ונחזור אליכם בהקדם האפשרי. אנחנו תמיד שמחים לדבר על רעיונות חדשים, פרויקטים מעניינים או סתם לקפה.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[3rem] bg-orange-100/50 p-10 shadow-sm"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-right">
                    <label className="text-sm font-bold text-stone-700 mr-2">שם מלא</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="ישראל ישראלי"
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <label className="text-sm font-bold text-stone-700 mr-2">אימייל</label>
                    <input
                      type="email"
                      className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="israel@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-right">
                  <label className="text-sm font-bold text-stone-700 mr-2">נושא הפנייה</label>
                  <select className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 outline-none transition-all appearance-none cursor-pointer">
                    <option>שבת חתן עם לינה</option>
                    <option>בר/בת מצווה או אירוע משפחתי</option>
                    <option>הזמנת תאריכים / סיור במתחם</option>
                    <option>מידע והצעת מחיר</option>
                    <option>אחר</option>
                  </select>
                </div>

                <div className="space-y-2 text-right">
                  <label className="text-sm font-bold text-stone-700 mr-2">הודעה</label>
                  <textarea
                    rows={6}
                    className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="ספרו לנו קצת על הפרויקט שלכם..."
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-amber-900/10 group"
                >
                  לשלוח הודעה
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <div className="flex flex-col justify-center space-y-12" dir="rtl">
              <div className="space-y-8 text-right">
                <div className="group flex items-start justify-start gap-6">
                  <div className="shrink-0 rounded-2xl bg-amber-100 p-4 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                    <MapPin size={24} aria-hidden />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-stone-900">המיקום שלנו</h3>
                    <p className="text-stone-600">שדרות ירושלים 106, נתיבות</p>
                  </div>
                </div>

                <div className="group flex items-start justify-start gap-6">
                  <div className="shrink-0 rounded-2xl bg-amber-100 p-4 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                    <Phone size={24} aria-hidden />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-stone-900">טלפון</h3>
                    <p className="text-right text-stone-600" dir="ltr">
                      050-7336392
                    </p>
                    <p className="text-xs text-stone-400">זמינים בימים א'-ה' בין 09:00 ל-18:00</p>
                  </div>
                </div>

                <div className="group flex items-start justify-start gap-6">
                  <div className="shrink-0 rounded-2xl bg-amber-100 p-4 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                    <Mail size={24} aria-hidden />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-stone-900">אימייל</h3>
                    <p className="text-right text-stone-600" dir="ltr">
                      nisim12345@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-100 pt-12 text-right">
                <h3 className="mb-6 text-sm font-bold tracking-widest text-stone-400">עקבו אחרינו</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full grayscale opacity-70">
         <img
           src="https://picsum.photos/seed/map-placeholder/1920/600"
           alt="Map location"
           className="w-full h-full object-cover"
           referrerPolicy="no-referrer"
         />
      </section>
    </div>
  );
}
