import React from 'react';

const Brands = () => {
  const brands = ["FORD", "NISSAN", "TOYOTA", "DODGE", "HYUNDAI", "Jeep"];
  return (
    <section className="py-16 text-center">
      <p className="text-gray-500 mb-8 uppercase tracking-widest text-sm">
        More than 50 brands of cars
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
        {brands.map((brand) => (
          <span key={brand} className="text-2xl font-black text-white">{brand}</span>
        ))}
      </div>
    </section>
  );
};

export default Brands; // <--- MANA SHU QATOR BO'LISHI SHART!