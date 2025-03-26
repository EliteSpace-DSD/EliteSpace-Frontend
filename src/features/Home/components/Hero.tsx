import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import './Hero.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../stores/store';

export default function Hero() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.currentUser);
  const fetchingUser = useSelector((state: RootState) => state.user.fetching);

  return (
    <Box id='hero'>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant='h1'
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
              color: 'gray',
            }}
          >
            Welcome&nbsp;to&nbsp;
            <Typography
              noWrap={true}
              component='div'
              variant='h1'
              sx={() => ({
                fontSize: 'inherit',
                color: 'primary.light',
              })}
            >
              Elite Space
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'primary.light',
              width: { sm: '100%', md: '100%' },
            }}
          >
            Explore our cutting-edge tenant dashboard, delivering high-quality solutions tailored to
            your needs. Elevate your experience with top-tier features and services. Thank you for
            choosing convenience and excellence.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            useFlexGap
            sx={{ justifyContent: 'center', pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            {user && !fetchingUser ? (
              <Button
                variant='contained'
                color='primary'
                size='small'
                sx={{ minWidth: 'fit-content', zIndex: 1 }}
                onClick={() => navigate('/dashboard')}
              >
                Go to Dashboard
              </Button>
            ) : fetchingUser ? (
              <></>
            ) : (
              <>
                <Button
                  variant='contained'
                  color='primary'
                  size='small'
                  sx={{ minWidth: 'fit-content', zIndex: 1 }}
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  size='small'
                  sx={{ minWidth: 'fit-content', zIndex: 1 }}
                  onClick={() => navigate('/register')}
                >
                  Register
                </Button>
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
