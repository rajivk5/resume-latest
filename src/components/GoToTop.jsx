import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './GoToTop.css';

// Register the ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);
  const progressCircleRef = useRef(null);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300 && !isVisible) {
      setIsVisible(true);
      gsap.fromTo(buttonRef.current,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.2)'
        }
      );
    } else if (window.pageYOffset <= 300 && isVisible) {
      gsap.to(buttonRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.3,
        ease: 'power1.in',
        onComplete: () => setIsVisible(false)
      });
    }
  };

  const updateProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPosition = window.pageYOffset;
    const progress = (scrollPosition / (scrollHeight - clientHeight)) * 100;
    
    if (progressCircleRef.current) {
      const circleFill = progressCircleRef.current.querySelector('.circle-fill');
      if (circleFill) {
        circleFill.style.strokeDashoffset = 100 - progress;
      }
    }
  };

  const scrollToTop = () => {
    // Bounce animation
    gsap.to(buttonRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power1.inOut'
    });

    // Proper GSAP scrollTo implementation
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0, autoKill: true },
      ease: 'power2.inOut'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('scroll', updateProgress);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', updateProgress);
    };
  }, [isVisible]);

  return (
    <div 
      className={`go-to-top ${isVisible ? 'visible' : ''}`} 
      ref={buttonRef}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <button 
        onClick={scrollToTop} 
        aria-label="Go to top"
        className="go-top-button"
      >
        <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        </svg>
        <span className="progress-circle" ref={progressCircleRef}>
          <svg className="circle-svg" viewBox="0 0 36 36">
            <path
              className="circle-track"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle-fill"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default GoToTop;