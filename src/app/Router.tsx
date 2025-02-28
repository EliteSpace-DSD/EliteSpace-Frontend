import { BrowserRouter as Router, Routes, Route } from "react-router";
import ButtonUsage from "../components/ButtonUsage";
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ButtonUsage />
              <h1>Elite Space</h1>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
