import "./App.css";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import About from "./pages/About/About";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
    <ThemeProvider theme={theme}>
      <h1>AstroReads</h1>
      <Navbar />
      <Home />
      <Trending />
      <About />
      <UserPage />
    </ThemeProvider>
  );
}

export default App;
