import { Stack, TextField, Button, Typography, Container, Paper } from '@mui/material';
import { useNavigate, Link } from 'react-router';
import ParkingLot from './components/ParkingLot';
import { useSubmitParkingInfoMutation } from './guestparkingApi';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../../stores/store';
import { useState } from 'react';
import { updateGuestName, updateLicensePlate } from './parkingSlice';
import { useGetParkingSpacesQuery } from './guestparkingApi';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { BackButton } from '../../app/components/BackButton';

const GuestParking = () => {
  const [submitParkingInfo, { isLoading, isError }] = useSubmitParkingInfoMutation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { selectedParkingSpot, guestName, licensePlate } = useSelector(
    (state: RootState) => state.parking,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: parkingSpaces,
    isLoading: isParkingLoading,
    error: parkingError,
  } = useGetParkingSpacesQuery(null);

  const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
    return typeof error === 'object' && error !== null && 'status' in error;
  };

  const handleParkingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!guestName.trim() || !licensePlate.trim() || !selectedParkingSpot) return;

    try {
      const response = await submitParkingInfo({
        guestName,
        licensePlate,
        parkingId: selectedParkingSpot,
      });
      if (response) {
        navigate('/parking/approved');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Failed to submit parking information.');
    }
  };

  const handleGuestNameUpdate = (value: string) => {
    dispatch(updateGuestName(value));
  };

  const handleLicensePlateUpdate = (value: string) => {
    dispatch(updateLicensePlate(value));
  };

  if (parkingError && isFetchBaseQueryError(parkingError) && parkingError.status === 401) {
    console.error('Unauthorized access: ', parkingError);
    return (
      <Container
        sx={{ height: '600px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
      >
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: 'auto', sm: '500px' },
            height: '50%',
            margin: '0 auto',
            gap: '10px',
          }}
        >
          <Typography
            sx={{ width: '35%', margin: '0 auto', textAlign: 'center', fontWeight: 'bold' }}
          >
            Unauthorized access
          </Typography>
          <Typography sx={{ width: '53%', margin: '0 auto', textAlign: 'center' }}>
            Please login to access this page
          </Typography>
          <Link to='/login'>
            <Button
              type='submit'
              variant='contained'
              sx={{
                height: '50px',
                margin: '0 auto',
                textDecoration: 'none',
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                mt: 3,
              }}
            >
              Login
            </Button>
          </Link>
        </Paper>
      </Container>
    );
  }

  if (isError || errorMessage)
    return (
      <Container
        sx={{ height: '600px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
      >
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: 'auto', sm: '500px' },
            height: '50%',
            margin: '0 auto',
            gap: '10px',
          }}
        >
          <Typography
            sx={{
              width: '200px',
              margin: '0 auto',
              textAlign: 'center',
              fontSize: '1.5rem',
            }}
          >
            Error Occured: {errorMessage ? errorMessage : 'Failed to load parking data.'}
          </Typography>
        </Paper>
      </Container>
    );

  if (isParkingLoading)
    return (
      <Container
        sx={{ height: '600px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: 'auto', sm: '500px' },
            height: '50%',
            margin: '0 auto',
            gap: '10px',
          }}
        >
          <Typography
            sx={{
              width: '200px',
              margin: '0 auto',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            Loading Guest Parking...
          </Typography>
        </Stack>
      </Container>
    );

  return (
    <>
      <BackButton />
      <Container
        sx={{
          height: '650px',
          marginTop: '20px',
        }}
      >
        <Paper
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            width: { xs: 'auto', sm: '500px' },
            height: '100%',
            margin: '0 auto',
            gap: '40px',
          }}
        >
          <form
            onSubmit={handleParkingSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              margin: '0 auto',
              gap: '30px',
              padding: '20px',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: '1.5rem',
                lineHeight: '1.2',
                mt: 2,
              }}
            >
              Guest Parking
            </Typography>
            <Stack
              sx={{
                width: '90%',
                gap: '20px',
              }}
            >
              <Stack
                sx={{
                  width: '100%',
                  gap: '10px',
                }}
              >
                <TextField
                  sx={{
                    width: '90%',
                    margin: '0 auto',
                  }}
                  label='Name'
                  onChange={(event) => handleGuestNameUpdate(event.target.value)}
                  value={guestName}
                  required
                />
              </Stack>
              <Stack
                sx={{
                  width: '100%',
                  gap: '10px',
                }}
              >
                <TextField
                  sx={{
                    width: '90%',
                    margin: '0 auto',
                  }}
                  label='License Plate'
                  onChange={(event) => handleLicensePlateUpdate(event.target.value)}
                  value={licensePlate}
                  required
                />
              </Stack>
            </Stack>

            <ParkingLot parkingSpaces={parkingSpaces} />

            <Button
              type='submit'
              variant='contained'
              sx={{
                height: '50px',
                margin: '0 auto',
                textDecoration: 'none',
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {isLoading ? 'Submitting...' : 'Issue Permit'}
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default GuestParking;
