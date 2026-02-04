import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import CarCard from './components/CarCard';
import Services from './components/Services';
import Safety from './components/Safety';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Reviews from './components/Reviews';


const carsData = [
  { id: 1, name: "Ford Fiesta", type: "Economy Car", image: "/img/car2.png", seats: 5, transmission: "Automatic", age: 21, engine: "1.6 / 2.0 km" },
  { id: 2, name: "Nissan Versa", type: "Compact Car", image: "/img/car2.png", seats: 5, transmission: "Automatic", age: 21, engine: "1.6 / 2.0 km" },
  { id: 3, name: "Toyota Corolla", type: "Mid-size Car", image: "/img/car3.png", seats: 5, transmission: "Automatic", age: 21, engine: "1.6 / 2.0 km" },
  { id: 4, name: "Nissan Rogue", type: "Mid-size SUV", image: "/img/car4.png", seats: 5, transmission: "Automatic", age: 21, engine: "1.6 / 2.0 km" },
  { id: 5, name: "Chevy Traverse", type: "Full-size SUV", image: "/img/car5.png", seats: 8, transmission: "Automatic", age: 21, engine: "2.5 / 3.6 km" },
  { id: 6, name: "Nissan Altima", type: "Full-size Car", image: "/img/car6.png", seats: 5, transmission: "Automatic", age: 21, engine: "2.0 / 2.5 km" },
];

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen min-h-screen bg-[#0F0F0F] text-white font-sans antialiased">
      <Navbar onLoginClick={() => setLoginOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20">
          {carsData.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <Reviews />
        <Brands />
        <Services />
        <Safety />
        <Footer />
      </main>

      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}

export default App;