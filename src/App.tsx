import React from 'react';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import CourseIntro from './components/CourseIntro';
import Curriculum from './components/Curriculum';
import WalkAwayWith from './components/WalkAwayWith';
import ForYouIf from './components/ForYouIf';
import Testimonials from './components/Testimonials';
import OfferStack from './components/OfferStack';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5EFE7' }}>
      <Hero />
      <IntroSection />
      <CourseIntro />
      <Curriculum />
      <WalkAwayWith />
      <ForYouIf />
      <Testimonials />
      <OfferStack />
      <Guarantee />
      <FinalCTA />
    </div>
  );
}

export default App;