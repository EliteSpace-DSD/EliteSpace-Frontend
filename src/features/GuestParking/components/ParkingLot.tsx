import { Stack, Typography, Box } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { setSelectedParkingSpot } from '../parkingSlice';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../../../stores/store';

type ParkingSpace = {
  parking_space: number;
  status: string;
};

type ParkingLotProps = {
  parkingSpaces: ParkingSpace[];
};

const ParkingLot = ({ parkingSpaces }: ParkingLotProps) => {
  const selectedParkingSpot = useSelector((state: RootState) => state.parking.selectedParkingSpot);
  const dispatch = useDispatch();

  const handleParkingSpotClick = (parkingId: number) => {
    dispatch(setSelectedParkingSpot(parkingId));
  };

  return (
    <Stack width='290px' margin='0 auto'>
      <Typography textAlign='center' fontSize='24px' marginBottom='12px'>
        Choose Parking
      </Typography>
      <Stack>
        <Stack gap='24px'>
          <Stack direction='row'>
            {parkingSpaces.slice(0, 12).map(({ parking_space, status }: ParkingSpace) => (
              <Box key={parking_space} flexDirection='column'>
                <DirectionsCarIcon
                  sx={{
                    border: '1px solid #1a3b5d',
                    borderBottom: 'none',
                    cursor: 'pointer',
                    color:
                      selectedParkingSpot === parking_space
                        ? 'green'
                        : status === 'available'
                          ? 'transparent'
                          : '#1a3b5d',
                  }}
                  onClick={() => {
                    if (status === 'unavailable') return;
                    handleParkingSpotClick(parking_space);
                  }}
                />
                <Typography textAlign='center' fontSize='10px'>
                  {parking_space}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Stack direction='row'>
            {parkingSpaces.slice(12, 24).map(({ parking_space, status }: ParkingSpace) => (
              <Box key={parking_space} flexDirection='column'>
                <Typography textAlign='center' fontSize='10px'>
                  {parking_space}
                </Typography>
                <DirectionsCarIcon
                  sx={{
                    border: '1px solid #1a3b5d',
                    borderTop: 'none',
                    cursor: 'pointer',
                    color:
                      selectedParkingSpot === parking_space
                        ? 'green'
                        : status === 'available'
                          ? 'transparent'
                          : '#1a3b5d',
                  }}
                  onClick={() => {
                    if (status === 'unavailable') return;
                    handleParkingSpotClick(parking_space);
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Stack>
        <Stack gap='24px'>
          <Stack direction='row'>
            {parkingSpaces.slice(24, 36).map(({ parking_space, status }: ParkingSpace) => (
              <Box key={parking_space} flexDirection='column'>
                <DirectionsCarIcon
                  sx={{
                    border: '1px solid #1a3b5d',
                    borderBottom: 'none',
                    cursor: 'pointer',
                    color:
                      selectedParkingSpot === parking_space
                        ? 'green'
                        : status === 'available'
                          ? 'transparent'
                          : '#1a3b5d',
                  }}
                  onClick={() => {
                    if (status === 'unavailable') return;
                    handleParkingSpotClick(parking_space);
                  }}
                />
                <Typography textAlign='center' fontSize='10px'>
                  {parking_space}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Stack direction='row'>
            {parkingSpaces.slice(36, 48).map(({ parking_space, status }: ParkingSpace) => (
              <Box key={parking_space} flexDirection='column'>
                <Typography textAlign='center' fontSize='10px'>
                  {parking_space}
                </Typography>
                <DirectionsCarIcon
                  sx={{
                    border: '1px solid #1a3b5d',
                    borderTop: 'none',
                    cursor: 'pointer',
                    color:
                      selectedParkingSpot === parking_space
                        ? 'green'
                        : status === 'available'
                          ? 'transparent'
                          : '#1a3b5d',
                  }}
                  onClick={() => {
                    if (status === 'unavailable') return;
                    handleParkingSpotClick(parking_space);
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ParkingLot;
