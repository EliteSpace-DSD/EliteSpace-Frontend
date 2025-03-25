import {
  Container,
  Stack,
  InputLabel,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Paper,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGuestName, setTimeLimit, setCurrentCode } from '../../stores/accessCodesSlice';
import { BackButton } from '../../app/components/BackButton';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const GuestAccess = () => {
  const [nameInput, setNameInput] = useState('');
  const [timeLimitInput, setTimeLimitInput] = useState('60');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save to Redux
    dispatch(setGuestName(nameInput));
    dispatch(setTimeLimit(timeLimitInput));

    try {
      const response = await fetch(`${API_BASE_URL}/accessCodes/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          guestName: nameInput,
          timeLimit: timeLimitInput,
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to generate access code');
      }

      const data = await response.json();
      const code = data.accessCode.unhashedCode;

      dispatch(setCurrentCode(code));
      navigate('/guestaccess/key');
    } catch (error) {
      console.error('Error generating code:', error);
    }
  };

  return (
    <>
      <BackButton />
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '-20px',
              }}
            >
              <VpnKeyIcon
                sx={{
                  fontSize: 60,
                  color: 'primary.main',
                }}
              />
            </Box>

            <Typography
              sx={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: '1.5rem',
                lineHeight: '1.2',
              }}
            >
              Guest Access
            </Typography>

            <Typography
              variant='body2'
              color='text.secondary'
              sx={{
                textAlign: 'center',
                marginTop: '-20px',
                marginBottom: '10px',
              }}
            >
              Generate a temporary access key for your visitors
            </Typography>

            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <InputLabel
                sx={{
                  width: '100%',
                  marginBottom: '10px',
                }}
              >
                Guest Name
              </InputLabel>
              <TextField
                sx={{
                  width: '100%',
                  marginBottom: '20px',
                }}
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                required
              />

              <InputLabel
                sx={{
                  width: '100%',
                  marginBottom: '10px',
                }}
              >
                Time Limit
              </InputLabel>
              <FormControl
                sx={{
                  width: '100%',
                  marginBottom: '20px',
                }}
              >
                <Select value={timeLimitInput} onChange={(e) => setTimeLimitInput(e.target.value)}>
                  <MenuItem value='60'>60 minutes</MenuItem>
                  <MenuItem value='120'>2 hours</MenuItem>
                  <MenuItem value='240'>4 hours</MenuItem>
                  <MenuItem value='480'>8 hours</MenuItem>
                  <MenuItem value='1440'>24 hours (1 day)</MenuItem>
                  <MenuItem value='2880'>48 hours (2 days)</MenuItem>
                  <MenuItem value='10080'>1 week</MenuItem>
                </Select>
              </FormControl>

              <Button
                type='submit'
                variant='contained'
                sx={{
                  width: '50%',
                  height: '50px',
                  margin: '0 auto',
                  display: 'block',
                }}
              >
                Generate Key
              </Button>
            </form>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default GuestAccess;
