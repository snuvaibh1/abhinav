import React from 'react';
import { Brain, RefreshCw, Award, Utensils, RotateCcw, Dumbbell, Map } from 'lucide-react';

const Curriculum = () => {
  const modules = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Why You Eat When You're Not Hungry",
      description: "Understand the emotional triggers behind binge, stress, and comfort eating."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Body Image Reset",
      description: "Rewire your self-talk, release shame, and rebuild your sense of worth."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Rewire the Reward System",
      description: "End cravings at the root using psychology—not discipline."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Food Freedom, Not Food Fear",
      description: "End the 'good vs. bad food' trap and make peace with eating again."
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Bounce Back After a Bad Day",
      description: "Recovery scripts and rituals so you stop spiraling after setbacks."
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Fitness Habits Without Willpower",
      description: "Build a movement routine that fits your lifestyle and emotions."
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "The Anti-Diet Roadmap",
      description: "Lose weight without punishment, tracking, or obsessing over the scale."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            color: '#2B3A55' 
          }}
        >
          7 Modules That Will{' '}
          <span style={{ color: '#9EB384' }}>
            Transform Your Life
          </span>
        </h2>
        
        <div className="space-y-8">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div 
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: '#9EB384' }}
                >
                  {index + 1}
                </div>
                <div 
                  className="flex-shrink-0"
                  style={{ color: '#9EB384' }}
                >
                  {module.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    color: '#2B3A55' 
                  }}
                >
                  {module.title}
                </h3>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    color: '#2B3A55' 
                  }}
                >
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;