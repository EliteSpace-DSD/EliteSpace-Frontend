import { BrowserRouter as Router, Routes, Route } from "react-router";
import RegisterPage from "../features/Auth/Register";
import Login from "../features/Login/Login";
import GuestParking from "../features/GuestParking/GuestParking";
import GuestParkingApproved from "../features/GuestParking/GuestParkingApproved";
import { TenantSupport } from "../features/TenantSupport/TenantSupport";
import PasswordReset from "../features/PasswordReset/PasswordReset";
import Dashboard from "../features/Dashboard/Dashboard";


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/parking' element={<GuestParking />}/>
        <Route path='/parking/approved' element={<GuestParkingApproved />}/>
        <Route path="/tenant-support" element={<TenantSupport />}/>
        <Route path="/password-reset" element={<PasswordReset />}></Route>
        
      </Routes>
    </Router>
  );
}

export default AppRouter;

    