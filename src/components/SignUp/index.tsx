import { useContext, useRef } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext";
import { signUpWithEmail } from "../../firebase-config";
import { modalBox, modalHeader, modalBtn } from "../../MUIstyles/forms";
import { CustomTextField } from "../../MUIstyles/userpage";

function SignUp() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const { show, hideForms, signIn } = useContext(AuthContext);
  const handleClose = () => hideForms();

  const handleSignUp = async () => {
    if (passwordRef.current!.value !== confirmPasswordRef.current!.value) {
      console.log("Passwords do not match");
      return;
    }
    try {
      const email = emailRef.current!.value;
      const password = passwordRef.current!.value;
      const user = await signUpWithEmail(email, password);
      if (user !== undefined && user !== "") {
        signIn(user);
        hideForms();
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      open={show.signUpForm}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalBox}>
        <Avatar sx={{ m: 0, bgcolor: "var(--primary)", color: "#242424" }}>
          <RocketLaunchIcon />
        </Avatar>
        <h3 style={modalHeader}>Sign up</h3>
        <CustomTextField
          label="Email"
          required
          type="email"
          id="email"
          name="email"
          inputRef={emailRef}
        />
        <CustomTextField
          label="Password"
          required
          type="password"
          id="password"
          name="password"
          inputRef={passwordRef}
        />
        <CustomTextField
          label="Confirm Password"
          required
          id="confirm-password"
          name="confirm-password"
          type="password"
          inputRef={confirmPasswordRef}
        />
        <Button variant="outlined" sx={modalBtn} onClick={handleSignUp}>
          Sign Up
        </Button>
      </Box>
    </Modal>
  );
}

export default SignUp;
