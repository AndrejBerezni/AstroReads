import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import aboutImage from '../../assets/about-img.png';
import './styles.css';
import AnimationFadeInFromAbove from '../../components/animation/AnimationFadeInFromAbove';
import AnimationFadeInFromBelow from '../../components/animation/AnimationFadeInFromBelow';
import { mainContainerStyle } from '../../MUIstyles/homeabout';

function About() {
  return (
    <Box display="flex" sx={mainContainerStyle}>
      <AnimationFadeInFromAbove>
        <img src={aboutImage} className="about-image" />
      </AnimationFadeInFromAbove>
      <AnimationFadeInFromBelow>
        <p className="about-text">
          Thank you for visiting
          <br />
          <span className="about-span">Astro Reads,</span>
          <br />a project brought to life by
          <br />
          <span className="about-span">Andrej Berežni.</span>
          <br />
          If you've enjoyed what you've seen here and would like to explore more
          of my work, please visit my GitHub profile.
        </p>
        <Button
          variant="contained"
          startIcon={<GitHubIcon />}
          sx={{ fontWeight: 'bold', letterSpacing: '2px' }}
          href="https://github.com/AndrejBerezni"
          target="_blank"
        >
          GitHub
        </Button>
      </AnimationFadeInFromBelow>
    </Box>
  );
}

export default About;
