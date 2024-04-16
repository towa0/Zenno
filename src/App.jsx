import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllPages from "./pages/AllPages";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AppsPage from "./pages/AppsPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminPanel from "./pages/AdminPanel.jsx";
import ScrollToTop from "./constants/ScrollToTop.js";
import { AuthProvider } from "./backend/AuthProvider.jsx";
import PrivateRoute from "./backend/PrivateRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<AllPages />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route
            path="/admin"
            element={<PrivateRoute element={AdminPanel} />}
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
