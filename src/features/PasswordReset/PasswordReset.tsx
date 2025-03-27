import { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Alert, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { useResetPasswordMutation } from './api/passwordresetApi';
import Logo from '../../assets/logo.svg?react';

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const [resetPassword, { isLoading, isError, isSuccess }] = useResetPasswordMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await resetPassword(email).unwrap();
    } catch (error: any) {
      setError(error.data?.message || 'An error occurred');
    }
  };
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      width='100vw'
      bgcolor='background.default'
    >
      <Card sx={{ width: 400, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 1 }}>
            <Logo style={{ height: 150, width: 150 }} fill='#28a2a2' />
          </Box>
          <Typography variant='h5' align='center' mb={2}>
            EliteSpace
          </Typography>
          <Typography variant='h6' align='center' mb={2}>
            Reset Password
          </Typography>

          {isError && <Alert severity='error'>{error || 'Something went wrong'}</Alert>}
          {isSuccess ? (
            <Alert severity='success'>Password reset email sent!</Alert>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                label='Email'
                name='email'
                type='email'
                fullWidth
                margin='normal'
                value={email}
                onChange={handleChange}
                required
              />
              <Button
                type='submit'
                variant='contained'
                fullWidth
                size='large'
                style={{ backgroundColor: '#28a2a2' }}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
          )}

          <Box mt={2} textAlign='center'>
            <Typography variant='body2'>
              Remember your password?{' '}
              <Link component={RouterLink} to='/login' style={{ color: '#1a3b5d' }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PasswordReset;
