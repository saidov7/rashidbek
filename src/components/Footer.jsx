import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-gray-800 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 text-left">
        {/* Logo va haqida */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-[#3CB371] mb-4">Car rental</h2>
          <p className="text-gray-500 text-xs leading-loose">
            Car rental offers a wide range of cars including economy, compact, sports and vans.
          </p>
        </div>

        {/* Menyu 1 */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Main</h4>
          <ul className="text-gray-500 text-sm space-y-4">
            <li className="hover:text-white cursor-pointer">My Bookings</li>
            <li className="hover:text-white cursor-pointer">Reservation</li>
          </ul>
        </div>

        {/* Menyu 2 */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Categories</h4>
          <ul className="text-gray-500 text-sm space-y-4">
            <li className="hover:text-white cursor-pointer">Compact</li>
            <li className="hover:text-white cursor-pointer">Sports cars</li>
            <li className="hover:text-white cursor-pointer">Vans</li>
          </ul>
        </div>

        {/* Menyu 3 */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Company</h4>
          <ul className="text-gray-500 text-sm space-y-4">
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Reviews</li>
            <li className="hover:text-white cursor-pointer">Contact us</li>
          </ul>
        </div>

        {/* Manzil */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Our Locations</h4>
          <p className="text-gray-500 text-xs">
            2500 Randolph Rd, Charlotte, North Carolina(NC), 28207
          </p>
        </div>
      </div>

      {/* Pastki chiziqdan keyingi qism */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-gray-900 pt-8">
        <p>© 2026 Car rental. All Rights Reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span>Contact: +1 855 420 0000</span>
          <div className="flex gap-4">
            <span className="hover:text-[#3CB371] cursor-pointer">Instagram</span>
            <span className="hover:text-[#3CB371] cursor-pointer">Twitter</span>
            <span className="hover:text-[#3CB371] cursor-pointer">Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // <--- Eng muhim qismi mana shu!