import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MockComponent } from "../features/MockFeature/MockComponent";
import SignupPage from "../features/auth/SignupPage";
import HomePage from "./routes/HomePage";
import GuestAccess from "../features/GuestAccess/GuestAccess";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/mock" element={<MockComponent />}></Route>
        <Route
          path="/"
          element={<HomePage />}
        ></Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/guestaccess" element={<GuestAccess />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
