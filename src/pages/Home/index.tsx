import homeImage from "../../assets/astroreadshomeimage-nobg.png";
import "./styles.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

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
          duration: 2,
          type: "spring",
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
          duration: 2,
          type: "spring",
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
    </Box>
  );
}

export default Home;
