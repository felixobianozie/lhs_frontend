import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/pages/Layout";
import AboutPage from "./components/pages/AboutPage";
import HomePage from './components/pages/HomePage';
import AdmissionPage from './components/pages/AdmissionPage';
import FeesPage from './components/pages/FeesPage';
import CalendarPage from './components/pages/CalendarPage';
import AlumniPage from './components/pages/AlumniPage';
import ResultsPage from './components/pages/ResultsPage';
import NoPage from "./components/pages/NoPage";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import DashboardPage from "./components/pages/DashboardPage";
import RequireAuth from "./components/RequireAuth";
import './styles/w3.css';
import './styles/home_carousal.css';
import './styles/home_nav_toggler.css';
import "./styles/main.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public routes */}
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="admission" element={<AdmissionPage />} />
            <Route path="fees" element={<FeesPage />} />
            <Route path="events" element={<CalendarPage />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="alumni" element={<AlumniPage />} />
            <Route path="*" element={<NoPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>
            
          {/* Protected routes */}
          <Route path="/dashboard" element={<RequireAuth />}>
            <Route index element={<DashboardPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
