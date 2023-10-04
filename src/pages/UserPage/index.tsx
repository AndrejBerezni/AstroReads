import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Outlet } from "react-router";
import { Link, useLocation } from "react-router-dom";

function UserPage() {
  const location = useLocation();
  const getActiveTab = () => {
    if (location.pathname === "/profile") {
      return 0;
    } else if (location.pathname === "/profile/mybooks") {
      return 1;
    } else if (location.pathname === "/profile/wishlist") {
      return 2;
    }
    return 0;
  };

  const activeTab = getActiveTab();

  return (
    <Box sx={{ width: "100%", paddingTop: "100px" }}>
      <Tabs value={activeTab} centered>
        <Tab
          label="Explore"
          sx={{
            color: activeTab === 0 ? "primary.main" : "#f00a60",
            fontWeight: "bold",
          }}
          component={Link}
          to="/profile/explore"
        />
        <Tab
          label="My Books"
          sx={{
            color: activeTab === 1 ? "primary.main" : "#f00a60",
            fontWeight: "bold",
          }}
          component={Link}
          to="/profile/mybooks"
        />
        <Tab
          label="Wishlist"
          sx={{
            color: activeTab === 2 ? "primary.main" : "#f00a60",
            fontWeight: "bold",
          }}
          component={Link}
          to="/profile/wishlist"
        />
      </Tabs>
      <Outlet />
    </Box>
  );
}

export default UserPage;
