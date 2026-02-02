import React from 'react';

const Safety = () => {
  return (
    <section className="bg-[#1C1C1C] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 my-20">
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-6 leading-tight text-white">
          Car rental keeps you safe
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          The safety of our employees and customers is our number one priority. 
          In addition to taking care of your vehicle, we've taken many opportunities 
          to enhance the health and safety measures currently practiced in our operations.
        </p>
        
        {/* Ikonkalar qatori */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center bg-[#111]/50 p-4 rounded-2xl border border-gray-800">
            <span className="block text-2xl mb-2">🧼</span>
            <p className="text-[10px] text-gray-400 uppercase font-bold">Sanitized and cleaned</p>
          </div>
          <div className="text-center bg-[#111]/50 p-4 rounded-2xl border border-gray-800">
            <span className="block text-2xl mb-2">👥</span>
            <p className="text-[10px] text-gray-400 uppercase font-bold">All our employees wear masks</p>
          </div>
          <div className="text-center bg-[#111]/50 p-4 rounded-2xl border border-gray-800">
            <span className="block text-2xl mb-2">✅</span>
            <p className="text-[10px] text-gray-400 uppercase font-bold">We stay up to date with CDC</p>
          </div>
        </div>
      </div>

      {/* Rasm qismi */}
      <div className="flex-1 relative w-full flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-[#3CB371] rounded-full absolute bottom-10 opacity-20 blur-3xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&q=80&w=1000" 
          alt="Safety staff" 
          className="relative z-10 w-full max-w-[400px] rounded-3xl object-cover shadow-2xl" 
        />
      </div>
    </section>
  );
};

export default Safety; // <--- Eng muhimi!