import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import "./MyEducation.css";

const MyEducation = () => {
  const theme = useTheme();
  const educationData = [
    {
      degree: 'BCA',
      institution: "Lingaya's Vidyapeeth, Faridabad",
      cgpa: '8.29 CGPA',
      description: `Completed my Bachelor's in Computer Applications (BCA) from Lingaya's Vidyapeeth, Faridabad. 
        The program helped me master programming languages, algorithms, and data structures.`,
      color: 'rgba(0, 0, 0, 0.8)',
      icon: '🎓',
    },
    {
      degree: 'MCA',
      institution: "Lingaya's Vidyapeeth, Faridabad",
      cgpa: '8.69 CGPA',
      description: `Completed my Master's in Computer Applications (MCA) from Lingaya's Vidyapeeth, Faridabad. 
        The program enhanced my knowledge in advanced topics like software engineering, databases, and web development.`,
      color: 'rgba(0, 0, 0, 0.8)',
      icon: '📚',
    },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1f4037, #99f2c8)',
        padding: '4rem 0',
        fontFamily: 'Inter, sans-serif',
      }}
      id="education"
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '4rem',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              background: 'white',
              margin: '1rem auto 0',
              borderRadius: '2px',
            }
          }}
        >
          My Education
        </Typography>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            height: '100%',
            width: '2px',
            background: 'rgba(255, 255, 255, 0.3)',
            left: '50%',
            transform: 'translateX(-50%)',
            [theme.breakpoints.down('md')]: {
              display: 'none'
            }
          }
        }}>
          {educationData.map((item, index) => (
            <Box 
              key={index}
              className="education-card"
              sx={{
                position: 'relative',
                width: { xs: '100%', md: 'calc(50% - 1rem)' },
                alignSelf: index % 2 === 0 ? { md: 'flex-start' } : { md: 'flex-end' },
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
                }
              }}
            >
              <Box
                sx={{
                  background: item.color,
                  color: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #99f2c8, #1f4037)',
                  }
                }}
              >
                <Box sx={{
                  position: 'absolute',
                  right: '2rem',
                  top: '2rem',
                  fontSize: '2rem',
                  opacity: 0.2,
                  zIndex: 0
                }}>
                  {item.icon}
                </Box>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    marginBottom: '1rem',
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    '&::before': {
                      content: '" "',
                      display: 'inline-block',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#99f2c8',
                      marginRight: '0.5rem'
                    }
                  }}
                >
                  {item.degree} - {item.institution}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    marginBottom: '1rem',
                    position: 'relative',
                    zIndex: 1,
                    background: 'rgba(255, 255, 255, 0.1)',
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {item.cgpa}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    lineHeight: '1.7',
                    position: 'relative',
                    zIndex: 1,
                    opacity: 0.9
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
              <Box sx={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#99f2c8',
                border: '4px solid #1f4037',
                top: '50%',
                left: { xs: '20px', md: index % 2 === 0 ? 'calc(100% + 10px)' : 'unset' },
                right: { xs: 'unset', md: index % 2 === 0 ? 'unset' : 'calc(100% + 10px)' },
                transform: 'translateY(-50%)',
                [theme.breakpoints.down('md')]: {
                  left: '20px',
                  top: '3rem'
                }
              }} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MyEducation;