import { Paper, Stack, Container, Typography } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router';

interface mockInformation {
  id: number;
  package: string;
  deliveredDatetime: string;
  status: 'delivered' | 'retrieved';
}

const mockInformation = [
  {
    id: 1,
    package: 'Package #1',
    deliveredDateTime: '2025-03-18T20:19:55.754Z',
    status: 'delivered',
  },
  {
    id: 2,
    package: 'Package #2',
    deliveredDateTime: '2025-03-19T01:06:20.040Z',
    status: 'retrieved',
  },
];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export const SmartPackage = () => {
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`/smartpackage/${id}`);
  };

  const convertToLocalDateTime = (isoFormat: string) => {
    const date = new Date(isoFormat);

    const localDate = date.toLocaleDateString([], {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });

    const localTime = date.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    return { localDate, localTime };
  };

  return (
    <Container
      sx={{
        mt: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Stack sx={{ width: '100%', maxWidth: 400, mt: 8.5 }} spacing={2}>
        <Typography variant='h5' sx={{ fontWeight: 'medium', textAlign: 'center' }}>
          Smart Package Locker
        </Typography>
        {mockInformation.length > 0 ? (
          mockInformation.map((item) => (
            <Item
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              sx={{
                opacity: item.status === 'retrieved' ? 0.6 : 1, //  retrieved packages dimness
                backgroundColor: item.status === 'retrieved' ? '#f0f0f0' : '#fff', // Grey out retrieved items
                color: item.status === 'retrieved' ? 'gray' : 'black', // Change text color for retrieved items
              }}
            >
              <Typography>{item.package}</Typography>
              <Typography>
                Delivered {convertToLocalDateTime(item.deliveredDateTime).localDate}
              </Typography>
              <Typography>{convertToLocalDateTime(item.deliveredDateTime).localTime}</Typography>
            </Item>
          ))
        ) : (
          <Typography>No package has been delivered</Typography>
        )}
      </Stack>
    </Container>
  );
};
