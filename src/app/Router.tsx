import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MockComponent } from "../features/MockFeature/MockComponent";
import SignupPage from "../features/auth/SignupPage";
import HomePage from "./routes/HomePage";
import GuestParking from "../features/GuestParking/GuestParking";
import GuestParkingApproved from "../features/GuestParking/GuestParkingApproved";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/mock" element={<MockComponent />}></Route> */}
        <Route
          path="/"
          element={<HomePage />}
        ></Route>
        <Route
          path="/signup"
          element={<SignupPage />}
        />
        <Route
          path="/parking"
          element={<GuestParking />}
        ></Route>
        <Route
          path="/parking/approved"
          element={<GuestParkingApproved />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
