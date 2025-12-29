import React from 'react';
import { Box, Typography, Grid, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiGit,
  SiRedux,
  SiMaterialdesign,SiTailwindcss, SiBootstrap
  
} from 'react-icons/si';

const About = () => {
  const techStack = [
    { name: 'JavaScript', icon: <SiJavascript size={40} />, color: '#F7DF1E' },
    { name: 'React', icon: <SiReact size={40} />, color: '#61DAFB' },
    { name: 'Node.js', icon: <SiNodedotjs size={40} />, color: '#339933' },
    { name: 'MongoDB', icon: <SiMongodb size={40} />, color: '#47A248' },
    { name: 'HTML5', icon: <SiHtml5 size={40} />, color: '#E34F26' },
    { name: 'CSS3', icon: <SiCss3 size={40} />, color: '#1572B6' },
    { name: 'Git', icon: <SiGit size={40} />, color: '#F05032' },
    { name: 'Material UI', icon: <SiMaterialdesign size={40} />, color: '#007FFF' },
    { name: 'Redux', icon: <SiRedux size={40} />, color: '#764ABC' },
    { name: 'Tailwind', icon: <SiTailwindcss size={40} />, color: '#764ABC' },
    { name: 'Bootstrap', icon: <SiBootstrap size={40} />, color: '#764ABC' },
  ];

  const values = [
    "Clean Code",
    "User Experience",
    "Continuous Learning",
    "Collaboration",
    "Problem Solving",
    "Attention to Detail"
  ];

  return (
    <Box id="about" sx={{ px: { xs: 3, md: 8 }, py: 8, backgroundColor: '#000', color: '#fff', }} >
      {/* Header Section */}
      <Typography variant="h3" component={motion.h3} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ fontWeight: 700, mb: 4, color: '#99f2c8', '&:after': { content: '""', display: 'block', width: '60px', height: '4px', backgroundColor: '#99f2c8', mt: 1, } }} > About Me </Typography>

      {/* Bio Section */}
      <Box sx={{ maxWidth: '800px', mb: 6 }}>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          I'm a passionate <Box component="span" sx={{ color: '#99f2c8', fontWeight: 500 }}>Frontend Developer</Box> with 3+ years of experience building responsive, accessible web applications.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          I hold a <Box component="span" sx={{ color: '#99f2c8', fontWeight: 500 }}>BCA and MCA</Box> from Lingaya's Vidyapeeth and currently work at <Box component="span" sx={{ color: '#99f2c8', fontWeight: 500 }}>Ratna Sagar</Box>.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: 'rgba(153, 242, 200, 0.2)', my: 6 }} />

      {/* Technologies Section */}
      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#99f2c8', 
            mb: 4, 
            fontWeight: 600,
            '&:after': {
              content: '""',
              display: 'block',
              width: '60px',
              height: '3px',
              backgroundColor: '#99f2c8',
              mt: 1,
            }
          }}
        >
          Technologies I Work With
        </Typography>

        <Grid container spacing={3}>
          {techStack.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} my={1} key={index}>
              <Box
                component={motion.div}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(153, 242, 200, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  '&:hover': {
                    backgroundColor: 'rgba(153, 242, 200, 0.05)',
                    borderColor: 'rgba(153, 242, 200, 0.3)',
                  }
                }}
              >
                <Box
                  sx={{ 
                    fontSize: '40px',
                    mb: 2,
                    color: tech.color
                  }}
                >
                  {tech.icon}
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontWeight: 500,
                    color: 'white',
                    textAlign: 'center',
                    mt: 1
                  }}
                >
                  {tech.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ borderColor: 'rgba(153, 242, 200, 0.2)', my: 6 }} />

      {/* Values Section */}
      <Box>
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#99f2c8', 
            mb: 4, 
            fontWeight: 600,
            '&:after': {
              content: '""',
              display: 'block',
              width: '60px',
              height: '3px',
              backgroundColor: '#99f2c8',
              mt: 1,
            }
          }}
        >
          My Development Values
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                label={value}
                sx={{
                  px: 2,
                  py: 1.5,
                  backgroundColor: 'rgba(153, 242, 200, 0.1)',
                  color: '#99f2c8',
                  border: '1px solid rgba(153, 242, 200, 0.3)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'rgba(153, 242, 200, 0.2)'
                  }
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;