import { motion } from 'motion/react';
import { Heart, HeartHandshake, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'חסד',
      text: 'כל אירוח נולד מתוך רצון אמיתי לפנק, לכבד ולהרגיש את האורח — בדיוק כמו שבית חם מקבל אורח יקר.',
      icon: Heart,
    },
    {
      title: 'נתינה',
      text: 'אנחנו נותנים מעצמנו: זמן, תשומת לב ושקט נפשי — כדי שתוכלו להתמקד במה שחשוב באמת.',
      icon: HeartHandshake,
    },
    {
      title: 'דור ישרים',
      text: 'המקום הזה הוא המשך טבעי לדרך שסללו הורינו: בית שמחבר בין משפחה, קהילה וברכה.',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-clip pt-24">
      {/* Header */}
      <section className="bg-orange-100/45 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 font-serif text-4xl font-bold text-stone-900 md:text-6xl"
          >
            הסיפור שמאחורי{' '}
            <span className="text-amber-600 italic">אחוזת מאיר שרה</span>
          </motion.h1>
          <p className="text-xl leading-relaxed text-stone-600">
            האחוזה נקראת על שם הורינו, <span className="font-semibold text-stone-800">מאיר ושרה</span>
            {' '}שנפטרו מן העולם והשאירו אחריהם דור ישרים מבורך. כל מה שקורה כאן — שבתות חתן, אירוח ושקט —
            עומד על יסוד שהם הטביעו בנו: בית מלא חום, קבלת פנים לבבית ולב פתוח. אנחנו ממשיכים את דרכם מתוך
            אמונה שהאירוח האמיתי נשען על <span className="font-semibold text-amber-800">חסד ונתינה</span>, לכבוד
            האורחים, הקהילה וזכרם המתוק.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-32 grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <div className="text-right">
            <h2 className="mb-6 font-serif text-3xl font-bold text-stone-900 underline decoration-amber-300 underline-offset-8">
              שורשים וחזון
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-stone-600">
              מאיר ושרה חיו חיים של נתינה ושמחה לאחרים. הם לימדו אותנו שבית אינו רק קירות וחדרים — אלא
              מקום שבו אנשים מרגישים ראויים, שמורים ומחוברים. היום, כשאנחנו פותחים את שערי האחוזה, אנחנו
              עושים זאת בשם המורשת שלהם ובשם כל מי שממשיך את השושלת.
            </p>
            <p className="text-lg leading-relaxed text-stone-600">
              החזון שלנו פשוט ועמוק: ליצור כאן רגעים של קדושה, איחוד משפחתי ושמחה טהורה — בלי להתפשר על
              האיכות, על הכבוד ועל הרוח. כל אירוע הוא עבורנו הזדמנות להוסיף אור קטן לעולם, בדרך שהם היו
              גאים בה.
            </p>
          </div>
          <div className="relative">
            <img
              src="assets/images/img1.jpeg"
              alt="אחוזת מאיר שרה"
              className="relative z-10 rounded-[2rem] shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 -z-10 h-full w-full rounded-[2rem] bg-amber-100"></div>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-stone-900">מה מנחה אותנו היום</h2>
          <p className="mx-auto max-w-2xl text-stone-600">
            שלושת עמודי התווך שעליהם בנויה האחוזה — ירושה ישירה מדרכם של הורינו.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {values.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-orange-200/60 bg-orange-50/80 p-8 text-right shadow-sm"
              >
                <div className="mb-5 flex justify-center md:justify-end">
                  <span className="rounded-2xl bg-amber-100 p-4 text-amber-700">
                    <Icon className="h-8 w-8" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-stone-900">{item.title}</h3>
                <p className="leading-relaxed text-stone-600">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
