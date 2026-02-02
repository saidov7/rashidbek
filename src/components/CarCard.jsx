import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-[#1C1C1C] p-6 rounded-[32px] text-white flex flex-col gap-4 border border-transparent hover:border-[#3CB371] transition-all group">
      {/* Sarlavha va Tur */}
      <div>
        <h3 className="text-xl font-bold">{car.name}</h3>
        <p className="text-gray-500 text-sm">{car.type}</p>
      </div>
      
      {/* Mashina rasmi */}
      <div className="h-40 flex items-center justify-center">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      {/* Mashina xususiyatlari */}
      <div className="grid grid-cols-2 gap-y-4 text-[11px] text-gray-400 border-t border-gray-800 pt-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">👤</span> {car.seats} Seats
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">⚙️</span> {car.transmission}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">📅</span> {car.age}+ Years
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">⛽</span> {car.engine}
        </div>
      </div>
    </div>
  );
};

export default CarCard;