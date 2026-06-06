import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 overflow-hidden bg-slate-50 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 xl:col-span-8 bg-blue-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-end min-h-[400px]"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"/>
              </svg>
            </div>
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-blue-700/50 rounded-full text-xs font-medium mb-3 border border-white/20">
                خبير مادة الرياضيات
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 leading-tight">
                الأستاذ أحمد حسن
              </h1>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                عشرون عاماً في بناء عقول المبدعين وتسهيل لغة الأرقام. رؤيتنا هي تحويل التعقيد إلى إبداع ملموس تضمن لك التفوق في أصعب الظروف.
              </p>
              
              <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">+20</span>
                  <span className="text-[10px] uppercase tracking-wider text-blue-300">عاماً</span>
                </div>
                <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">+1800</span>
                  <span className="text-[10px] uppercase tracking-wider text-blue-300">طالب متميز</span>
                </div>
                <a
                  href="#contact"
                  className="mt-4 sm:mr-auto w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all shadow-lg text-center"
                >
                  احجز مقعدك الآن
                  <ArrowLeft size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 xl:col-span-4 relative h-full min-h-[400px]"
          >
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <img
                src="https://www.image2url.com/r2/default/images/1779105612252-f8548137-aade-4417-a040-e5753256c88b.png"
                alt="الأستاذ أحمد حسن"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top absolute inset-0"
              />
            </div>
          </motion.div>

      </div>
    </section>
  );
}
