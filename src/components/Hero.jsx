import React, { useEffect, useRef } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const heroRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' },
        '-=0.6'
      );
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1f4037, #99f2c8)',
        color: '#ffffff',
        textAlign: 'center',
        padding: 2,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 75% 50%, rgba(153, 242, 200, 0.05) 0%, transparent 60%)',
          zIndex: 0,
        }
      }}
    >
      {/* Hero Heading */}
      <div ref={heroRef} style={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '4rem' },
            marginBottom: 2,
            color: '#ffffff',
          }}
          gutterBottom
        >
          Hi, I'm <span style={{ color: '#99f2c8', textShadow: '0 0 10px rgba(153, 242, 200, 0.3)' }}>Rajiv Kumar</span>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            marginBottom: 4,
            fontSize: { xs: '1.2rem', md: '1.8rem' },
            minHeight: '2.5rem',
            color: '#bbbbbb',
          }}
        >
          <TypeAnimation
            sequence={[
              'A Frontend Developer Crafting Amazing Experiences',
              2000,
              'Building Scalable Web Applications',
              2000,
              'Passionate About UI/UX Design',
              2000,
            ]}
            speed={60}
            repeat={Infinity}
            style={{ display: 'inline-block',color:'white' }}
          />
        </Typography>
      </div>

      {/* Call-to-Action Buttons */}
      <div ref={buttonRef} style={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#99f2c8',
              color: '#121212',
              width:'65%',
              padding: '12px 28px',
              fontWeight: 600,
              borderRadius: '30px',
              textTransform: 'capitalize',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#b8f5d9',
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 20px rgba(153, 242, 200, 0.4)',
              },
            }}
            href="#contact"
          >
            Contact Me
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'rgba(153, 242, 200, 0.5)',
              color: '#99f2c8',
              padding: '12px 28px',
              width:'65%',
              fontWeight: 600,
              borderRadius: '30px',
              textTransform: 'capitalize',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(153, 242, 200, 0.08)',
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 20px rgba(153, 242, 200, 0.2)',
                borderColor: '#99f2c8',
              },
            }}
            href="https://drive.google.com/file/d/1UyRJy50KaYFSApTw019-H7uzH5BMxDu6/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </Button>
        </Box>
      </div>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '12px',
            height: '40px',
            border: '2px solid rgb(255, 255, 255)',
            borderRadius: '50px',
            position: 'relative',
          }}
        >
          <motion.div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#99f2c8',
              borderRadius: '50%',
              position: 'absolute',
              top: '5px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;