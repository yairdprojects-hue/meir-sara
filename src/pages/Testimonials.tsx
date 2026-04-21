import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'משפחת כהן',
      context: 'שבת חתן · מרכז',
      text: 'הארוחות, החדרים והשירות — הכל היה מעל ומעבר. הרגשנו כמו בבית רק יותר מפנק. האורחים לא מפסיקים לדבר על השבת הזאת.',
      rating: 5,
    },
    {
      name: 'יעל וניר',
      context: 'אירוח משפחתי · לינה לסוף שבוע',
      text: 'הוילה מרווחת, נקייה ומעוצבת בטעם. הילדים נהנו מהחצר והבריכה, ולנו נשאר רק להירגע. חוויה שחוזרים אליה בלב.',
      rating: 5,
    },
    {
      name: 'משפחת לוי',
      context: 'שבת חתן · גוש דן',
      text: 'צוות חם וסבלני שדאג לכל פרט — מהכניסה ועד הפרידה. האווירה בטקס והסעודות הייתה בדיוק מה שחלמנו.',
      rating: 5,
    },
    {
      name: 'דני ושירה',
      context: 'אירוח משפחתי',
      text: 'חיפשנו מקום אינטימי ויוקרתי לאירוע משפחתי. מאיר שרה סיפקה את כל הארוחות ברמה גבוהה והמרחב הרגיש פרטי ומכובד.',
      rating: 5,
    },
    {
      name: 'אפרים בן דוד',
      context: 'שבת חתן · ירושלים',
      text: 'הגענו מרחוק והתאכזבנו מכל מקום — כאן קיבלנו יחס אישי, שקט ונוף. המטבח ענה על כל הציפיות של חתן וכלה.',
      rating: 4,
    },
    {
      name: 'משפחת מזרחי',
      context: 'לינה ואירוח חג',
      text: 'ארוחות עשירות, שולחן ערוך יפהפה וחדרים נוחים לכל הדורות. סבא וסבתא היו מרוצים לא פחות מהנכדים. תודה על השקט והכבוד.',
      rating: 5,
    },
  ];

  const eventTypes = ['שבתות חתן', 'שבתות גיבוש', 'לינה משפחתית', 'אירוח משפחתי', 'חגים ושמחות'];

  return (
    <div className="min-h-screen overflow-x-clip bg-orange-50 pt-24">
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold text-stone-900 md:text-6xl">
              מה <span className="text-amber-600">אומרים</span> המתארחים?
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600 italic">
              «כל מילה כאן היא מהאנשים שחוו אצלנו לינה, שבת חתן או אירוע — בדיוק כמו שאתם מתכננים.»
            </p>
          </div>

          <div className="columns-1 space-y-8 md:columns-2 md:gap-8 lg:columns-3">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="flex break-inside-avoid flex-col items-start rounded-[2.5rem] border border-stone-100 bg-white p-10 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mb-6 rounded-2xl bg-amber-100 p-3">
                  <Quote className="text-amber-600" size={24} />
                </div>

                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={14}
                      className={
                        starIndex < item.rating ? 'fill-amber-500 text-amber-500' : 'text-stone-300'
                      }
                    />
                  ))}
                </div>

                <p className="mb-8 w-full text-right leading-relaxed text-stone-700 italic">
                  &quot;{item.text}&quot;
                </p>

                <div className="mt-auto w-full border-t border-stone-50 pt-6 text-right">
                  <h4 className="font-bold text-stone-900">{item.name}</h4>
                  <p className="text-xs font-bold tracking-wide text-amber-800">{item.context}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-orange-200/40 bg-orange-100/40 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden px-4">
          <p className="mb-10 text-center text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">
            אירוחים שאנחנו אוהבים ללוות
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {eventTypes.map((label) => (
              <span
                key={label}
                className="rounded-full border border-amber-300/60 bg-white/90 px-5 py-2.5 font-serif text-sm font-semibold text-stone-800 shadow-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
