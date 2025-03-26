import { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  FormControlLabel,
  Checkbox,
  Link,
  Modal,
  LinearProgress,
} from '@mui/material';
import { Link as Router } from 'react-router';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const handleOpenTerms = () => setShowTermsModal(true);
  const handleCloseTerms = () => setShowTermsModal(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verificationSent, setVerificationSent] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState<string[]>([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    const feedback: string[] = [];

    // Length check
    if (password.length >= 8) {
      strength += 25;
    } else {
      feedback.push('At least 8 characters');
    }

    // Uppercase check
    if (/[A-Z]/.test(password)) {
      strength += 25;
    } else {
      feedback.push('Add uppercase letters');
    }

    // Lowercase check
    if (/[a-z]/.test(password)) {
      strength += 25;
    } else {
      feedback.push('Add lowercase letters');
    }

    // Number/special char check
    if (/[0-9!@#$%^&*]/.test(password)) {
      strength += 25;
    } else {
      feedback.push('Add numbers or special characters');
    }

    setPasswordStrength(strength);
    setPasswordFeedback(feedback);
  };

  const getStrengthColor = () => {
    if (passwordStrength < 50) return 'error';
    if (passwordStrength < 75) return 'warning';
    return 'success';
  };

  const validateForm = () => {
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return false;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }

    if (!/[A-Z]/.test(formData.password)) {
      setError('Password must contain an uppercase letter');
      return false;
    }

    if (!/[a-z]/.test(formData.password)) {
      setError('Password must contain a lowercase letter');
      return false;
    }

    if (!/[0-9!@#$%^&*]/.test(formData.password)) {
      setError('Password must contain a number or special character');
      return false;
    }

    if (!agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return false;
    }

    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          dob: formData.dob,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Error creating account');
      }

      setVerificationSent(true);
    } catch (error: unknown) {
      setError((error as { message?: string }).message || 'An error occurred during register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      bgcolor='background.default'
    >
      <Card sx={{ width: 400, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant='h6' color='primary' align='center'>
            Logo
          </Typography>
          <Typography variant='h4' align='center' mb={2}>
            Create Account
          </Typography>

          {error && <Alert severity='error'>{error}</Alert>}
          {verificationSent ? (
            <Box textAlign='center'>
              <Alert severity='success'>Verification email sent!</Alert>
              <Typography mt={2}>
                We've sent a verification link to <strong>{formData.email}</strong>
              </Typography>
              <Typography variant='body2' mt={1}>
                Please check your email and click the verification link.
              </Typography>

              <Button
                component={Router}
                to='/login'
                variant='contained'
                color='primary'
                fullWidth
                sx={{ mt: 3 }}
              >
                Go to Login
              </Button>
            </Box>
          ) : (
            <form onSubmit={handleRegister}>
              <TextField
                label='First Name'
                name='firstName'
                fullWidth
                margin='normal'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <TextField
                label='Last Name'
                name='lastName'
                fullWidth
                margin='normal'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <TextField
                label='Email'
                name='email'
                type='email'
                fullWidth
                margin='normal'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                label='Phone'
                name='phone'
                type='tel'
                fullWidth
                margin='normal'
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <TextField
                label=''
                name='dob'
                type='date'
                fullWidth
                margin='normal'
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <TextField
                label='Password'
                name='password'
                type='password'
                fullWidth
                margin='normal'
                value={formData.password}
                onChange={handleChange}
                required
                helperText='At least 8 characters with uppercase, lowercase, and numbers'
              />
              {/* strength bar */}
              {formData.password && (
                <Box sx={{ mt: 1, mb: 2 }}>
                  <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Typography variant='body2'>Password Strength:</Typography>
                    <Typography variant='body2' color={getStrengthColor()}>
                      {passwordStrength < 50 ? 'Weak' : passwordStrength < 75 ? 'Medium' : 'Strong'}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant='determinate'
                    value={passwordStrength}
                    color={getStrengthColor()}
                    sx={{ mt: 1, mb: 1 }}
                  />
                  {passwordFeedback.length > 0 && (
                    <Box>
                      {passwordFeedback.map((feedback, index) => (
                        <Typography
                          key={index}
                          variant='caption'
                          color='text.secondary'
                          display='block'
                        >
                          • {feedback}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              )}
              <TextField
                label='Confirm Password'
                name='confirmPassword'
                type='password'
                fullWidth
                margin='normal'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                error={
                  formData.confirmPassword !== '' && formData.password !== formData.confirmPassword
                }
                helperText={
                  formData.confirmPassword !== '' && formData.password !== formData.confirmPassword
                    ? "Passwords don't match"
                    : ''
                }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                  />
                }
                label={
                  <span>
                    I agree to the{' '}
                    <Link
                      component='button'
                      sx={{ color: 'primary.main' }}
                      onClick={handleOpenTerms}
                    >
                      Terms & Conditions
                    </Link>
                  </span>
                }
              />

              {/* Terms & Conditions Modal */}
              <Modal open={showTermsModal} onClose={handleCloseTerms}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                    maxWidth: 600,
                    width: '90%',
                  }}
                >
                  <Typography variant='h5' gutterBottom>
                    Terms and Conditions
                  </Typography>

                  <Typography variant='body2'>
                    By registering for an Elite Space account, you agree to the following:
                  </Typography>

                  <ul
                    style={{
                      paddingLeft: '0',
                      fontSize: '14px',
                      listStyle: 'none',
                    }}
                  >
                    <li>
                      <strong>Respectful Use:</strong> You will use the platform responsibly and in
                      accordance with all applicable laws and community guidelines.
                    </li>
                    <li>
                      <strong>Data Privacy:</strong> We value your privacy. Your personal
                      information will never be sold or shared with third parties without your
                      consent, unless required by law.
                    </li>
                    <li>
                      <strong>Account Security:</strong> You are responsible for maintaining the
                      confidentiality of your account credentials and for all activity that occurs
                      under your account.
                    </li>
                    <li>
                      <strong>Platform Integrity:</strong> Any attempts to misuse, manipulate, or
                      disrupt the platform may result in suspension or termination of your account.
                    </li>
                    <li>
                      <strong>Content Ownership:</strong> Any information you submit (e.g.,
                      maintenance requests, guest access info) remains yours, but we reserve the
                      right to use aggregated, anonymized data to improve the platform.
                    </li>
                    <li>
                      <strong>Modifications:</strong> These terms may be updated occasionally.
                      Continued use of the platform after updates implies your acceptance of any
                      changes.
                    </li>
                  </ul>

                  <Typography variant='body2' mt={2}>
                    <strong>By registering, you acknowledge and agree to these terms.</strong>
                  </Typography>
                  <Button onClick={handleCloseTerms} variant='contained' sx={{ float: 'right' }}>
                    Close
                  </Button>
                </Box>
              </Modal>

              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
                size='large'
                disabled={loading}
                sx={{ mt: 2 }}
              >
                Register
              </Button>
            </form>
          )}

          <Box mt={2} textAlign='center'>
            <Typography variant='body2'>
              Already have an account?{' '}
              <Link component={Router} to='/login' sx={{ color: 'primary.main' }}>
                Log in
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;
