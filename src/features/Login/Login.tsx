import {
  Box,
  TextField,
  Stack,
  InputLabel,
  Link,
  Button,
  Container,
  Typography,
  Alert,
  Paper,
} from '@mui/material';
import { useLoginMutation } from './api/loginApi';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Link as RouteLink } from 'react-router';
import { useDispatch } from 'react-redux';
import { setTenantId } from '../../stores/tenantSlice';
import { setFetching, setUser } from '../../stores/userSlice';
import { verifyUserData } from '../auth/utils';
import Logo from '../../assets/logo.svg?react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setErrorMessage(null);

    if (!email || !password) {
      setErrorMessage('Both email and password are required.');
      return;
    }

    try {
      const response = await login({ email, password }).unwrap();

      if (response.message === 'Signed in successfully') {
        dispatch(setTenantId(response.tenantId)); // Dispatch tenantId to Redux
        verifyUserData(dispatch, setFetching, setUser);
        navigate('/dashboard');
      }
    } catch (error: unknown) {
      dispatch(setUser(null));
      if (error && typeof error === 'object' && 'status' in error) {
        const typedError = error as { status?: number; message: string };
        if (typedError.status === 401) {
          setErrorMessage('Invalid email or password. Please try again.');
        }
        if (typedError.status === 400) {
          setErrorMessage('Check email and verify account to log in.');
        } else {
          setErrorMessage(typedError.message || 'Failed to retrieve session.');
        }
      } else {
        setErrorMessage('An unknown error occurred.');
      }
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Paper
        sx={{
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: '#f8f9fa',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
            width: { xs: 'auto', sm: 600 },
          }}
        >
          <Stack
            component='section'
            sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 1 }}>
              <Logo style={{ height: 150, width: 150 }} fill='#28a2a2' />
            </Box>
            <Typography variant='h3' component='h1' fontWeight={600} sx={{ margin: 0 }}>
              EliteSpace
            </Typography>
          </Stack>
          {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
          <Stack
            sx={{
              height: 380,
              width: { xs: 290, sm: 400 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Stack sx={{ gap: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <InputLabel htmlFor='email' sx={{ width: '100%', color: 'black' }}>
                Email
              </InputLabel>
              <TextField
                size='small'
                variant='outlined'
                sx={{ width: '85%' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Stack>
            <Stack sx={{ gap: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <InputLabel htmlFor='password' sx={{ width: '100%', color: 'black' }}>
                Password
              </InputLabel>
              <TextField
                type='password'
                size='small'
                variant='outlined'
                sx={{ width: '85%' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Link
                component={RouteLink}
                to='/password-reset'
                sx={{ width: '100%', textAlign: 'center', margin: '0 auto' }}
              >
                Forgot your password?
              </Link>
            </Stack>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
              <input type='checkbox' id='remember-me' />
              <label htmlFor='remember-me' style={{ fontSize: 13, paddingTop: 2 }}>
                Remember my login
              </label>
            </Box>
            <Stack
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}
            >
              <Button
                variant='contained'
                sx={{ width: '58%', bgcolor: '#28a2a2', color: 'white', textTransform: 'none' }}
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </Button>
              <Link component={RouteLink} to='/register'>
                Don't have an account? Register to get started
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Login;
