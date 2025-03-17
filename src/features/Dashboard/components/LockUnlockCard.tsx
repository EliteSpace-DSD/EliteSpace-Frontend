import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

interface CardProps {
  height: { xs: number; md: number };
}

const card = (
  <React.Fragment>
    <Typography>Front Door is Unlocked</Typography>
    <Stack direction='row'>
      <CardActions>
        <Button size='small' variant='outlined'>
          Lock
        </Button>
      </CardActions>
      <CardActions>
        <Button size='small' variant='outlined'>
          Unlock
        </Button>
      </CardActions>
    </Stack>
  </React.Fragment>
);

export default function OutlinedCard({ height }: CardProps) {
  return (
    <Box sx={{ minWidth: 275, height, flex: 1 }}>
      <Card variant='outlined' sx={{ height: { ...height } }}>
        {card}
      </Card>
    </Box>
  );
}
