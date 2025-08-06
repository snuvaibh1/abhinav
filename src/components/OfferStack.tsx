import React, { useEffect, useRef, useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  FileText,
  Heart,
  MessageCircle,
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const offerings = [
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: 'Emotional Eating Reset',
    description:
      'Break free from guilt, stress, binge eating, and “starting again Monday.” This time, it’s different.',
  },
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    title: 'Shame-Free Fitness',
    description:
      'Learn movement that heals—not punishes. No yelling. No “beast mode.” Just consistency.',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: 'No More Diet Starts',
    description:
      'Understand your body cues so deeply, you never need another plan, tracker, or diet again.',
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    title: 'Therapy-Grade Curriculum',
    description:
      'Backed by psychology and coaching. Designed to rewire beliefs, behavior, and biology.',
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: 'Guided By Experts',
    description:
      'You’ll be mentored by certified coaches—not influencers—who’ve helped 800+ women before you.',
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: 'Zero-Judgment Community',
    description:
      'Healing is hard alone. You’ll grow alongside Indian women who get it.',
  },
  {
    icon: <FileText className="w-8 h-8 text-white" />,
    title: 'Habit Rebuild System',
    description:
      'We teach you how to stick to habits, even when you’re busy, sad, PMSing, or unmotivated.',
  }
];

const OfferStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          offerings.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.4
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#F7F5F2]">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl font-bold mb-16"
          style={{
            fontFamily: 'Playfair Display, serif',
            color: '#2B3A55'
          }}
        >
          What You’ll <span style={{ color: '#9EB384' }}>Experience Inside</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                willChange: 'transform, opacity'
              }}
            >
              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#9EB384' }}
                >
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#2B3A55'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#2B3A55'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-[#9EB384] hover:bg-[#7c9d6c] transition-all duration-300">
            Join Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferStack;
