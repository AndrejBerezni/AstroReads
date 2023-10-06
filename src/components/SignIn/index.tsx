import { useContext, useRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { CustomTextField } from "../../MUIstyles/userpage";
import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import {
  modalBox,
  modalHeader,
  modalBtn,
  modalAvatar,
  modalP,
} from "../../MUIstyles/forms";
import { AuthContext } from "../../AuthContext";
import { signInWithGoogle, signInWithEmail } from "../../firebase-config";
import { useNavigate } from "react-router";

function SignIn() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { show, hideForms, showSignUp, signIn } = useContext(AuthContext);
  const handleClose = () => hideForms();
  const handleSignUpClick = () => showSignUp();

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      signIn(user);
      hideForms();
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailSignIn = async () => {
    try {
      const email = emailRef.current!.value;
      const password = passwordRef.current!.value;
      const user = await signInWithEmail(email, password);
      signIn(user);
      hideForms();
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      open={show.signInForm}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalBox}>
        <Avatar sx={modalAvatar}>
          <RocketLaunchIcon />
        </Avatar>
        <h3 style={modalHeader}>Sign in</h3>
        <CustomTextField
          label="Email"
          required
          id="email"
          name="email"
          type="email"
          inputRef={emailRef}
        />
        <CustomTextField
          label="Password"
          required
          id="password"
          name="password"
          type="password"
          inputRef={passwordRef}
        />
        <Button
          variant="outlined"
          sx={{ ...modalBtn, marginBottom: "10px" }}
          onClick={handleEmailSignIn}
        >
          Sign In
        </Button>
        <p style={modalP}>Don't have an account?</p>
        <Link
          href="#"
          sx={{ fontFamily: "var(--text-font)" }}
          onClick={handleSignUpClick}
        >
          {"Sign Up"}
        </Link>
        <p style={modalP}>Or</p>
        <Button sx={modalBtn} variant="outlined" onClick={handleGoogleSignIn}>
          <GoogleIcon sx={{ marginRight: "5px" }} />
          Continue with Google
        </Button>
      </Box>
    </Modal>
  );
}

export default SignIn;
