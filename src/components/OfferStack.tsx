import React from 'react';
import { GraduationCap, BookOpen, FileText, Heart, MessageCircle, Users, ArrowRight } from 'lucide-react';

const OfferStack = () => {
  const offerings = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "7-Module Video Course",
      value: "₹12,000"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Emotional Eating Recovery Journal",
      value: "₹2,500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Food Guilt Release Worksheet",
      value: "₹1,500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Self-Love Mirror Ritual",
      value: "₹2,000"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Daily WhatsApp Motivation (21 Days)",
      value: "₹3,000"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Private Community Support",
      value: "₹4,000"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            color: '#2B3A55' 
          }}
        >
          Here's Everything You'll Get for{' '}
          <span style={{ color: '#9EB384' }}>₹4,999</span>
        </h2>
        
        <div className="space-y-6 mb-12">
          {offerings.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="flex-shrink-0"
                  style={{ color: '#9EB384' }}
                >
                  {item.icon}
                </div>
                <h3 
                  className="text-lg md:text-xl font-semibold"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    color: '#2B3A55' 
                  }}
                >
                  {item.title}
                </h3>
              </div>
              <div 
                className="text-lg md:text-xl font-bold"
                style={{ color: '#9EB384' }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="text-center p-8 rounded-2xl mb-8"
          style={{ backgroundColor: '#FFDDD2' }}
        >
          <p 
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              color: '#2B3A55' 
            }}
          >
            Total Value: ₹24,999
          </p>
          <p 
            className="text-3xl md:text-4xl font-bold"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              color: '#9EB384' 
            }}
          >
            Yours for Just ₹4,999
          </p>
        </div>
        
        <div className="text-center">
          <button 
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl font-bold text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            style={{ 
              backgroundColor: '#9EB384',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            YES! I'm Ready to Heal – Enroll Now
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferStack;