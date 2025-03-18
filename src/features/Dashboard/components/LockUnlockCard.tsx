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

interface CardProps {
  height: HeightProps;
}
interface HeightProps {
  xs: number;
  md: number;
}

const LockUnlock = ({ height }: CardProps) => {
  const theme = useTheme();
  const [isLocked, setIsLocked] = React.useState(true);
  const [showAlert, setShowAlert] = React.useState(false);

  const handleLock = () => {
    setIsLocked(true);
    setShowAlert(false);
  };

  const handleUnlock = () => {
    setIsLocked(false);
    setShowAlert(true);
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
    </Box>
  );
};

export default LockUnlock;
