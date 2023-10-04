import homeImage from "../../assets/astroreadshomeimage-nobg.png";
import "./styles.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AnimationFadeInFromAbove from "../../components/animation/AnimationFadeInFromAbove";
import AnimationFadeInFromBelow from "../../components/animation/AnimationFadeInFromBelow";
import AnimationFadeInFromBelowDelay from "../../components/animation/AnimationFadeInFromBelowDelay";

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
      <AnimationFadeInFromAbove>
        <h2 className="title-first">Welcome to</h2>
        <h1 className="title-second">Astro Reads</h1>
      </AnimationFadeInFromAbove>
      <AnimationFadeInFromBelow>
        <img src={homeImage} className="home-image" />
      </AnimationFadeInFromBelow>
      <AnimationFadeInFromBelowDelay>
        <p className="hero-text">
          Prepare for an interstellar journey through the galaxy of books! Sign
          in or navigate the cosmic menu above to launch your literary
          exploration mission!
        </p>
        <Button variant="contained" className="sign-in-btn">
          Sign In
        </Button>
      </AnimationFadeInFromBelowDelay>
    </Box>
  );
}

export default Home;
