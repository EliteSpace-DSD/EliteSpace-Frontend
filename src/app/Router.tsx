import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MockComponent } from "../features/MockFeature/MockComponent";


import PasswordReset from "../features/PasswordReset/PasswordReset";



import SignupPage from "../features/auth/SignupPage";

import HomePage from "./routes/HomePage";

function AppRouter() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<MockComponent />}></Route>
        <Route path="/password-reset" element={<PasswordReset />}></Route>

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
