import { BrowserRouter as Router, Routes, Route } from "react-router";
import RegisterPage from "../features/auth/Register";
import HomePage from "./routes/HomePage";
import GuestParking from "../features/GuestParking/GuestParking";
import GuestParkingApproved from "../features/GuestParking/GuestParkingApproved";
import Login from "../features/Login/Login";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        ></Route>
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/parking"
          element={<GuestParking />}
        ></Route>
        <Route
          path="/parking/approved"
          element={<GuestParkingApproved />}
        ></Route>
        <Route
          path="/login"
          element={<Login />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
