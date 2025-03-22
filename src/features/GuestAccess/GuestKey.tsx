import { Container, Stack, Button, Typography, Paper, Box } from '@mui/material';
import { Link, Navigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';

interface RootState {
  accessCodes: {
    currentCode: string | null;
    guestName: string;
    timeLimit: string;
  };
}

const GuestAccessKey = () => {
  const { currentCode, guestName, timeLimit } = useSelector(
    (state: RootState) => state.accessCodes,
  );
  if (!currentCode) {
    return <Navigate to='/guestaccess' />;
  }

  const convertTimeLimit = (minutes: string): string => {
    if (minutes === '60') return '60 minutes';
    if (minutes === '120') return '2 hours';
    if (minutes === '240') return '4 hours';
    if (minutes === '480') return '8 hours';
    if (minutes === '1440') return '24 hours (1 day)';
    if (minutes === '2880') return '48 hours (2 days)';
    if (minutes === '10080') return '1 week';
    return `${minutes} minutes`;
  };
  return (
    <Container
      sx={{
        height: '600px',
        marginTop: '60px',
      }}
    >
      <Paper
        sx={{
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: { xs: 'auto', sm: 500 },
            height: '100%',
            margin: '0 auto',
            gap: '30px',
          }}
        >
          <Box sx={{ alignSelf: 'flex-start' }}>
            <Link
              to='/guestaccess'
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ArrowBackIcon />
              <Typography>Go Back</Typography>
            </Link>
          </Box>

          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: 500,
              fontSize: '1.5rem',
            }}
          >
            Access Key Generated
          </Typography>

          <Box
            sx={{
              backgroundColor: 'secondary.main',
              padding: '20px 40px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'primary.main',
              width: '70%',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: '700',
                letterSpacing: '0.25rem',
                color: 'primary.main',
              }}
            >
              {currentCode}
            </Typography>
          </Box>

          <Typography
            sx={{
              textAlign: 'center',
              maxWidth: '80%',
            }}
          >
            One time code for <strong>{guestName}</strong>.
            <br />
            Instructions: Enter in the Keypad.
            <br />
            Expires after {convertTimeLimit(timeLimit)}.
          </Typography>

          <Link
            to='/'
            style={{
              textDecoration: 'none',
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant='contained'
              sx={{
                width: '50%',
                height: '50px',
                margin: '0 auto',
                marginTop: '10px',
              }}
            >
              Back to Dashboard
            </Button>
          </Link>
        </Stack>
      </Paper>
    </Container>
  );
};

export default GuestAccessKey;
