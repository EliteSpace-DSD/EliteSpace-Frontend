import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

interface CardProps {
  title: string;
  height: { xs: number; md: number };
  path: string;
}

export default function OutlinedCard({ title, height, path }: CardProps) {
  return (
    <Box sx={{ minWidth: 275, flex: 1 }}>
      <Link to={path} style={{ textDecoration: 'none' }}>
        <Card variant='outlined' title={title} sx={{ height: height }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}
