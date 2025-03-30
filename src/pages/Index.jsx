
import React from 'react';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import PhoneMockup from '../components/PhoneMockup';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 ml-0 md:ml-20 relative">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 h-full">
          <div className="container mx-auto h-screen flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-10">
            {/* Left Column - Hero Text */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <Hero />
            </div>
            
            {/* Right Column - Phone Mockup */}
            <div className="w-full md:w-1/2 flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
