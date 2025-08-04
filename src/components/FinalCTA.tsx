import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: '#9EB384' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-3xl md:text-5xl font-bold mb-6 text-white"
          style={{ 
            fontFamily: 'Playfair Display, serif'
          }}
        >
          Start Healing Today for Just ₹4,999
        </h2>
        
        <p 
          className="text-lg md:text-xl mb-8 text-white opacity-90"
          style={{ 
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          Get lifetime access. No diets. No shame. Just real change that lasts.
        </p>
        
        <button 
          className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{ 
            backgroundColor: '#FFDDD2',
            color: '#2B3A55',
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          👉 Join "Break the Cycle" Now
          <ArrowRight className="w-6 h-6" />
        </button>
        
        <div className="mt-8 text-white opacity-75">
          <p style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Join hundreds of Indian women who have already started their healing journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;