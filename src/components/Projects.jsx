import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography, Button, Chip, Stack, Paper } from "@mui/material";
import projects from "./projectData";
import { useState, useEffect } from "react";
import './Projects.css';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      id="projects"
      sx={{
        height: '95vh',
        minHeight: '600px',
        padding: { xs: "20px 0", md: "40px 0" },
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        display: 'flex',
        flexDirection: 'column',
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.3,
          zIndex: 0,
        }
      }}
    >
      {/* Section Title - Made more compact */}
      <Box sx={{ 
        position: "relative", 
        zIndex: 1,
        flexShrink: 0,
        padding: { xs: '0 15px', md: '0 30px' }
      }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            marginBottom: { xs: "15px", md: "30px" },
            textAlign: "center",
            textTransform: "uppercase",
            color: "#fff",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            letterSpacing: "1px",
            position: "relative",
            display: "inline-block",
            width: "100%",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "3px",
              background: "#FF6F61",
              borderRadius: "2px"
            }
          }}
        >
          My <span style={{ color: "#FF6F61" }}>Projects</span>
        </Typography>
      </Box>

      {/* Swiper Slider - Made more compact */}
      <Box sx={{ 
        position: "relative", 
        zIndex: 1,
        maxWidth: "1200px",
        margin: "0 auto",
        padding: { xs: "0 15px", md: "0 30px" },
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          navigation={!isMobile}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          autoplay={{ 
            delay: 6000,
            disableOnInteraction: false
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          style={{ 
            width: "100%", 
            height: '100%',
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Box
                className="project-slide"
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.59)), url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  padding: { xs: "20px", md: "30px" }
                }}
              >
                <Paper 
                  className="project-content"
                  elevation={6}
                  sx={{
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    padding: { xs: '15px', md: '25px' },
                    borderRadius: '10px',
                    width: { xs: '95%', md: '85%' },
                    maxWidth: '800px',
                    margin: '0 auto',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    transform: 'translateY(0)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.4)'
                    }
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: "bold",
                      marginBottom: "10px",
                      color: "#fff",
                      opacity: 0,
                      transform: "translateY(20px)",
                      transition: "all 0.5s ease",
                      transitionDelay: "0.2s",
                      textAlign: 'center'
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <Stack direction="row" spacing={1} sx={{ 
                      marginBottom: "15px",
                      flexWrap: "wrap",
                      gap: "6px",
                      justifyContent: "center",
                      opacity: 0,
                      transform: "translateY(20px)",
                      transition: "all 0.5s ease",
                      transitionDelay: "0.3s",
                      "& .MuiChip-root": {
                        backgroundColor: "rgba(255,111,97,0.2)",
                        color: "#fff",
                        border: "1px solid rgba(255,111,97,0.5)",
                        fontWeight: '500',
                        fontSize: { xs: '0.65rem', md: '0.7rem' },
                        padding: '0 6px',
                        height: '24px'
                      }
                    }}>
                      {project.technologies.map((tech, i) => (
                        <Chip key={i} label={tech} size="small" />
                      ))}
                    </Stack>
                  )}
                  
                  <Typography 
                    variant="body1" 
                    sx={{
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      marginBottom: "20px",
                      color: "#f0f0f0",
                      opacity: 0,
                      transform: "translateY(20px)",
                      transition: "all 0.5s ease",
                      transitionDelay: "0.4s",
                      maxWidth: "700px",
                      lineHeight: "1.5",
                      textAlign: 'center',
                      padding: { xs: '0', md: '0 15px' }
                    }}
                  >
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ 
                    display: "flex",
                    gap: "12px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "all 0.5s ease",
                    transitionDelay: "0.5s"
                  }}>
                    <Button
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      className="project-button"
                      sx={{
                        background: "linear-gradient(45deg, #FF6F61, #FF8A7B)",
                        color: "#fff",
                        fontWeight: "bold",
                        padding: { xs: '8px 16px', md: '8px 20px' },
                        borderRadius: "30px",
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        textTransform: "none",
                        boxShadow: "0 4px 15px rgba(255, 111, 97, 0.4)",
                        transition: "all 0.3s ease",
                        minWidth: { xs: '140px', md: '150px' },
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(255, 111, 97, 0.6)",
                        }
                      }}
                    >
                      View Project
                    </Button>
                    {project.github && (
                      <Button
                        variant="outlined"
                        href={project.github}
                        target="_blank"
                        className="github-button"
                        sx={{
                          color: "#fff",
                          borderColor: "#fff",
                          fontWeight: "bold",
                          padding: { xs: '8px 16px', md: '8px 20px' },
                          borderRadius: "30px",
                          fontSize: { xs: '0.85rem', md: '0.9rem' },
                          textTransform: "none",
                          transition: "all 0.3s ease",
                          minWidth: { xs: '140px', md: '150px' },
                          "&:hover": {
                            borderColor: "#FF6F61",
                            backgroundColor: "rgba(255,111,97,0.1)",
                            transform: "translateY(-2px)"
                          }
                        }}
                      >
                        View Code
                      </Button>
                    )}
                  </Box>
                </Paper>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Projects;