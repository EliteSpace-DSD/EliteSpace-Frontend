// Tenant Dashboard once the tenant is logged in
import Stack from '@mui/material/Stack';
import DashboardCard from '../../features/Dashboard/components/DashboardCard';
import LockUnlock from '../../features/Dashboard/components/LockUnlockCard';
import { Container } from '@mui/material';

const height = { xs: 120, md: 150 };
const otherCardHeight = { xs: 120, md: 300 };

const HomePage = () => {
  return (
    <Container maxWidth='md'>
      <Stack spacing={2}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <LockUnlock height={height} />
          <DashboardCard title='One Tap Reporting' height={height} />
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <DashboardCard title='Smart Package Locker' height={otherCardHeight} />
          <DashboardCard title='Guest Access' height={otherCardHeight} />
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <DashboardCard title='Guest Parking' height={otherCardHeight} />
          <DashboardCard title='Digital Lease' height={otherCardHeight} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomePage;
