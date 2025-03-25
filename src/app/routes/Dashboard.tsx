// Tenant Dashboard once the tenant is logged in
import Stack from '@mui/material/Stack';
import DashboardCard from '../../features/Dashboard/components/DashboardCard';
import LockUnlock from '../../features/Dashboard/components/LockUnlockCard';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';

const height = { xs: 120, md: 150 };
const otherCardHeight = { xs: 120, md: 300 };

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);

  return (
    <Container maxWidth='md'>
      {user && <h1>Welcome, {user.firstName}!</h1>}
      <Stack spacing={2}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <LockUnlock height={height} />
          <DashboardCard title='Tenant Support' height={height} path='/tenant-support' />
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <DashboardCard
            title='Smart Package Locker'
            height={otherCardHeight}
            path='/smartpackage'
          />
          <DashboardCard title='Guest Access' height={otherCardHeight} path='/guestaccess' />
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <DashboardCard title='Guest Parking' height={otherCardHeight} path='/parking' />
          <DashboardCard title='Digital Lease' height={otherCardHeight} path='/digital-lease' />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Dashboard;
