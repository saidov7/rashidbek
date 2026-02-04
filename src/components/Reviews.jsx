import React from 'react';

const Reviews = () => {
  return (
    <section className="my-24 w-full overflow-hidden rounded-[48px] bg-[#1C1C1C] flex flex-col lg:flex-row border border-white/5">
      
      {/* Chap tomon: Matn va Instagram tugmasi */}
      <div className="lg:w-[40%] p-10 md:p-16 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-6">
          <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="google" />
          <span className="text-blue-400 text-sm font-medium">From Google</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-[1.1]">
          Hear what the <br /> community is <br /> saying
        </h2>
        
        {/* Gradient chiziq */}
        <div className="w-full h-[2px] bg-gradient-to-r from-orange-400 via-green-400 to-blue-500 mb-8 opacity-70"></div>
        
        <p className="text-gray-400 text-sm mb-8">More interesting reviews on Instagram</p>
        
        <button className="w-fit px-12 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-xl active:scale-95">
          Instagram
        </button>
      </div>

      {/* O'ng tomon: Yashil fon va Sharhlar */}
      <div className="lg:w-[60%] bg-[#539165] p-10 md:p-16 relative flex flex-col justify-between">
        
        {/* Sharh kartochkalari qatori */}
        <div className="flex gap-6 overflow-hidden">
          {/* Birinchi sharh kartochkasi */}
          <div className="min-w-full sm:min-w-[400px] bg-[#111] rounded-[32px] p-8 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10" 
                  alt="user" 
                />
                <div>
                  <h4 className="text-white font-bold text-lg">Savannah Nguyen</h4>
                  <p className="text-gray-500 text-xs">savannahnguyen@gmail.com</p>
                </div>
              </div>
              <div className="bg-white p-1 rounded-full">
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="google" />
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-8 italic">
              "Sagittis sed tortor, elementum vitae varius sodales consectetur. Vitae arcu ut morbi bibendum ullamcorper feugiat. Venenatis hendrerit cursus egestas sit ornare nunc vulputate aliquam sapien."
            </p>
            
            <div className="flex items-center justify-between border-t border-white/5 pt-6">
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Star rating:</span>
              <div className="flex gap-1 text-green-500">
                {/* 5 ta yulduzcha */}
                {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Pastki qism: Progress bar va Navigation */}
        <div className="mt-12 flex items-center justify-between">
          {/* Progress bar */}
          <div className="flex-1 max-w-[300px] h-[4px] bg-white/20 rounded-full relative">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-white rounded-full"></div>
          </div>
          
          {/* Tugmalar */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center font-bold hover:bg-gray-200 transition-all">
              ←
            </button>
            <button className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center font-bold hover:bg-gray-200 transition-all">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;