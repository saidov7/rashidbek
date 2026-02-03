import React from 'react';

const Hero = () => {
  return (
    <section className="relative mt-6 w-full h-[550px] rounded-[48px] overflow-hidden group">
      {/* Asosiy Rasm */}
      <img 
        src="/img/car.png" 
        alt="Main Car" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Rasm ustidagi qora qatlam (Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Kontent qismi */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-12 md:px-20 text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
          Compact <br /> 
          <span className="text-brand">cars</span>
        </h1>
        
        <p className="max-w-md text-gray-300 text-lg mb-10 leading-relaxed">
          Rent cars to find your special feelings and where you can enjoy your ride. 
          Experience the ultimate comfort and style.
        </p>

        {/* Qidiruv Paneli (Search Bar) */}
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full flex items-center shadow-2xl transition-all focus-within:border-brand/50">
          <div className="flex-1 flex items-center px-6">
            <span className="text-gray-400 mr-3">🔍</span>
            <input 
              type="text" 
              placeholder="Find the car of your dreams" 
              className="bg-transparent w-full outline-none text-white placeholder:text-gray-400 text-sm md:text-base"
            />
          </div>
          <button className="bg-brand hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all transform active:scale-95 shadow-lg flex items-center gap-2">
            Search <span className="hidden md:inline">→</span>
          </button>
        </div>

        {/* Slider Nuqtalari (Pastki qismda) */}
        <div className="absolute bottom-10 left-12 md:left-20 flex gap-3">
          <div className="w-10 h-1.5 bg-brand rounded-full"></div>
          <div className="w-2.5 h-1.5 bg-white/30 rounded-full hover:bg-white/60 cursor-pointer transition"></div>
          <div className="w-2.5 h-1.5 bg-white/30 rounded-full hover:bg-white/60 cursor-pointer transition"></div>
          <div className="w-2.5 h-1.5 bg-white/30 rounded-full hover:bg-white/60 cursor-pointer transition"></div>
        </div>
        
        {/* Sana (O'ng pastki burchakda) */}
        <div className="absolute bottom-10 right-12 md:right-20 text-white/50 text-sm font-medium">
          02.03.2026
        </div>
      </div>
    </section>
  );
};

export default Hero;