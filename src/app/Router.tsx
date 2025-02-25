import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MockComponent } from "../features/MockFeature/MockComponent";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MockComponent />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
