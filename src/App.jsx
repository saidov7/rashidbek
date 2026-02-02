import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import CarCard from './components/CarCard';
import Services from './components/Services';
import Safety from './components/Safety';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

// Mashinalar ro'yxati (Buni keyinchalik API dan olishingiz mumkin)
const carsData = [
  { id: 1, name: "Ford Fiesta", type: "Economy", image: "https://via.placeholder.com/300x160", seats: 5, transmission: "Auto", age: 21, engine: "1.6L" },
  { id: 2, name: "Nissan Versa", type: "Compact", image: "https://via.placeholder.com/300x160", seats: 5, transmission: "Auto", age: 21, engine: "1.6L" },
  { id: 3, name: "Toyota Corolla", type: "Mid-size", image: "https://via.placeholder.com/300x160", seats: 5, transmission: "Auto", age: 21, engine: "1.8L" },
];

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onLoginClick={() => setLoginOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <Brands />
        
        {/* Mashinalar gridi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20">
          {carsData.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <Services />
        <Safety />
        <Footer />
      </main>

      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}

export default App;