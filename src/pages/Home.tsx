import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Users, Trees, Building2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import img8 from '../assets/images/img8.jpeg';

export default function Home() {
  const features = [
    {
      title: 'חדרים מאובזרים ללינה',
      description:
        'כל הדרוש לשינה נעימה: מצעים, שמיכות, כריות, שירותים ומקלחת, מגבות ומזגנים בכל הבית. מקום לינה עד 26 אנשים — 16 מיטות ו־10 מזרנים.',
      icon: <Sparkles className="h-8 w-8 text-amber-600" />,
    },
    {
      title: 'אולם, חצר וקיבולת',
      description:
        'אולם שמכיל עד כ־80 אורחים, וחצר נרחבת שמתאימה לעד כ־100 אורחים לאירוח בחוץ. מטבחון חיצוני מאובזר ושירותים נוחים לאורחים.',
      icon: <Building2 className="h-8 w-8 text-amber-600" />,
    },
    {
      title: 'מטבחים וקומפלקס מלא',
      description:
        'קומפלקס אירוח עם חדרי שינה, מטבחים, אולם וחצר מפנקים — כדי שתארגנו סעודות והכול לפי הצורך שלכם, במקום אחד מסודר.',
      icon: <Trees className="h-8 w-8 text-amber-600" />,
    },
    {
      title: 'שבת חתן, גיבוש ואירועים',
      description:
        'מתאים לשבתות חתן ושבתות גיבוש, וגם לאירוע קטן בימי החול — חינה, בר מצווה, יום הולדת ועוד. חתן וכלה יכולים להתארגן לפני האירוע, להשאיר חפצים וללון בנוחות גם אחרי החתונה.',
      icon: <Users className="h-8 w-8 text-amber-600" />,
    },
  ];

  return (
    <div className="min-w-0 max-w-full overflow-x-clip pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={img8}
            alt="Hero background"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 mx-auto min-w-0 max-w-7xl px-4 text-right text-white sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display mb-6 text-4xl font-medium leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_28px_rgba(0,0,0,0.55)] sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]">
              בית הארחה{' '}
              <span className="font-semibold italic text-amber-300">&quot;מאיר שרה&quot;</span>
              <br />
              <span className="mt-3 block text-[1.65rem] font-light leading-snug text-stone-100/95 sm:mt-4 sm:text-3xl md:text-4xl">
                קומפלקס אירוח מושלם ומפנק
              </span>
            </h1>
            <p className="mb-10 ms-auto max-w-2xl text-lg text-stone-200 md:text-xl">
              חדרי שינה, מטבחים, אולם וחצר — הכול מוכן לשבתות חתן, שבתות גיבוש ואירועים משפחתיים. לינה עד 26 אנשים,
              אולם לכ־80 אורחים וחצר לעד כ־100. שדרות ירושלים 106, נתיבות.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <NavLink
                to="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2"
              >
                בואו נתכנן את האירוע
                <ArrowLeft size={20} />
              </NavLink>
              <NavLink
                to="/gallery"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                גלו את בית הארחה
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-600">בית הארחה מאיר שרה</h2>
            <p className="font-serif text-3xl font-bold text-stone-900 md:text-4xl">
              קומפלקס אירוח עם כל מה שצריך — לינה, אולם, חצר ומטבחים
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-3xl hover:bg-stone-50 transition-colors"
              >
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="overflow-x-clip bg-orange-100/45 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="w-full min-w-0 pr-6 pt-6 sm:pr-7 sm:pt-7 lg:w-1/2">
              <div className="relative">
                <img
                  src={img8}
                  alt="Villa"
                  className="relative z-10 rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-3 -right-3 z-20 flex h-32 w-32 items-center justify-center rounded-full bg-amber-600 p-3 text-center text-sm font-bold leading-snug text-white shadow-lg sm:-top-4 sm:-right-4 sm:text-base">
                  לינה עד
                  <br />
                  26 איש
                </div>
                <div className="absolute -bottom-10 -left-10 w-full h-full border-4 border-amber-200 rounded-3xl -z-0"></div>
              </div>
            </div>
            <div className="w-full min-w-0 text-right lg:w-1/2">
              <h2 className="mb-6 font-serif text-3xl font-bold text-stone-900">בית הארחה &quot;מאיר שרה&quot;</h2>
              <p className="mb-8 text-lg leading-relaxed text-stone-600">
                קומפלקס אירוח מושלם ומפנק עם חדרי שינה, מטבחים, אולם וחצר. החדרים מאובזרים עם כל הדרוש ללינה — מצעים,
                שמיכות, כריות, שירותים, מקלחת, מגבות ומזגנים בכל הבית. המקום מיועד לשבתות חתן ושבתות גיבוש, עם לינה
                עד 26 אנשים (16 מיטות ו־10 מזרנים). יש אולם לכ־80 אורחים, מטבחון חיצוני מאובזר, שירותים לאורחים וחצר
                שמתאימה לעד כ־100 אורחים לאירוח בחוץ. מתאים גם לאירוע קטן בימי החול — חינה, בר מצווה, יום הולדת ועוד.
                חתן וכלה מוזמנים להתארגן לפני האירוע, להשאיר חפצים וללון בנוחות גם אחרי החתונה. המתחם בשדרות ירושלים
                106, נתיבות.
              </p>
              <ul className="mb-10 w-full space-y-4 text-right" dir="rtl">
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-600" aria-hidden />
                  <span>לינה עד 26 אנשים — 16 מיטות ו־10 מזרנים; ציוד מלא לשינה</span>
                </li>
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-600" aria-hidden />
                  <span>אולם עד כ־80 אורחים; חצר עד כ־100 אורחים; מטבחון חיצוני ושירותים</span>
                </li>
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-600" aria-hidden />
                  <span>מטבחים במתחם — ארגון הסעודות וההספקה לפי בחירתכם</span>
                </li>
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-600" aria-hidden />
                  <span>שדרות ירושלים 106, נתיבות</span>
                </li>
              </ul>
              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 text-amber-900 font-bold hover:gap-4 transition-all"
              >
                קראו עוד על בית הארחה
                <ArrowLeft size={20} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="mb-8 font-serif text-3xl font-bold italic md:text-5xl">רוצים לשריין תאריך בבית הארחה?</h2>
          <p className="mb-12 text-xl opacity-90">
            השאירו פרטים ונחזור אליכם — נתאים את האירוע לקיבולת האולם, החצר והלינה, ולכל מה שצריך בנתיבות.
          </p>
          <NavLink
            to="/contact"
            className="rounded-full bg-stone-900 px-12 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-stone-800"
          >
            השאירו פרטים עכשיו
          </NavLink>
        </div>
      </section>
    </div>
  );
}
