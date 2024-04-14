import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllPages from "./pages/AllPages";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
