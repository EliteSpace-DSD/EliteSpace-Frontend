import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MockComponent } from "../features/MockFeature/MockComponent";

import TestApiCall from "../features/TestApiCall/TestApiCall";

import SignupPage from "../features/auth/SignupPage";

import HomePage from "./routes/HomePage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MockComponent />}></Route>
        <Route path="/api-call" element={<TestApiCall />}></Route>
        {/* <Route path="/mock" element={<MockComponent />}></Route> */}
        <Route
          path="/"
          element={<HomePage />}
        ></Route>
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
