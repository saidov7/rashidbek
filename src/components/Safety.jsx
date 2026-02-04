import React from 'react';

const Safety = () => {
  return (
    <section className="relative bg-[#1C1C1C] rounded-[48px] p-8 md:p-16 my-20 overflow-hidden border border-white/5">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Chap tomon: Matnlar va Kartochkalar */}
        <div className="flex-1 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Car rental keeps you safe
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
            The safety of our employees and renters is our number one priority. In addition to being confident your vehicle is cleaned and sanitized every time you rent, you can also feel confident that we will take every opportunity to enhance the health and safety measures currently practiced in our operations.
          </p>

          {/* 3 ta kichik kartochka */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Kartochka 1 */}
            <div className="bg-[#111111]/60 backdrop-blur-sm p-6 rounded-[32px] border border-white/5 flex flex-col gap-8 min-h-[180px]">
              <div className="text-2xl">🧪</div>
              <p className="text-gray-300 text-sm leading-snug font-medium">
                Every car is thoroughly sanitized and cleaned
              </p>
            </div>

            {/* Kartochka 2 */}
            <div className="bg-[#111111]/60 backdrop-blur-sm p-6 rounded-[32px] border border-white/5 flex flex-col gap-8 min-h-[180px]">
              <div className="text-2xl">❤️</div>
              <p className="text-gray-300 text-sm leading-snug font-medium">
                All of our employees wear masks
              </p>
            </div>

            {/* Kartochka 3 */}
            <div className="bg-[#111111]/60 backdrop-blur-sm p-6 rounded-[32px] border border-white/5 flex flex-col gap-8 min-h-[180px]">
              <div className="text-2xl">📅</div>
              <p className="text-gray-300 text-sm leading-snug font-medium">
                We stay up to date with all protocol from the CDC
              </p>
            </div>
          </div>
        </div>

        {/* O'ng tomon: Rasm va Yashil doira */}
        <div className="flex-1 relative flex justify-center items-end min-h-[450px] w-full">
          {/* Orqadagi yashil doira */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand rounded-full"></div>
          
          
          <img 
            src="/img/hodim.png" 
            alt="Safety professional" 
            className="relative z-10 w-full max-w-[350px] object-contain transform translate-y-8"
          />
        </div>

      </div>
    </section>
  );
};

export default Safety;