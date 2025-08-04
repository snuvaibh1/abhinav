import React from 'react';
import { X, Check } from 'lucide-react';

const ForYouIf = () => {
  const notFor = [
    "You want another restrictive diet",
    "You're looking for quick weight loss hacks", 
    "You expect results without doing emotional work"
  ];

  const perfectFor = [
    "You've tried it all and nothing sticks",
    "You want to stop feeling ashamed after eating",
    "You want to heal your body image and emotional patterns",
    "You want food freedom, not food obsession"
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Not For You */}
          <div 
            className="p-8 rounded-2xl shadow-lg"
            style={{ backgroundColor: 'white' }}
          >
            <h3 
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              style={{ 
                fontFamily: 'Playfair Display, serif', 
                color: '#2B3A55' 
              }}
            >
              🚫 This Is NOT for You If…
            </h3>
            
            <div className="space-y-4">
              {notFor.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p 
                    className="text-lg"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif', 
                      color: '#2B3A55' 
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Perfect For You */}
          <div 
            className="p-8 rounded-2xl shadow-lg"
            style={{ backgroundColor: '#FFDDD2' }}
          >
            <h3 
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              style={{ 
                fontFamily: 'Playfair Display, serif', 
                color: '#2B3A55' 
              }}
            >
              ✅ This Is PERFECT for You If…
            </h3>
            
            <div className="space-y-4">
              {perfectFor.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#9EB384' }} />
                  <p 
                    className="text-lg"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif', 
                      color: '#2B3A55' 
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYouIf;