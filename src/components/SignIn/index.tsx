import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { CustomTextField } from "../../MUIstyles/userpage";
import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#242424",
  border: "1px solid var(--secondary)",
  borderRadius: "5px",
  boxShadow: "0px 0px 14px var(--secondary)",
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
};

function SignIn() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Avatar sx={{ m: 0, bgcolor: "var(--primary)", color: "#242424" }}>
          <RocketLaunchIcon />
        </Avatar>
        <h3 style={{ fontFamily: "var(--head-font)", color: "var(--primary)" }}>
          Sign in
        </h3>
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
        <Button
          variant="outlined"
          sx={{
            color: "var(--secondary)",
            borderColor: "var(--secondary)",
            fontFamily: "var(--head-font)",
            "&:hover": { color: "var(--primary)" },
          }}
        >
          Sign In
        </Button>
        <p
          style={{
            marginBottom: "-10px",
            color: "var(--secondary)",
            fontFamily: "var(--text-font)",
          }}
        >
          Don't have an account?
        </p>
        <Link href="#" sx={{ fontFamily: "var(--text-font)" }}>
          {"Sign Up"}
        </Link>
        <p
          style={{
            margin: "-5px",
            color: "var(--secondary)",
            fontFamily: "var(--text-font)",
          }}
        >
          Or
        </p>
        <Button
          sx={{
            color: "var(--secondary)",
            borderColor: "var(--secondary)",
            fontFamily: "var(--head-font)",
            "&:hover": { color: "var(--primary)" },
          }}
          variant="outlined"
        >
          <GoogleIcon sx={{ marginRight: "5px" }} />
          Continue with Google
        </Button>
      </Box>
    </Modal>
  );
}

export default SignIn;
