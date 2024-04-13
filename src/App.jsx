import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllPages from "./pages/AllPages";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="/log-in" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
