import React from 'react';

const Hero = () => {
  return (
    <section className="mt-6">
      <div className="relative h-[450px] rounded-[40px] overflow-hidden">
        {/* Mashina rasmi - public papkaga car-bg.jpg deb saqlang */}
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover" 
          alt="Hero car" 
        />
        
        {/* Overlay matnlari */}
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-6">
          <h2 className="text-4xl font-bold mb-2">Compact cars</h2>
          <p className="max-w-md text-center text-sm text-gray-200 mb-8 leading-relaxed">
            Rent cars to find your special feelings and where you can enjoy your ride.
          </p>
          
          {/* Search bar */}
          <div className="bg-white rounded-full p-2 flex items-center w-full max-w-2xl shadow-2xl">
            <input 
              type="text" 
              placeholder="Find the car of your dreams" 
              className="flex-1 px-6 text-black outline-none placeholder:text-gray-400" 
            />
            <button className="bg-[#3CB371] p-4 rounded-full text-white hover:bg-[#2e8b57] transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
          </div>
          
          {/* Slider nuqtalari */}
          <div className="absolute bottom-8 flex gap-2">
            <div className="w-8 h-1 bg-white rounded-full"></div>
            <div className="w-2 h-1 bg-white/50 rounded-full"></div>
            <div className="w-2 h-1 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;