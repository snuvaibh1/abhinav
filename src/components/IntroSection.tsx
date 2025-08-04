import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-3xl md:text-5xl font-bold mb-8"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            color: '#2B3A55' 
          }}
        >
          You're Not Broken.{' '}
          <span style={{ color: '#9EB384' }}>
            You Just Need the Right Path.
          </span>
        </h2>
        
        <div 
          className="text-lg md:text-xl leading-relaxed space-y-6 max-w-3xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            color: '#2B3A55' 
          }}
        >
          <p>
            If you feel stuck in a cycle of bingeing, restricting, guilt, and "starting again Monday"…
          </p>
          <p className="font-semibold">
            You're not alone — and you're not the problem.
          </p>
          <p>
            You've tried gym workouts, strict plans, calorie counting — but none addressed the real issue:
          </p>
          <p 
            className="text-xl md:text-2xl font-bold p-6 rounded-2xl"
            style={{ backgroundColor: '#FFDDD2' }}
          >
            Your emotions, mindset, and the pressure to be "perfect."
          </p>
          <p className="text-xl md:text-2xl font-bold">
            This isn't a diet program. It's emotional healing for Indian women who are done with shame-based fitness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;