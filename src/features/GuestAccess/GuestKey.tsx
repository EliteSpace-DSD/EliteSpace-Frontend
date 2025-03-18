import { Container, Stack, Button, Typography, Paper, Box } from '@mui/material';
import { Link } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const GuestAccessKey = () => {
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
              123456
            </Typography>
          </Box>

          <Typography
            sx={{
              textAlign: 'center',
              maxWidth: '80%',
            }}
          >
            One time code for <strong>Mars Bars</strong>.
            <br />
            Instructions: Enter in the Keypad.
            <br />
            Expires after 60 minutes.
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
