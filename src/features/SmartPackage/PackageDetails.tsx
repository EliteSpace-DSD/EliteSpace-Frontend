import { useParams } from 'react-router';
import { Stack, Typography, Button, Container, styled, Paper } from '@mui/material';
import { useNavigate } from 'react-router';

interface mockInformation {
  id: number;
  package: string;
  deliveredDatetime: string;
  status: 'delivered' | 'retrieved';
}

const mockInformation = [
  {
    id: 1,
    package: 'Package #1',
    deliveredDateTime: '2025-03-18T20:19:55.754Z',
    status: 'delivered',
  },
  {
    id: 2,
    package: 'Package #2',
    deliveredDateTime: '2025-03-19T01:06:20.040Z',
    status: 'retrieved',
  },
];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const packageDetails = mockInformation.find((pkg) => pkg.id === Number(id));

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/smartpackage');
  };

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
    <>
      <Container
        sx={{
          mt: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Stack sx={{ width: '100%', maxWidth: 400, mt: 2 }} spacing={2}>
          <Button variant='outlined' onClick={handleBackClick} sx={{ alignSelf: 'flex-start' }}>
            Back
          </Button>
          <Item>
            <Typography>{packageDetails?.package}</Typography>
            <Typography>
              Delivered {convertToLocalDateTime(packageDetails?.deliveredDateTime ?? '').localDate}
            </Typography>
            <Typography>
              {convertToLocalDateTime(packageDetails?.deliveredDateTime ?? '').localTime}
            </Typography>
          </Item>
          <Item sx={{ backgroundColor: '#28a2a2' }}>
            <Typography variant='h6'>Locker Access Code</Typography>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              {/* Code from backend goes here */} 12345
            </Typography>
          </Item>
          <Typography>
            Instructions: Enter code into the keypad at the package locker. Step back and wait for
            the locker door to open.
          </Typography>
          <Typography>Locker Access Code expires after 24 hours</Typography>
        </Stack>
      </Container>
    </>
  );
};
