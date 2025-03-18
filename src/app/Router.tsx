import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './routes/HomePage';
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
import AppBarResponsive from './components/AppBarResponsive';

function AppRouter() {
  return (
    <Router>
      <AppBarResponsive />
      <Routes>
        <Route path='/' element={<HomePage />} />
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
      </Routes>
    </Router>
  );
}

export default AppRouter;
