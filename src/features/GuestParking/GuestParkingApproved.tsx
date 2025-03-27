import { Box, Stack, Button, Typography } from '@mui/material';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import { type RootState } from '../../stores/store';
import { formatExpirationDate } from './utils/formatExpirationDate';
import { formatExpirationTime } from './utils/formatExpirationTime';

const GuestParkingApproved = () => {
  const { guestName, licensePlate, selectedParkingSpot } = useSelector(
    (state: RootState) => state.parking,
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        height: '660px',
      }}
    >
      <Stack
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
          border: '3px solid #e0e0e0',
          padding: '3rem',
        }}
      >
        <Typography variant='h4' gutterBottom>
          Permit Issued
        </Typography>
        <Typography variant='body1'>
          <strong>Guest Name:</strong> {guestName}
        </Typography>
        <Typography variant='body1'>
          <strong>License Plate:</strong> {licensePlate}
        </Typography>
        <Typography variant='body1'>
          <strong>Parking spot:</strong> {selectedParkingSpot}
        </Typography>
        <Typography variant='body1'>
          <strong>Expiration Date:</strong> {formatExpirationDate()}
        </Typography>
        <Typography variant='body1'>
          <strong>Expiration Time:</strong> {formatExpirationTime()}
        </Typography>
        <Link
          to='/dashboard'
          style={{
            textDecoration: 'none',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button variant='contained'>Go Back</Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default GuestParkingApproved;
