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
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setFetching, setUser } from '../stores/userSlice';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function AppRouter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFetching(true));
    const verifyUser = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/auth/verify-user`, {
          method: 'GET',
          credentials: 'include',
        });
        if (response.status !== 200) {
          return null;
        }
        return response.json();
      } catch (error) {
        return null;
      }
    };

    const user = verifyUser();
    user.then((userData) => {
      dispatch(setUser(userData));
      dispatch(setFetching(false));
    });
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
      </Routes>
    </Router>
  );
}

export default AppRouter;
