import "./App.css";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import About from "./pages/About/About";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <h1>AstroReads</h1>
      <Navbar />
      <Home />
      <Trending />
      <About />
      <UserPage />
    </>
  );
}

export default App;
