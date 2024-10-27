import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/login-page";
import Register from "./Pages/register";
import HomePage from "./Pages/HomePage";
import HowItWorks from "./Pages/HowItWorks";
import PricingTier from "./Pages/PricingTier";
import GoalsPage from "./Pages/GoalsPage";
import ExpensesPage from "./Pages/ExpensesPage";
import ReportsPage from "./Pages/ReportsPage";
import EducationPage from "./Pages/EducationPage";
import EducationAdminPage from "./Pages/EducationAdminPage";
import UserOverviewPage from "./Pages/UserOverviewPage";
import AdminOverviewPage from "./Pages/AdminOverviewPage";
import UserManagementPage from "./Pages/UserManagementPage";
import AdminReportsPage from "./Pages/AdminReportsPage";
import AboutSection from "./Pages/AboutSection"; // Nueva importación
import ProtectedRoute from "../src/components/ui/Componentes/Protected/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/prices" element={<PricingTier />} />
        <Route path="/about" element={<AboutSection />} /> {/* Ruta para AboutSection */}

        {/* Rutas protegidas */}
        <Route
          path="/goals"
          element={
            <ProtectedRoute>
              <GoalsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/expenses"
          element={
            <ProtectedRoute>
              <ExpensesPage />
            </ProtectedRoute>
          }
        />
        <Route path="/reports" element={<ReportsPage />} />
        <Route
          path="/education"
          element={
            <ProtectedRoute>
              <EducationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/education-admin"
          element={
            
              <EducationAdminPage />
           
          }
        />
        <Route
          path="/user-overview"
          element={
            
              <UserOverviewPage />
          
          }
        />
        <Route path="/admin-overview" element={<AdminOverviewPage />} />
        <Route path="/user-management" element={<UserManagementPage />} />
        <Route path="/admin-reports" element={<AdminReportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
