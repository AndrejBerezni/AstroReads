import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Outlet } from "react-router";
import { Link, useLocation } from "react-router-dom";
import AnimationFadeInFromAbove from "../../components/animation/AnimationFadeInFromAbove";
import { tabStyle, userPageBoxStyle } from "../../MUIstyles/userpage";

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
    <Box sx={userPageBoxStyle}>
      <AnimationFadeInFromAbove>
        <Tabs value={activeTab} centered>
          <Tab
            label="Explore"
            sx={tabStyle(activeTab, 0)}
            component={Link}
            to="/profile/explore"
          />
          <Tab
            label="My Books"
            sx={tabStyle(activeTab, 1)}
            component={Link}
            to="/profile/mybooks"
          />
          <Tab
            label="Wishlist"
            sx={tabStyle(activeTab, 2)}
            component={Link}
            to="/profile/wishlist"
          />
        </Tabs>
        <Outlet />
      </AnimationFadeInFromAbove>
    </Box>
  );
}

export default UserPage;
