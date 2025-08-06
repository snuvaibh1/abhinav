import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "" }: { children: React.ReactNode, itemClassName?: string }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
}

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);
  const sectionStartRef = useRef(0);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value.toString());
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    
    // Get section start position
    const sectionElement = scrollerRef.current;
    if (!sectionElement) {
      isUpdatingRef.current = false;
      return;
    }
    
    const sectionRect = sectionElement.getBoundingClientRect();
    const sectionTop = sectionRect.top + scrollTop;
    sectionStartRef.current = sectionTop;

    // Calculate when stacking should start (when section enters viewport)
    const stackingStartPoint = sectionTop - containerHeight * 0.2; // Start when section is 20% into viewport
    const endElement = sectionElement.querySelector('.scroll-stack-end') as HTMLElement;
    const endElementTop = endElement ? endElement.getBoundingClientRect().top + scrollTop : sectionTop + sectionRect.height;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const cardTop = cardRect.top + scrollTop;
      
      // Calculate stacking triggers relative to section start
      const cardTriggerStart = stackingStartPoint + (i * itemDistance * 0.3); // Stagger card triggers
      const cardTriggerEnd = endElementTop - containerHeight * 0.5;
      
      // Calculate scale progress
      const scaleProgress = calculateProgress(scrollTop, cardTriggerStart, cardTriggerStart + containerHeight * 0.8);
      const targetScale = baseScale + (i * itemScale);
      const scale = 1 - scaleProgress * (1 - targetScale);
      
      // Calculate rotation
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      // Calculate blur for depth effect
      let blur = 0;
      if (blurAmount && scaleProgress > 0) {
        blur = Math.min(blurAmount, scaleProgress * blurAmount);
      }

      // Calculate stacking position
      let translateY = 0;
      let zIndex = cardsRef.current.length - i; // Higher z-index for cards that should be on top
      
      if (scrollTop >= cardTriggerStart && scrollTop <= cardTriggerEnd) {
        // Card is in stacking phase
        const stackProgress = calculateProgress(scrollTop, cardTriggerStart, cardTriggerEnd);
        const stackOffset = stackPositionPx + (i * itemStackDistance);
        translateY = scrollTop - cardTop + stackOffset;
        zIndex = cardsRef.current.length + i; // Ensure stacked cards are on top
      } else if (scrollTop > cardTriggerEnd) {
        // Card is past stacking phase
        const stackOffset = stackPositionPx + (i * itemStackDistance);
        translateY = cardTriggerEnd - cardTop + stackOffset;
        zIndex = cardsRef.current.length + i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
        zIndex
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged = !lastTransform || 
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1 ||
        lastTransform.zIndex !== newTransform.zIndex;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter;
        card.style.zIndex = newTransform.zIndex.toString();
        
        lastTransformsRef.current.set(i, newTransform);
      }

      // Check if stacking is complete
      if (i === cardsRef.current.length - 1) {
        const isInStackingPhase = scrollTop >= cardTriggerStart && scrollTop <= cardTriggerEnd;
        if (isInStackingPhase && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInStackingPhase && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    // Use window as the scroll container for smooth page scrolling
    const lenis = new Lenis({
      wrapper: window,
      content: document.documentElement,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      gestureOrientationHandler: true,
      normalizeWheel: true,
      wheelMultiplier: 1,
      touchInertiaMultiplier: 35,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchInertia: 0.6,
    });

    lenis.on('scroll', handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll(".scroll-stack-card")) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    // Initialize cards with proper styling
    cards.forEach((card, i) => {
      // Set initial spacing between cards
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      
      // Optimize for animations
      card.style.willChange = 'transform, filter, z-index';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
      card.style.position = 'relative';
      card.style.zIndex = (cards.length - i).toString(); // Initial z-index
    });

    // Setup smooth scrolling
    setupLenis();

    // Initial transform calculation
    updateCardTransforms();

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
  ]);

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        {/* Spacer for smooth animation completion */}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;