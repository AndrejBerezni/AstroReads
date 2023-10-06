import { useContext } from "react";
import "./styles.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import homeImage from "../../assets/astroreadshomeimage-nobg.png";
import { AuthContext } from "../../AuthContext";
import AnimationFadeInFromAbove from "../../components/animation/AnimationFadeInFromAbove";
import AnimationFadeInFromBelow from "../../components/animation/AnimationFadeInFromBelow";
import AnimationFadeInFromBelowDelay from "../../components/animation/AnimationFadeInFromBelowDelay";
import { mainContainerStyle } from "../../MUIstyles/homeabout";

function Home() {
  const { auth, showSignIn } = useContext(AuthContext);

  const handleClick = () => showSignIn();

  return (
    <Box display="flex" sx={mainContainerStyle}>
      <AnimationFadeInFromAbove>
        <h2 className="title-first">Welcome to</h2>
        <h1 className="title-second">Astro Reads</h1>
      </AnimationFadeInFromAbove>
      <AnimationFadeInFromBelow>
        <img src={homeImage} className="home-image" />
      </AnimationFadeInFromBelow>
      <AnimationFadeInFromBelowDelay>
        <p className="hero-text">
          Prepare for an interstellar journey through the galaxy of books!{" "}
          {auth.isSignedIn ? "N" : "Sign in or n"}avigate the cosmic menu above
          to launch your literary exploration mission!
        </p>
        {!auth.isSignedIn && (
          <Button
            variant="contained"
            className="sign-in-btn"
            onClick={handleClick}
          >
            Sign In
          </Button>
        )}
      </AnimationFadeInFromBelowDelay>
    </Box>
  );
}

export default Home;
