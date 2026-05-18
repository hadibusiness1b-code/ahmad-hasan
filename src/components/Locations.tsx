import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Locations() {
  const locations = [
    { name: 'معهد أكسفورد', region: 'المركز' },
    { name: 'كافة أنحاء مدينة جبلة', region: 'تدريس منزلي' },
    { name: 'الرميلة', region: 'مجموعات خاصة' },
    { name: 'بستان الباشا', region: 'مجموعات خاصة' },
  ];

  return (
    <section id="locations" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 lg:pl-12 text-center lg:text-right"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">أماكن التواجد والتدريس</h2>
            <div className="w-24 h-1.5 bg-blue-900 mx-auto lg:mx-0 rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              أسعى للتواجد بالقرب من الطلاب لتسهيل وصولهم وتوفير بيئة تعليمية مريحة ومناسبة للجميع. يمكنك الانضمام للمقاعد المتاحة في المعاهد أو حجز جلسات خاصة.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center text-blue-900 font-bold hover:text-blue-800 transition-colors"
            >
              استفسر عن المواعيد المتاحة
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </motion.div>

          <div className="flex-1 w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-blue-900 font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
              مناطق التدريس
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {locations.map((loc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center sm:items-start text-center sm:text-right gap-1"
                >
                  <div className="text-xs text-slate-400">{loc.region}</div>
                  <div className="text-sm sm:text-base font-bold text-slate-800">{loc.name}</div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
