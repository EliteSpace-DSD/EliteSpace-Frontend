import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './routes/HomePage';
import RegisterPage from '../features/auth/Register';
import Login from '../features/Login/Login';
import GuestParking from '../features/GuestParking/GuestParking';
import GuestParkingApproved from '../features/GuestParking/GuestParkingApproved';
import { TenantSupport } from '../features/TenantSupport/TenantSupport';
import PasswordReset from '../features/PasswordReset/PasswordReset';
import { SmartPackage } from '../features/SmartPackage/SmartPackage';
import { PackageDetails } from '../features/SmartPackage/PackageDetails';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/parking' element={<GuestParking />} />
        <Route path='/parking/approved' element={<GuestParkingApproved />} />
        <Route path='/tenant-support' element={<TenantSupport />} />
        <Route path='/password-reset' element={<PasswordReset />} />
        <Route path='/smartpackage' element={<SmartPackage />} />
        <Route path='/smartpackage/:id' element={<PackageDetails />} />
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/parking' element={<GuestParking />}></Route>
        <Route path='/parking/approved' element={<GuestParkingApproved />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
