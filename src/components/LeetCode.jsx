import "./LeetCode.css";
import { Box, Typography, Container, useTheme, Link } from '@mui/material';

let LeetCode = () => {
  return (
    <div className="leetcode-container">
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          textAlign: 'center',
          // marginBottom: '2rem',
          // marginTop:'-1rem',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
          '&::after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            background: 'white',
            margin: '1rem auto 1em',
            borderRadius: '2px',
          }
        }}
      >
        Leetcode status
      </Typography>
      <img
        src="https://leetcard.jacoblin.cool/rajivk5?theme=dark&ext=heatmap"
        alt="LeetCode Stats"
        className="leetcode-image"
      />
      <Link
        className="leetcodelink"
        href="https://leetcode.com/u/rajivk5/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          // position: 'fixed', // Changed from absolute to fixed for viewport positioning
          bottom: '20px',
          marginTop: '1rem',
          right: '20px',
          zIndex: 1000,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          padding: '12px 20px',
          backgroundColor: '#FFA116', // LeetCode orange color
          color: '#000000', // Black text for contrast
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '14px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#ffb84d',
            textDecoration: 'none'
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
          }
        }}
      >
        {/* Optional: Add LeetCode icon */}
        <Box
          component="span"
          sx={{
            display: 'inline-flex',
            alignItems: 'center'
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: '4px' }}
          >
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
          View LeetCode Profile →
        </Box>
      </Link>

    </div>
  );
};

export default LeetCode;
