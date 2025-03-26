import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';

interface Props {
  route?: string;
}

export function BackButton(props: Props = { route: '/' }) {
  const navigate = useNavigate();
  const handleRoute = () => {
    if (props.route) {
      navigate(props.route);
    } else {
      navigate('/dashboard');
    }
  };
  return (
    <Button
      onClick={handleRoute}
      className='back-button'
      variant='contained'
      startIcon={<ArrowBackIcon />}
    >
      Back
    </Button>
  );
}
