
import React from 'react';

const PhoneMockup = () => {
  return (
    <div className="relative flex items-center justify-center animate-fade-in">
      {/* Circle Background */}
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-calmblue opacity-20"></div>
      
      {/* Phone Mockup */}
      <div className="relative w-[220px] h-[440px] md:w-[250px] md:h-[500px] rounded-[40px] bg-white border-8 border-calmblue shadow-xl overflow-hidden z-10">
        {/* Phone Content (empty white screen) */}
        <div className="w-full h-full bg-white"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
