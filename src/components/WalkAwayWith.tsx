import React from 'react';
import { Heart, Shield, Zap, UserCheck } from 'lucide-react';

const WalkAwayWith = () => {
  const outcomes = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "A calm, balanced mindset around food"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Emotional tools to end guilt & self-blame"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Consistency without burnout or pressure"
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "A body you trust and care for — not fight against"
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: 'white' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            color: '#2B3A55' 
          }}
        >
          You'll Walk Away With…
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="flex items-center gap-6 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#FFDDD2' }}
            >
              <div 
                className="flex-shrink-0"
                style={{ color: '#9EB384' }}
              >
                {outcome.icon}
              </div>
              <h3 
                className="text-xl md:text-2xl font-bold"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#2B3A55' 
                }}
              >
                {outcome.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WalkAwayWith;