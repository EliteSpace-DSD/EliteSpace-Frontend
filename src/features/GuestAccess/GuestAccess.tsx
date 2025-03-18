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
import { Link } from 'react-router';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, UseDispatch } from 'react-redux';
import { setGuestName, setTimeLimit, setCurrentCode } from '../../stores/accessCodesSlice';

const GuestAccess = () => {

  const [nameInput, setNameInput] = useState("");
  const [timeLimitInput, setTimeLimitInput] = useState("60");

  const dispatch = useDispatch();
  const navigate = useNavigate();
 

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
            <Select defaultValue='1'>
              <MenuItem value='1'>60 minutes</MenuItem>
              <MenuItem value='2'>2 hours</MenuItem>
              <MenuItem value='4'>4 hours</MenuItem>
              <MenuItem value='8'>8 hours</MenuItem>
              <MenuItem value='24'>24 hours (1 day)</MenuItem>
              <MenuItem value='48'>48 hours (2 days)</MenuItem>
              <MenuItem value='168'>1 week</MenuItem>
            </Select>
          </FormControl>
          <Link
            to='/guestaccess/key'
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
              }}
            >
              Generate Key
            </Button>
          </Link>
        </Stack>
      </Paper>
    </Container>
  );
};

export default GuestAccess;
