import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const WHATSAPP_HREF = 'https://wa.me/972507336392';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              מאיר שרה
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              בית הארחה יוקרתי המיועד לשבתות חתן עם לינה. אנו משדרגים כל רגע לחוויה בלתי נשכחת עם כל הטעם, הטיפול וההגנה שמגיעה לכם.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/reel/DS5du4wACzC/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-stone-400 transition-colors hover:text-amber-500"
                aria-label="אינסטגרם — בית הארחה מאיר שרה"
              >
                <InstagramIcon className="h-6 w-6 shrink-0" />
                <span className="text-sm font-medium">אינסטגרם</span>
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-stone-400 transition-colors hover:text-[#25D366]"
                aria-label="וואטסאפ — 050-7336392"
              >
                <WhatsAppIcon className="h-6 w-6 shrink-0" />
                <span className="text-sm font-medium">וואטסאפ</span>
              </a>
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
                <span>שדרות ירושלים 106, נתיבות </span>
              </li>
              <li className="flex items-center justify-start gap-3">
                <Phone size={18} className="shrink-0 text-amber-600" aria-hidden />
                <span dir="ltr" className="text-right">
                050-7336392
                </span>
              </li>
              <li className="flex items-center justify-start gap-3">
                <Mail size={18} className="shrink-0 text-amber-600" aria-hidden />
                <span dir="ltr" className="text-right">
                  nisim12345@gmail.com
                </span>
              </li>
            </ul>
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
