import { useParams } from 'react-router';
import { Stack, Typography, Button, Container, styled, Paper } from '@mui/material';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

interface PackageInfo {
  id: number;
  package: string;
  delive: string;
  status: 'delivered' | 'retrieved';
  deliveryTime: string;
  lockerCode: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [packageDetails, setPackageDetails] = useState<PackageInfo | null>(null);
  const [lockerCode, setLockerCode] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleBackClick = async () => {
    try {
      await fetch(`${API_BASE_URL}/demo/retrieveEarliestPackage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({}),
      });
      navigate('/smartpackage');
    } catch (err) {
      console.error('Failed to update package status:', err);
      navigate('/smartpackage');
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));
  useEffect(() => {
    const fetchLockerCode = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/smartpackage/${id}`, {
          method: 'GET',
          credentials: 'include', // Important: This allows cookies to be sent
        });
        if (!response.ok) {
          throw new Error('Failed to fetch package details');
        }
        const data = await response.json();
        setPackageDetails(data);
        setLockerCode(data.code);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLockerCode();
  }, [id]);

  const convertToLocalDateTime = (isoFormat: string) => {
    const date = new Date(isoFormat);

    const localDate = date.toLocaleDateString([], {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
    const localTime = date.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    return { localDate, localTime };
  };

  return (
    <Container sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Stack sx={{ width: '100%', maxWidth: 400, mt: 2 }} spacing={2}>
        <Button
          variant='contained'
          onClick={handleBackClick}
          color='primary'
          sx={{ alignSelf: 'flex-start' }}
        >
          Back
        </Button>
        {loading ? (
          <Typography>Loading package details...</Typography>
        ) : error ? (
          <Typography color='error'>{error}</Typography>
        ) : packageDetails ? (
          <>
            <Item>
              <Typography>{packageDetails.package}</Typography>
              <Typography>
                Delivered {convertToLocalDateTime(packageDetails.deliveryTime).localDate}
              </Typography>
              <Typography>
                {convertToLocalDateTime(packageDetails.deliveryTime).localTime}
              </Typography>
            </Item>
            <Item sx={{ backgroundColor: '#28a2a2' }}>
              <Typography variant='h6'>Locker Access Code</Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                {lockerCode ? lockerCode : 'Loading...'}
              </Typography>
            </Item>
            <Typography color='white'>
              Instructions: Enter code into the keypad at the package locker. Step back and wait for
              the locker door to open.
            </Typography>
            <Typography color='white'>Locker Access Code expires after 24 hours</Typography>
          </>
        ) : (
          <Typography>No package details available</Typography>
        )}
      </Stack>
    </Container>
  );
};
