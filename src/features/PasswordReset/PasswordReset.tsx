import { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Alert, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router';

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('__supabase reset functionality?', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error sending password reset email');
      }

      setSuccess(true);
    } catch (error: unknown) {
      setError((error as { message?: string }).message || 'An error occurred');
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
          <Typography variant='h6' align='center'>
            Logo
          </Typography>
          <Typography variant='h5' align='center' mb={2}>
            EliteSpace
          </Typography>
          <Typography variant='h6' align='center' mb={2}>
            Reset Password
          </Typography>

          {error && <Alert severity='error'>Supabase database stuffs comin soon</Alert>}
          {success ? (
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
              >
                Send Reset Link
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
