import React from 'react';
import { Monitor, Unlock, Heart } from 'lucide-react';

const CourseIntro = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "100% Online",
      description: "Learn at your own pace, anywhere"
    },
    {
      icon: <Unlock className="w-8 h-8" />,
      title: "Lifetime Access", 
      description: "Keep coming back whenever you need"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made for Indian Women",
      description: "Culturally aware and sensitive"
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: 'white' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              color: '#2B3A55' 
            }}
          >
            Introducing...{' '}
            <span style={{ color: '#9EB384' }}>
              "Break the Cycle"
            </span>
          </h2>
          
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Montserrat, sans-serif', 
              color: '#2B3A55' 
            }}
          >
            A 7-Module Digital Course To Heal Your Relationship With Food, Mind & Body
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#FFDDD2' }}
            >
              <div 
                className="flex justify-center mb-4"
                style={{ color: '#9EB384' }}
              >
                {feature.icon}
              </div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  color: '#2B3A55' 
                }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#2B3A55' 
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;