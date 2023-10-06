import "./App.css";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import About from "./pages/About";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import Explore from "./pages/UserPage/Explore";
import MyBooks from "./pages/UserPage/MyBooks/MyBooks";
import Wishlist from "./pages/UserPage/Wishlist/Wishlist";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthProvider, AuthContext } from "./AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#29def0",
      contrastText: "#242424",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<UserPage />}>
              <Route index element={<Explore />} />
              <Route path="explore" element={<Explore />} />
              <Route path="mybooks" element={<MyBooks />} />
              <Route path="wishlist" element={<Wishlist />} />
            </Route>
            <Route path="/trending" element={<Trending />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <SignIn />
          <SignUp />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
