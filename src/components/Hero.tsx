import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Silk from './Silk';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-8 md:py-24 overflow-hidden">
      {/* Animated Silk Background */}
      <div className="absolute inset-0 z-[-1]">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Foreground Content */}
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            color: '#2B3A55' 
          }}
        >
          You're Not Lazy.{' '}
          <span 
            className="block mt-1"
            style={{ color: '#9EB384' }}
          >
            You're Just Trapped in the Cycle.
          </span>
        </h1>
        
        <p 
          className="text-base md:text-xl lg:text-2xl mb-6 leading-relaxed max-w-3xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            color: '#2B3A55' 
          }}
        >
          Break the Loop of Diet → Binge → Guilt — and Build a Lifestyle You Can Stick to{' '}
          <span className="font-semibold">(Without Willpower or Self-Hate).</span>
        </p>

        {/* VSL Placeholder */}
        <div className="mb-6 max-w-4xl mx-auto">
          <div 
            className="relative aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer hover:shadow-3xl transition-all duration-300"
            style={{ backgroundColor: '#2B3A55' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: '#9EB384' }}
              >
                <div className="w-0 h-0 border-l-[16px] md:border-l-[20px] border-r-0 border-t-[10px] md:border-t-[12px] border-b-[10px] md:border-b-[12px] border-l-white border-t-transparent border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 
                className="text-white text-base md:text-xl font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Watch: How Sarah Broke Her 10-Year Binge Cycle
              </h3>
              <p 
                className="text-white/90 text-xs md:text-base"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                See the exact emotional healing process that changed everything
              </p>
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
              12:34
            </div>
          </div>
        </div>

        <button 
          className="inline-flex items-center gap-3 px-10 py-3 md:px-10 md:py-5 text-base md:text-xl font-bold text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-4 w-full max-w-sm md:w-auto"
          style={{ 
            backgroundColor: '#9EB384',
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          👉 Join the Program – Just ₹4,999
          <ArrowRight className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-xs md:text-base">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" style={{ color: '#9EB384' }} />
            <span style={{ color: '#2B3A55', fontFamily: 'Montserrat, sans-serif' }}>
              100% Online
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" style={{ color: '#9EB384' }} />
            <span style={{ color: '#2B3A55', fontFamily: 'Montserrat, sans-serif' }}>
              Lifetime Access
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" style={{ color: '#9EB384' }} />
            <span style={{ color: '#2B3A55', fontFamily: 'Montserrat, sans-serif' }}>
              Made for Indian Women
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
