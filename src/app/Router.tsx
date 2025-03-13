import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MockComponent } from "../features/MockFeature/MockComponent";
import { TenantSupport } from "../features/TenantSupport/TenantSupport";

import TestApiCall from "../features/TestApiCall/TestApiCall";

import SignupPage from "../features/auth/SignupPage";

import HomePage from "./routes/HomePage";
import GuestParking from "../features/GuestParking/GuestParking";
import GuestParkingApproved from "../features/GuestParking/GuestParkingApproved";
import Login from "../features/Login/Login";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MockComponent />}></Route>
        <Route path="/tenant-support" element={<TenantSupport />}></Route>
        <Route path="/api-call" element={<TestApiCall />}></Route>
        {/* <Route path="/mock" element={<MockComponent />}></Route> */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/parking" element={<GuestParking />}></Route>
        {/* Fixed only 1 <Route> needed 2 */}
        <Route
          path="/parking/approved"
          element={<GuestParkingApproved />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
