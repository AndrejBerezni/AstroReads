import aboutImage from "../../assets/about-img.png";
import "./styles.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

function About() {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        placeItems: "center",
        minHeight: "100vh",
        paddingTop: "100px",
        overflow: "hidden",
      }}
    >
      <motion.img
        animate={{
          scale: 1,
          opacity: 1,
        }}
        initial={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        src={aboutImage}
        className="about-image"
      />
      <motion.div
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
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
          sx={{ fontWeight: "bold", letterSpacing: "2px" }}
          href="https://github.com/AndrejBerezni"
          target="_blank"
        >
          GitHub
        </Button>
      </motion.div>
    </Box>
  );
}

export default About;
