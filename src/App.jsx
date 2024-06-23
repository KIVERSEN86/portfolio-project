import "./App.css";
import Home from "./pages/Home";
import ProjectPage from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project/id" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
