import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarti S., 33",
      emoji: "🧕🏽",
      text: "I used to eat every time I was sad or stressed. This course gave me tools to stop and understand myself. I've lost 5kg and gained peace."
    },
    {
      name: "Sneha R., 27", 
      emoji: "🧘🏽‍♀️",
      text: "No one talks about how much emotions control our eating habits. This changed everything."
    },
    {
      name: "Manisha D., 35",
      emoji: "💗",
      text: "I finally feel in control without guilt or stress. I can enjoy food again!"
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
          What Real Women Say…
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#F5EFE7' }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" style={{ color: '#9EB384' }} />
                ))}
              </div>
              
              <div className="text-4xl text-center mb-4">
                {testimonial.emoji}
              </div>
              
              <p 
                className="text-lg leading-relaxed mb-6 text-center"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#2B3A55' 
                }}
              >
                "{testimonial.text}"
              </p>
              
              <p 
                className="text-center font-semibold"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#9EB384' 
                }}
              >
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;