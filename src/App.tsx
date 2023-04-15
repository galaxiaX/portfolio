import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import IndexPage from "./pages/IndexPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/project" element={<ProjectPage />} />
      <Route path="*" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
