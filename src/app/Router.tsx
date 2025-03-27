import { BrowserRouter as Router, Routes, Route } from 'react-router';
import DigitalLease from './routes/DigitalLease';
import Dashboard from './routes/Dashboard';
import RegisterPage from '../features/auth/Register';
import Login from '../features/Login/Login';
import GuestParking from '../features/GuestParking/GuestParking';
import GuestParkingApproved from '../features/GuestParking/GuestParkingApproved';
import { TenantSupport } from '../features/TenantSupport/TenantSupport';
import GuestAccess from '../features/GuestAccess/GuestAccess';
import GuestAccessKey from '../features/GuestAccess/GuestKey';
import PasswordReset from '../features/PasswordReset/PasswordReset';
import { SmartPackage } from '../features/SmartPackage/SmartPackage';
import { PackageDetails } from '../features/SmartPackage/PackageDetails';
import ResponsiveAppBar from './components/AppBarResponsive';
import ResetPassword from '../features/ResetPassword/ResetPassword';
import LandingPage from '../features/Home/LandingPage';
import ManagementDashboard from '../features/Management/ManagementDashboard';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setFetching, setUser } from '../stores/userSlice';
import { verifyUserData } from '../features/auth/utils';

function AppRouter() {
  const dispatch = useDispatch();

  useEffect(() => {
    verifyUserData(dispatch, setFetching, setUser);
  }, []);

  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/parking' element={<GuestParking />} />
        <Route path='/parking/approved' element={<GuestParkingApproved />} />
        <Route path='/tenant-support' element={<TenantSupport />} />
        <Route path='/guestaccess' element={<GuestAccess />} />
        <Route path='/guestaccess/key' element={<GuestAccessKey />} />
        <Route path='/password-reset' element={<PasswordReset />} />
        <Route path='/smartpackage' element={<SmartPackage />} />
        <Route path='/smartpackage/:id' element={<PackageDetails />} />
        <Route path='/update-password' element={<ResetPassword />}></Route>
        <Route path='/digital-lease' element={<DigitalLease />}></Route>
        <Route path='/manage-complaints' element={<ManagementDashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
