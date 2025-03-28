import { Box, Card, CardContent, Typography } from '@mui/material/';
import { Link } from 'react-router';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useTheme } from '@mui/material/styles';

interface CardProps {
  title: string;
  height: { xs: number; md: number };
  path: string;
  icon?: React.ReactNode;
}

export default function OutlinedCard({ title, height, path }: CardProps) {
  const theme = useTheme();

  const iconStyles = {
    fontSize: 40,
    color: theme.palette.secondary.main,
    display: { xs: 'block', sm: 'none' },
    mb: 1,
  };

  const getIconForTitle = (title: string) => {
    switch (title) {
      case 'Smart Package Locker':
        return <LocalShippingIcon sx={iconStyles} />;
      case 'Guest Access':
        return <PeopleIcon sx={iconStyles} />;
      case 'Guest Parking':
        return <DirectionsCarIcon sx={iconStyles} />;
      case 'Digital Lease':
        return <DescriptionIcon sx={iconStyles} />;
      case 'Tenant Support':
        return <SupportAgentIcon sx={iconStyles} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ minWidth: 275, flex: 1 }}>
      <Link to={path} style={{ textDecoration: 'none' }}>
        <Card
          variant='outlined'
          title={title}
          sx={{
            height: height,
            border: '1px solid #1a3b5d',
            transition: 'border 0.3s ease-in',
            '&:hover': {
              border: '2px solid #28a2a2',
              transform: 'scale(1.03)',
              boxShadow: '0 0 10px 2px #28a2a2',
            },
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              height: '100%',
              px: 2,
            }}
          >
            {/* Mobile-only icon */}
            {getIconForTitle(title)}

            <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 14 }}>
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}
