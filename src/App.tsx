import "./App.css";
import { useContext, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { authentication } from "./firebase-config";
import About from "./pages/About";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import UserPage from "./pages/UserPage";
import Explore from "./pages/UserPage/Explore";
import MyBooks from "./pages/UserPage/MyBooks";
import Wishlist from "./pages/UserPage/Wishlist";

const theme = createTheme({
  palette: {
    primary: {
      main: "#29def0",
      contrastText: "#242424",
    },
  },
});

function App() {
  const { auth, signIn, signOut } = useContext(AuthContext);

  //Handle keeping user signed in on page refresh
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      if (user) {
        signIn(user.uid);
      } else {
        signOut();
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={auth.isSignedIn ? <UserPage /> : <Home />}
          >
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
      </ThemeProvider>
    </>
  );
}

export default App;
