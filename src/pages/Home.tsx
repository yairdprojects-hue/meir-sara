import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Users, Trees, Home as HomeIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import img8 from '../assets/images/img8.jpeg';

export default function Home() {
  const features = [
    {
      title: 'לינה וחדרים משודרגים',
      description:
        'חדרי אירוח מרווחים ומעוצבים, מצוידים היטב — כדי שתירגעו ותתמקדו במשפחה וברגעים המשמעותיים.',
      icon: <Sparkles className="h-8 w-8 text-amber-600" />,
    },
    {
      title: 'שבת חתן, בר מצווה ואירועים',
      description:
        'מרחב פרטי לשבתות חתן, בר מצווה ואירועי בוטיק — עם ליווי צמוד לתכנון הלוגיסטיקה והחוויה שאתם רוצים.',
      icon: <Users className="h-8 w-8 text-amber-600" />,
    },
    {
      title: 'חצר גדולה ומטבח מאובזר',
      description:
        'חצר נרחבת לאירוח ושמחה, ומטבח מלא לשימושכם. האירוח אצלנו ללא סעודנות — אתם מביאים ומכינים לפי הצורך.',
      icon: <Trees className="h-8 w-8 text-amber-600" />,
    },
    {
      title: 'חוויה שלא תשכחו',
      description:
        'שילוב של שקט, יוקרה ופרטיות — כדי שהאירוע יישאר בלב שלכם ושל האורחים לשנים הבאות.',
      icon: <HomeIcon className="h-8 w-8 text-amber-600" />,
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
            <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl">
              שבת חתן, בר מצווה ואירועים <br />
              <span className="text-amber-500 italic">עם לינה באחוזה יוקרתית.</span>
            </h1>
            <p className="mb-10 ms-auto max-w-2xl text-lg text-stone-200 md:text-xl">
              באחוזת מאיר שרה תמצאו לינה נעימה, חדרים משודרגים, חצר גדולה ומטבח מאובזר לשימושכם. האירוח ללא סעודנות
              — אתם בוחרים איך לארגן את הסעודות. כאן נולדת חוויה משפחתית אמיתית, בשקט ובפרטיות.
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
                גלו את האחוזה
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">למה מאיר שרה?</h2>
            <p className="font-serif text-3xl font-bold text-stone-900 md:text-4xl">
              מרחב לשבת חתן, בר מצווה, אירועים ולינה — בנוחות ובסטייל
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
                  src="https://picsum.photos/seed/luxury-event/800/600"
                  alt="Villa"
                  className="relative z-10 rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-3 -right-3 z-20 flex h-32 w-32 items-center justify-center rounded-full bg-amber-600 p-4 text-center text-sm font-bold text-white shadow-lg sm:-top-4 sm:-right-4 sm:text-base">
                  12 חדרי אירוח
                </div>
                <div className="absolute -bottom-10 -left-10 w-full h-full border-4 border-amber-200 rounded-3xl -z-0"></div>
              </div>
            </div>
            <div className="w-full min-w-0 text-right lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6 text-stone-900">אחוזת מאיר שרה - מרחב הקסום שלכם</h2>
              <p className="mb-8 text-lg leading-relaxed text-stone-600">
                אנחנו פותחים בפניכם אחוזה שמיועדת לשבתות חתן, בר מצווה, אירועים משפחתיים ולינה — עם חדרים משודרגים,
                חצר גדולה לאירוח ורגעים בחוץ, ומטבח מאובזר לשימושכם בלבד. האירוח אצלנו ללא אוכל מטעמנו: אתם מארגנים
                את הסעודות וההספקה כפי שמתאים לכם.
              </p>
              <ul className="mb-10 w-full space-y-4 text-right" dir="rtl">
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-600" aria-hidden />
                  <span>שנים עשר חדרים משודרגים ללינה נוחה לאורחים</span>
                </li>
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-600" aria-hidden />
                  <span>חצר גדולה ומרווחת — מושלמת לאירוח, קבלת פנים ושמחה</span>
                </li>
                <li className="flex items-center justify-start gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-600" aria-hidden />
                  <span>מטבח מאובזר לשימושכם (ללא סעודנות מהאחוזה)</span>
                </li>
              </ul>
              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 text-amber-900 font-bold hover:gap-4 transition-all"
              >
                קראו עוד על האחוזה
                <ArrowLeft size={20} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="mb-8 font-serif text-3xl font-bold italic md:text-5xl">רוצים לתכנן שבת חתן, בר מצווה או אירוע?</h2>
          <p className="mb-12 text-xl opacity-90">
            השאירו פרטים ונחזור אליכם. נשמח לספר על הלינה, החצר, המטבח והחדרים — ולהתאים את התאריך לצרכים שלכם.
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
