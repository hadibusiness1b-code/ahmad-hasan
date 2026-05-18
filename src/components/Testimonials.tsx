import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "لم أكن أتخيل أن أستطيع فهم مادة الرياضيات بهذه السهولة، شكراً للأستاذ أحمد على جهوده وتفانيه.",
      name: "محمد س.",
      grade: "البكالوريا العلمي"
    },
    {
      text: "أنصح كل طالب يواجه صعوبة في الرياضيات بالتسجيل عند الأستاذ أحمد، كانت النتيجة ممتازة في الفحص النهائي.",
      name: "والدة الطالبة راما",
      grade: "الصف التاسع"
    },
    {
      text: "أسلوب رائع، تبسيط للمعلومات، ومتابعة مستمرة. أفضل أستاذ رياضيات تعاملت معه.",
      name: "أحمد ك.",
      grade: "البكالوريا العلمي"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">قالوا عن الأستاذ</h2>
            <div className="w-24 h-1.5 bg-blue-900 mx-auto rounded-full mb-8"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 shadow-sm flex flex-col justify-between"
            >
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6 flex-1 text-right">
                <Quote className="text-blue-200 w-8 h-8 mb-4 rotate-180 inline-block" />
                <p className="text-sm leading-relaxed text-slate-600 italic">"{test.text}"</p>
              </div>
              <div className="px-2">
                <p className="font-bold text-blue-900 text-sm">{test.name}</p>
                <p className="text-slate-500 text-xs mt-1">{test.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
