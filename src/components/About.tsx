import { motion } from 'motion/react';
import { BookOpen, Target, Award, Brain } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: 'فهم عميق',
      description: 'نركز على بناء أساسيات قوية تمكن الطالب من فهم القوانين بدلاً من حفظها.',
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'تدريب مكثف',
      description: 'حل نماذج دورات سابقة وتمارين مكثفة لضمان التفوق في الامتحانات.',
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: '20 عام من التميز',
      description: 'خبرة طويلة في التعامل مع كافة مستويات الطلاب ورفع أدائهم الدراسي.',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: 'تبسيط المعقد',
      description: 'تحويل المسائل المعقدة إلى خطوات بسيطة ومنطقية يسهل استيعابها.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">عن الأستاذ</h2>
            <div className="w-24 h-1.5 bg-blue-900 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed italic font-medium">
              "الرياضيات ليست مجرد أرقام، بل هي فن التفكير المنطقي."
            </p>
            <p className="text-base text-slate-500 leading-relaxed mt-4">
              شغفي هو جعل الرياضيات المادة المفضلة لدى طلابي. أؤمن أن كل طالب قادر على التفوق إذا تم توجيهه بالطريقة الصحيحة التي تتناسب مع قدراته وطريقة تفكيره.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center transition-shadow hover:shadow-md"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-900">
                {/* Clone the icon to style it */}
                <div style={{ color: '#1e3a8a' }}>{feature.icon}</div>
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
