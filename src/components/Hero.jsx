
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center h-full w-full max-w-md px-4 animate-slide-in">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
        Discover a safe space to talk, heal, and grow with CalmTalk.
      </h1>
      
      <div className="mt-6">
        <button className="flex items-center gap-2 bg-calmblue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-calmblue-light transition-colors duration-300">
          <span>Get Started</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
