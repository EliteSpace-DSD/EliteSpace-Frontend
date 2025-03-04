import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MockComponent } from "../features/MockFeature/MockComponent";
import SignupPage from "../features/auth/SignupPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MockComponent />}
        ></Route>
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
