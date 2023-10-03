import homeImage from "../../assets/astroreadshomeimage-nobg.png";
import "./Home.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import planet1 from "../../assets/planet1.png";
import planet2 from "../../assets/planet2.png";

function Home() {
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
      <motion.div
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <h2 className="title-first">Welcome to</h2>
        <h1 className="title-second">Astro Reads</h1>
      </motion.div>

      <motion.img
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
        src={homeImage}
        className="home-image"
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
          delay: 1,
        }}
      >
        <p className="hero-text">
          Prepare for an interstellar journey through the galaxy of books! Sign
          in or navigate the cosmic menu above to launch your literary
          exploration mission!
        </p>
        <Button variant="contained" className="sign-in-btn">
          Sign In
        </Button>
      </motion.div>
      {/* Animated planets in the background: */}
      <motion.img
        src={planet2}
        className="planet-img"
        initial={{
          rotateY: 180,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.img
        src={planet1}
        className="planet-img"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      />
      <motion.img
        src={planet2}
        className="planet-img"
        initial={{
          rotateY: 180,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.img
        src={planet1}
        className="planet-img"
        initial={{
          rotateY: 180,
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={planet2}
        className="planet-img"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      />
    </Box>
  );
}

export default Home;
