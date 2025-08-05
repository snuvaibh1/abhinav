import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, FileText, Heart, MessageCircle, Users, ArrowRight, Sparkles } from 'lucide-react';

const OfferStack = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const offerings = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "7-Module Video Course",
      value: "₹12,000",
      description: "Comprehensive video lessons with lifetime access"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Emotional Eating Recovery Journal",
      value: "₹2,500",
      description: "Guided journaling for emotional breakthrough"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Food Guilt Release Worksheet",
      value: "₹1,500",
      description: "Practical exercises to overcome food guilt"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Self-Love Mirror Ritual",
      value: "₹2,000",
      description: "Daily practices for body acceptance"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Daily WhatsApp Motivation (21 Days)",
      value: "₹3,000",
      description: "Personal support and daily encouragement"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Private Community Support",
      value: "₹4,000",
      description: "Connect with like-minded women on the same journey"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            offerings.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 px-4 overflow-hidden"
      style={{
        backgroundColor: '#A3B78A',
        minHeight: '100vh'
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-300 mr-2 animate-spin-slow" />
            <h2 
              className="text-3xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
            >
              Here's Everything You'll Get
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-300 ml-2 animate-spin-slow" style={{ animationDelay: '1s' }} />
          </div>
          <div 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            for Just ₹4,999
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {offerings.map((item, index) => (
            <div 
              key={index}
              ref={el => itemRefs.current[index] = el}
              className={`group relative transition-all duration-700 transform ${
                visibleItems.includes(index) && !prefersReducedMotion
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : prefersReducedMotion 
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: prefersReducedMotion ? '0ms' : `${index * 100}ms` }}
            >
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/15 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.value}
                    </div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-yellow-300 to-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-1" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/0 via-pink-400/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className={`relative backdrop-blur-xl bg-white/15 border border-white/30 rounded-3xl p-8 mb-8 shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1.2s' }}>
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-orange-400/20" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          </div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 font-semibold text-sm">You Save 80%</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold mb-4 text-white/90" style={{ fontFamily: 'Playfair Display, serif' }}>
              Total Value: <span className="line-through text-white/60">₹24,999</span>
            </p>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent animate-gradient-x" style={{ fontFamily: 'Playfair Display, serif' }}>
              Yours for Just ₹4,999
            </p>
            <div className="mt-6 max-w-md mx-auto">
              <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>Regular Price</span>
                <span>You
