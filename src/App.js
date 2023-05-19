import { Route, Routes } from "react-router-dom";
import ApplicationPage from "./ApplicationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/*" element={<ApplicationPage />} />
      </Routes>
    </div>
  );
}

export default App;
