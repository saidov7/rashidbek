import React from 'react';

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="flex justify-between items-center py-5 px-6 md:px-12 bg-[#111] text-white sticky top-0 z-40">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold text-[#3CB371] cursor-pointer">Car rental</div>
        <ul className="hidden md:flex gap-6 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer transition">Categories</li>
          <li className="hover:text-white cursor-pointer transition flex items-center gap-1">
            About Us <span className="text-[10px]">▼</span>
          </li>
          <li className="hover:text-white cursor-pointer transition flex items-center gap-1">
            Help center <span className="text-[10px]">▼</span>
          </li>
        </ul>
      </div>
      
      <div className="flex items-center gap-6">
        <span className="text-sm font-medium hidden sm:block">+1 855 420 0000</span>
        <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer">
          🌙
        </div>
        <button 
          onClick={onLoginClick}
          className="bg-[#3CB371] hover:bg-[#2e8b57] px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition"
        >
          Login <span className="text-xl">→</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;