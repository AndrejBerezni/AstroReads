import { useContext } from "react";
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

function SignIn() {
  const { show, hideForms } = useContext(AuthContext);
  const handleClose = () => hideForms();

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
        />
        <CustomTextField
          label="Password"
          required
          id="password"
          name="password"
          type="password"
        />
        <Button variant="outlined" sx={{ ...modalBtn, marginBottom: "10px" }}>
          Sign In
        </Button>
        <p style={modalP}>Don't have an account?</p>
        <Link href="#" sx={{ fontFamily: "var(--text-font)" }}>
          {"Sign Up"}
        </Link>
        <p style={modalP}>Or</p>
        <Button sx={modalBtn} variant="outlined">
          <GoogleIcon sx={{ marginRight: "5px" }} />
          Continue with Google
        </Button>
      </Box>
    </Modal>
  );
}

export default SignIn;
