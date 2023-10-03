import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import InfoIcon from "@mui/icons-material/Info";
import "./Navbar.css";

const actions = [
  { icon: <HomeIcon />, name: "Home" },
  { icon: <PermIdentityIcon />, name: "User Page" },
  { icon: <WhatshotIcon />, name: "Trending" },
  { icon: <InfoIcon />, name: "About" },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SpeedDial
      ariaLabel="SpeedDial controlled open example"
      sx={{ position: "fixed", top: "32px", left: "32px" }}
      icon={<SpeedDialIcon />}
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
          onClick={handleClose}
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
