import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase';

const SUBJECT_OPTIONS = [
  'שבת חתן עם לינה',
  'אירוע משפחתי',
  'הזמנת תאריכים / סיור במתחם',
  'מידע והצעת מחיר',
  'אחר',
] as const;

type ContactFormState = {
  שם: string;
  אימייל: string;
  נושא: string;
  הודעה: string;
};


const emptyForm = (): ContactFormState => ({
  שם: '',
  אימייל: '',
  נושא: SUBJECT_OPTIONS[0],
  הודעה: '',
});

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormState>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    if (!isFirebaseConfigured || !db) {
      setFeedback({
        type: 'err',
        text: 'שליחת הטופס מהאתר אינה זמינה כרגע (חסרה הגדרת שרת). צרו קשר בטלפון או במייל — הפרטים מופיעים בצד.',
      });
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, 'pniot'), {
        ...formData,
        timestamp: new Date().toISOString(),
      });
      setFormData(emptyForm());
      setFeedback({
        type: 'ok',
        text: 'הפנייה נשמרה בהצלחה. נחזור אליכם בהקדם.',
      });
    } catch (err) {
      console.error('שגיאה בשמירת פנייה:', err);
      setFeedback({
        type: 'err',
        text: 'לא הצלחנו לשלוח את הפנייה. נסו שוב או צרו קשר בטלפון.',
      });
    } finally {
      setLoading(false);
    }
  };

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
              {feedback ? (
                <div
                  role="status"
                  className={`mb-6 rounded-2xl px-4 py-3 text-right text-sm font-medium ${
                    feedback.type === 'ok'
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'bg-red-100 text-red-900'
                  }`}
                >
                  {feedback.text}
                </div>
              ) : null}

              {!isFirebaseConfigured ? (
                <div
                  className="mb-6 rounded-2xl border border-amber-400 bg-amber-50 px-4 py-3 text-right text-sm text-amber-950"
                  role="status"
                >
                  שליחת טופס מהאתר אינה פעילה כרגע (לא הוגדרו משתני Firebase בבילד). אפשר ליצור קשר בטלפון או
                  במייל — הפרטים מופיעים בצד.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-right">
                    <label htmlFor="contact-name" className="text-sm font-bold text-stone-700 mr-2">
                      שם מלא
                    </label>
                    <input
                      id="contact-name"
                      name="שם"
                      type="text"
                      required
                      value={formData.שם}
                      onChange={handleChange}
                      className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="ישראל ישראלי"
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <label htmlFor="contact-email" className="text-sm font-bold text-stone-700 mr-2">
                      אימייל
                    </label>
                    <input
                      id="contact-email"
                      name="אימייל"
                      type="email"
                      required
                      value={formData.אימייל}
                      onChange={handleChange}
                      className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="israel@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-right">
                  <label htmlFor="contact-subject" className="text-sm font-bold text-stone-700 mr-2">
                    נושא הפנייה
                  </label>
                  <select
                    id="contact-subject"
                    name="נושא"
                    required
                    value={formData.נושא}
                    onChange={handleChange}
                    className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 outline-none transition-all appearance-none cursor-pointer"
                  >
                    {SUBJECT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 text-right">
                  <label htmlFor="contact-message" className="text-sm font-bold text-stone-700 mr-2">
                    הודעה
                  </label>
                  <textarea
                    id="contact-message"
                    name="הודעה"
                    rows={6}
                    required
                    value={formData.הודעה}
                    onChange={handleChange}
                    className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="ספרו לנו קצת על האירוע או השאלה שלכם..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !isFirebaseConfigured}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-60 disabled:pointer-events-none text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-amber-900/10 group"
                >
                  {loading ? 'שולחים…' : !isFirebaseConfigured ? 'שליחה לא זמינה' : 'לשלוח הודעה'}
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
