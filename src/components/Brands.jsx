import React from 'react';

const Brands = () => {
  // Logotiplar ro'yxati
  const brands = [

{ name: 'Ford', src: '/img/ford.png' },
    { name: 'Nissan', src: '/img/nissan.png' },
    { name: 'Toyota', src: '/img/tayota.png' },
    { name: 'Dodge', src: '/img/dodge.png' },
    { name: 'Hyundai', src: '/img/hyundio.png' },
    { name: 'Jeep', src: '/img/Jeep.png' },
  ];

  return (
    <section className="py-12 w-full">
      {/* Sarlavha - Chapga tekislangan */}
      <h3 className="text-white text-xl font-medium mb-10 pl-2">
        More than 50 brands of cars
      </h3>

      {/* Logotiplar konteyneri - Bir qatorda, chapdan boshlab */}
      <div className="flex flex-wrap items-center justify-between gap-8 md:gap-4 px-2">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center justify-center">
            <img 
              src={brand.src} 
              alt={brand.name} 
              className="h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-100 hover:opacity-80 transition-opacity"
              // brightness-0 invert - logotipni toza oq rangga o'tkazadi
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;

