import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ParkingState = {
  selectedParkingSpot: number | null;
  guestName: string;
  licensePlate: string;
};

const initialState: ParkingState = {
  selectedParkingSpot: null,
  guestName: '',
  licensePlate: '',
};

const parkingSlice = createSlice({
  name: 'parking',
  initialState,
  reducers: {
    setSelectedParkingSpot: (state, action: PayloadAction<number>) => {
      state.selectedParkingSpot = action.payload;
    },
    updateGuestName: (state, action: PayloadAction<string>) => {
      state.guestName = action.payload;
    },
    updateLicensePlate: (state, action: PayloadAction<string>) => {
      state.licensePlate = action.payload;
    },
  },
});

export const { setSelectedParkingSpot, updateLicensePlate, updateGuestName } = parkingSlice.actions;
export default parkingSlice.reducer;
