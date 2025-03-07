import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MockComponent } from "../features/MockFeature/MockComponent";
import HomePage from "./routes/HomePage";
import { SmartPackage } from "../features/SmartPackage/SmartPackage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/mock" element={<MockComponent />}></Route> */}
        // <Route path="/" element={<HomePage />}></Route>
        <Route path="/smartpackage" element={<SmartPackage />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
