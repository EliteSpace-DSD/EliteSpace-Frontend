import { Paper, Stack, Container, Typography } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';

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

export const SmartPackage = () => {
  const [packages, setPackages] = useState<PackageInfo[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // Initialize demo packages if needed
        await fetch(`${API_BASE_URL}/demo/createPackages`, {
          method: 'POST',
          credentials: 'include',
        });
        const packageResponse = await fetch(`${API_BASE_URL}/smartpackage`, {
          method: 'GET',
          credentials: 'include',
        });

        if (!packageResponse.ok) {
          throw new Error('You have no packages at this time. Please check back later');
        }

        const data = await packageResponse.json();
        setPackages(data);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : 'Failed to fetch packages');
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleItemClick = (id: number) => {
    navigate(`/smartpackage/${id}`);
  };

  // Get item styles based on status
  const getItemStyles = (status: PackageInfo['status']) => ({
    cursor: status === 'retrieved' ? 'not-allowed' : 'pointer',
    opacity: status === 'retrieved' ? 0.6 : 1,
    backgroundColor: status === 'retrieved' ? '#f0f0f0' : '#fff',
    color: status === 'retrieved' ? 'gray' : 'black',
  });

  // Memoize computed package data to avoid recalculating on every render
  const packagesWithDates = useMemo(() => {
    return packages.map((item) => ({
      ...item,
      ...convertToLocalDateTime(item.deliveredDateTime ?? ''),
    }));
  }, [packages]);

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
          spacing={2}
        >
          <Typography
            variant='h5'
            sx={{
              textAlign: 'center',
              fontWeight: 500,
              fontSize: '1.5rem',
              lineHeight: '1.2',
            }}
          >
            Smart Package Locker
          </Typography>

          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography color='error'>{error}</Typography>
          ) : packages.length > 0 ? (
            packagesWithDates.map((item, index) => (
              <Item
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                sx={getItemStyles(item.status)}
              >
                <Typography>
                  {item.package} Package #{index + 1}
                </Typography>
                <Typography>Delivered {item.localDate}</Typography>
                <Typography>{item.localTime}</Typography>
              </Item>
            ))
          ) : (
            <Typography>No packages have been delivered</Typography>
          )}
        </Stack>
      </Paper>
    </Container>
  );
};
