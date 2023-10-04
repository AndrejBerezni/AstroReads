import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const actions = [
  { icon: <HomeIcon />, name: "Home", to: "/" },
  { icon: <PermIdentityIcon />, name: "User Page", to: "/profile" },
  { icon: <WhatshotIcon />, name: "Trending", to: "/trending" },
  { icon: <InfoIcon />, name: "About", to: "/about" },
];

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLinkClick = (destination: string) => {
    handleClose();
    navigate(destination);
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial controlled open example"
      sx={{ position: "fixed", top: "32px", left: "32px" }}
      icon={<MenuIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="right"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleLinkClick(action.to)}
          sx={{
            backgroundColor: "#29def0",
            "&:hover": {
              backgroundColor: "#f00a60",
              color: "#29def0",
            },
          }}
        />
      ))}
    </SpeedDial>
  );
}

export default Navbar;
