import React from 'react';

const Footer = () => {
  return (
    <footer className="relative mt-32 pb-12 overflow-hidden">
      {/* Orqa fondagi nafis nur (Glow effect) */}
      <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] bg-brand/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[200px] h-[200px] bg-brand/5 blur-[100px] rounded-full"></div>

      {/* Asosiy konteyner */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brend qismi (3 ustun kengligida) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="w-10 h-10 bg-brand rounded-xl rotate-12 absolute inset-0 blur-sm opacity-50"></div>
                <div className="w-10 h-10 bg-brand rounded-xl relative flex items-center justify-center shadow-lg shadow-brand/20">
                  <span className="text-white font-black text-xl">C</span>
                </div>
              </div>
              <h2 className="text-2xl font-black text-white tracking-tighter">
                CAR <span className="text-brand">RENTAL</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-7 max-w-sm mb-8">
              Experience the pinnacle of luxury and performance. Our fleet is meticulously maintained to provide you with the most incredible driving emotions.
            </p>
            {/* Social Links - Glassmorphism style */}
            <div className="flex gap-3">
              {['FB', 'TW', 'IG', 'LI'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400 hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 cursor-pointer hover:-translate-y-1">
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Navigatsiya (2 ustun) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em] opacity-50">Quick Links</h4>
            <ul className="space-y-4">
              {['Categories', 'About Us', 'Help Center', 'Our Fleet'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand transition-all duration-300 text-[14px] flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-brand mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Toifalar (2 ustun) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em] opacity-50">Categories</h4>
            <ul className="space-y-4 text-gray-400 text-[14px]">
              <li className="hover:text-brand cursor-pointer transition-colors">Compact Cars</li>
              <li className="hover:text-brand cursor-pointer transition-colors">Luxury Sports</li>
              <li className="hover:text-brand cursor-pointer transition-colors">Family Vans</li>
              <li className="hover:text-brand cursor-pointer transition-colors">Electric Fleet</li>
            </ul>
          </div>

          {/* Location (4 ustun) */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-sm">
            <h4 className="text-white font-bold mb-4 text-sm">Find Us</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              2500 Randolph Rd, Charlotte,<br />North Carolina(NC), 28207
            </p>
            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Support line</p>
                <p className="text-white font-bold">+1 855 420 0000</p>
              </div>
              <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center">
                <span className="text-brand">📞</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pastki qism */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[13px]">
            © 2026 Car Rental Pro. All rights reserved.
          </p>
          <div className="flex gap-8 text-[13px] text-gray-500">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
              <span className="uppercase text-[10px] font-black tracking-widest">Global Status</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;