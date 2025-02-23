import { BrowserRouter as Router, Routes, Route } from "react-router";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<h1>Elite Space</h1>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
