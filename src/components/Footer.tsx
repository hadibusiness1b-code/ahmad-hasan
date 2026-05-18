export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <a href="#home" className="text-2xl font-bold text-white tracking-tight">
            الأستاذ أحمد حسن
          </a>
          <p className="mt-3 text-gray-300 italic text-lg font-medium tracking-wide">"لا شيء نفهمه صعب"</p>
        </div>
        
        <div className="flex justify-center space-x-6 space-x-reverse mb-8">
          <a href="#home" className="hover:text-white transition-colors">الرئيسية</a>
          <a href="#about" className="hover:text-white transition-colors">من أنا</a>
          <a href="#locations" className="hover:text-white transition-colors">أماكن التدريس</a>
          <a href="#contact" className="hover:text-white transition-colors">اتصل بنا</a>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col items-center justify-center gap-3">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} الأستاذ أحمد حسن. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs font-medium text-gray-500">
            تم التطوير بواسطة <span className="text-gray-400 font-bold">هادي حسن</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
