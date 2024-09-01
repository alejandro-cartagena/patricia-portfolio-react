// import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import BookCallPage from "./pages/BookCallPage";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { OverlayProvider } from "./context/OverlayContext";

function App() {
  return (
    <OverlayProvider>
      <div className="app" id="hero">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          <Route path="/book" element={<BookCallPage />} />
        </Routes>
        <Footer />
      </div>
    </OverlayProvider>
  );
}

export default App;
