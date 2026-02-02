import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Book online, pay online",
      desc: "Complete the booking process A-Z with our easy online system.",
      icon: "💻"
    },
    {
      title: "Guaranteed car reservation",
      desc: "When you book with Car rental, you can be confident your car will be waiting.",
      icon: "🛡️"
    },
    {
      title: "Unparalleled customer service",
      desc: "We're here to help. We pride ourselves in our customer service.",
      icon: "👥"
    },
    {
      title: "No reservation or booking fees",
      desc: "No hidden fees. Free cancellation for most car booking sites.",
      icon: "💳"
    }
  ];

  return (
    <section className="py-20 text-left">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">Unparalleled service</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Whether you are looking for network support service, insurance measurement or 
          reservation, Car rental has it all.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-[#1C1C1C] p-8 rounded-[32px] flex justify-between items-start hover:bg-[#252525] transition-all group border border-transparent hover:border-[#3CB371]/30 cursor-default"
          >
            <div className="max-w-[75%]">
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
            <div className="text-3xl bg-[#111] p-4 rounded-2xl group-hover:bg-[#3CB371] group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; // <--- MUHIM QATOR!