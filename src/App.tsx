import "./App.css";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import About from "./pages/About";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
