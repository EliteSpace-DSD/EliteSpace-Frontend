import { Paper, Stack, Container, Typography } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { BackButton } from '../../app/components/BackButton';

interface PackageInfo {
  id: number;
  package: string;
  deliveredDateTime: string;
  status: 'delivered' | 'retrieved';
}

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const SmartPackage = () => {
  const [packages, setPackages] = useState<PackageInfo[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const fetchPackages = async () => {
      try {
        const triggerResponse = await fetch(`${API_BASE_URL}/demo/createPackages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({}),
        });

        if (triggerResponse.status === 204) {
          console.log('Demo script completed – no content returned (204)');
        } else {
          const result = await triggerResponse.json();
          console.log('Demo script result:', result);
        }
        const packageResponse = await fetch(`${API_BASE_URL}/smartpackage`, {
          method: 'GET',
          credentials: 'include',
        });

        if (!packageResponse.ok) {
          throw new Error('You have no packages at this time. Please check back later');
        }

        const data = await packageResponse.json();
        setPackages(data);
        console.log('Packages:', data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

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
    <>
      <BackButton />
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

          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography color='error'>{error}</Typography>
          ) : packages.length > 0 ? (
            packages.map((item, index) => (
              <Item
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                sx={{
                  cursor: item.status === 'retrieved' ? 'not-allowed' : 'pointer',
                  opacity: item.status === 'retrieved' ? 0.6 : 1,
                  backgroundColor: item.status === 'retrieved' ? '#f0f0f0' : '#fff',
                  color: item.status === 'retrieved' ? 'gray' : 'black',
                }}
              >
                <Typography>
                  {item.package} Package #{index + 1}
                </Typography>
                <Typography>
                  Delivered {convertToLocalDateTime(item.deliveredDateTime ?? '').localDate}
                </Typography>
                <Typography>
                  {convertToLocalDateTime(item?.deliveredDateTime ?? '').localTime}
                </Typography>
              </Item>
            ))
          ) : (
            <Typography>No packages have been delivered</Typography>
          )}
        </Stack>
      </Container>
    </>
  );
};
