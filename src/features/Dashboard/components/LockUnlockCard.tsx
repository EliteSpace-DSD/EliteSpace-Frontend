import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../stores/store';

interface CardProps {
  height: HeightProps;
  tenantName?: string;
}
interface HeightProps {
  xs: number;
  md: number;
}

const LockUnlockCard = ({ height, tenantName: propTenantName }: CardProps) => {
  const theme = useTheme();
  const tenantId = useSelector((state: RootState) => state.tenant.tenantId);
  const [isLocked, setIsLocked] = React.useState<boolean>(true); // Default to locked
  const [tenantName, setTenantName] = React.useState<string | null>(propTenantName || null);
  const [showAlert, setShowAlert] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  React.useEffect(() => {
    if (!tenantId) {
      // If no tenantId (user not logged in), default to locked and do nothing
      setIsLocked(true);
      return;
    }

    const fetchLockState = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/locks/lock-state/${tenantId}`, {
          credentials: 'include', // Include credentials in the request
        });
        if (!response.ok) {
          throw new Error('Failed to fetch lock state');
        }
        const data = await response.json();
        setIsLocked(data.isLocked);
        if (!propTenantName) {
          setTenantName(data.tenantName);
        }
      } catch (err) {
        setError('Failed to fetch lock state. Please try again later.');
      }
    };

    fetchLockState();
  }, [tenantId, propTenantName, API_BASE_URL]);

  const handleLock = async () => {
    if (!tenantId) {
      setError('You must be logged in to lock the door.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/locks/lock-state`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tenantId,
          tenantName: tenantName,
          isLocked: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to lock');
      }

      setIsLocked(true);
      setShowAlert(false);
    } catch (err) {
      setError('Failed to lock. Please try again later.');
    }
  };

  const handleUnlock = async () => {
    if (!tenantId) {
      setError('You must be logged in to unlock the door.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/locks/lock-state`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tenantId,
          tenantName: tenantName,
          isLocked: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to unlock');
      }

      setIsLocked(false);
      setShowAlert(true);
    } catch (err) {
      setError('Failed to unlock. Please try again later.');
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const card = (
    <React.Fragment>
      <Typography
        color={isLocked ? 'secondary.main' : 'warning.main'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: theme.typography.h3.fontWeight,
          mb: 1,
        }}
      >
        {isLocked ? <LockIcon sx={{ mr: 1 }} /> : <LockOpenIcon sx={{ mr: 1 }} />}
        Front Door is {isLocked ? 'Locked' : 'Unlocked'}
      </Typography>

      <Stack direction='row'>
        <CardActions>
          <Button
            size='small'
            variant={isLocked ? 'contained' : 'outlined'}
            startIcon={<LockIcon />}
            onClick={handleLock}
            disabled={isLocked}
          >
            Lock
          </Button>
        </CardActions>
        <CardActions>
          <Button
            size='small'
            variant={isLocked ? 'contained' : 'outlined'}
            startIcon={<LockOpenIcon />}
            onClick={handleUnlock}
            disabled={!isLocked}
          >
            Unlock
          </Button>
        </CardActions>
      </Stack>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275, flex: 1, height: { xs: height.xs, md: height.md } }}>
      <Card
        variant='outlined'
        sx={{
          height: '100%',
          p: 1,
          borderColor: isLocked ? theme.palette.secondary.main : theme.palette.warning.main,
          borderWidth: 1,
        }}
      >
        {card}
      </Card>

      <Snackbar open={showAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          severity='warning'
          variant='filled'
          onClose={handleCloseAlert}
          action={
            <Button color='inherit' size='small' onClick={handleLock}>
              Lock Now
            </Button>
          }
        >
          Your front door is currently unlocked. Click "Lock Now" to secure it.
        </Alert>
      </Snackbar>

      {error && (
        <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
          <Alert severity='error' variant='filled' onClose={() => setError(null)}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default LockUnlockCard;
