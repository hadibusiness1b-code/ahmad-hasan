import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    location: '',
    notes: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const message = `📌 *طلب تسجيل جديد - موقع الأستاذ أحمد حسن*\n👤 *الاسم:* ${formData.name}\n📱 *الرقم:* ${formData.phone}\n🎓 *الصف الدراسي:* ${formData.grade}\n📍 *العنوان:* ${formData.location}\n📝 *إضافات/ملاحظات:* ${formData.notes || 'لا يوجد'}`;
    
    // URL Encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp Phone Number (using exact requested number, appended to standard format)
    // Adding country code for Syria if it's 09..., assuming +963 format logic, or simply passing as requested
    const phoneNumber = "963993614025"; 
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">احجز مقعدك الآن</h2>
            <div className="w-24 h-1.5 bg-blue-900 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 mb-4">
              املأ النموذج أدناه للتسجيل وسيتم تحويلك مباشرة للواتساب لإتمام عملية التسجيل.
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-900 font-bold">
              <Phone className="w-5 h-5" />
              <span dir="ltr">0993 614 025</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col"
        >
          <div className="bg-blue-900 p-4 text-white text-center font-bold text-lg">
            طلب تسجيل جديد - احجز مقعدك الآن
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-slate-500">الاسم الكامل *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/10"
                  placeholder="أدخل اسمك الثلاثي"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-bold text-slate-500">رقم الهاتف *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  dir="ltr"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/10 text-right"
                  placeholder="09xx xxx xxx"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Grade */}
              <div className="flex flex-col gap-2">
                <label htmlFor="grade" className="text-xs font-bold text-slate-500">الصف الدراسي *</label>
                <select
                  id="grade"
                  name="grade"
                  required
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/10 appearance-none"
                >
                  <option value="" disabled>اختر الصف...</option>
                  <option value="تاسع">تاسع</option>
                  <option value="عاشر">عاشر</option>
                  <option value="حادي عشر">حادي عشر</option>
                  <option value="بكالوريا علمي">بكالوريا علمي</option>
                </select>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2">
                <label htmlFor="location" className="text-xs font-bold text-slate-500">العنوان / المنطقة *</label>
                <select
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/10 appearance-none"
                >
                  <option value="" disabled>اختر المنطقة...</option>
                  <option value="جبلة المركز">جبلة (المركز)</option>
                  <option value="معهد أكسفورد">معهد أكسفورد</option>
                  <option value="الرميلة">الرميلة</option>
                  <option value="بستان الباشا">بستان الباشا</option>
                  <option value="اخرى">منطقة أخرى (يرجى التحديد في الملاحظات)</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-2">
              <label htmlFor="notes" className="text-xs font-bold text-slate-500">ملاحظات أو إضافات (اختياري)</label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/10 resize-none"
                placeholder="أخبرنا بأي استفسار أو تفاصيل إضافية..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-[10px] text-slate-400 max-w-[300px] text-right">
                * سيتم تحويلك مباشرة إلى الواتساب الخاص بالأستاذ لتأكيد الطلب وحجز الموعد.
              </p>
              <button
                type="submit"
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-blue-900 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-800 transition-colors"
              >
                إرسال الطلب عبر واتساب
                <Send className="w-5 h-5 -scale-x-100" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
