import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { CustomTextField } from "../../MUIstyles/userpage";
import { modalBox, modalHeader, modalBtn } from "../../MUIstyles/forms";

function SignUp() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
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
        <CustomTextField
          label="Confirm Password"
          required
          id="confirm-password"
          name="confirm-password"
          type="confirm-password"
        />
        <Button variant="outlined" sx={modalBtn}>
          Sign Up
        </Button>
      </Box>
    </Modal>
  );
}

export default SignUp;
