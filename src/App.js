import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import ApplicationPage from "./ApplicationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allapps/*" element={<ApplicationPage />} />
      </Routes>
    </div>
  );
}

export default App;
