import { NavLink } from 'react-router-dom';
import {  Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              מאיר שרה
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              אחוזה בוטיק יוקרתית המיועדת להנחה שבתות חתן עם לינה. אנו משדרגים כל רגע לחוויה בלתי נשכחת עם כל הטעם, הטיפול וההגנה שמגיעה לכם.
            </p>
            <div className="flex gap-4">
              {/* <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">קישורים מהירים</h3>
            <ul className="space-y-4 text-sm">
              <li><NavLink to="/" className="hover:text-amber-500 transition-colors">דף בית</NavLink></li>
              <li><NavLink to="/about" className="hover:text-amber-500 transition-colors">עלינו</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-amber-500 transition-colors">גלריה</NavLink></li>
              <li><NavLink to="/testimonials" className="hover:text-amber-500 transition-colors">המלצות</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-amber-500 transition-colors">צור קשר</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">צרו קשר</h3>
            <ul className="space-y-4 text-right text-sm" dir="rtl">
              <li className="flex items-center justify-start gap-3">
                <MapPin size={18} className="shrink-0 text-amber-600" aria-hidden />
                <span>רחוב הגשר 12, תל אביב</span>
              </li>
              <li className="flex items-center justify-start gap-3">
                <Phone size={18} className="shrink-0 text-amber-600" aria-hidden />
                <span dir="ltr" className="text-right">
                  050-1234567
                </span>
              </li>
              <li className="flex items-center justify-start gap-3">
                <Mail size={18} className="shrink-0 text-amber-600" aria-hidden />
                <span dir="ltr" className="text-right">
                  info@gesher.co.il
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">הצטרפו לניוזלטר</h3>
            <p className="text-xs mb-4">הירשמו לקבלת עדכונים והשראה ישירות למייל.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="המייל שלך"
                className="bg-stone-800 border-none rounded-r-lg px-4 py-2 w-full text-sm focus:ring-1 focus:ring-amber-600 outline-none"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-l-lg transition-colors text-sm font-medium"
              >
                הרשמה
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} מאיר שרה - כל הזכויות שמורות.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
