import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TenantState {
  tenantId: string | null;
}

const initialState: TenantState = {
  tenantId: localStorage.getItem('tenantId'), // Load tenantId from localStorage
};

const tenantSlice = createSlice({
  name: 'tenant',
  initialState,
  reducers: {
    setTenantId: (state, action: PayloadAction<string>) => {
      state.tenantId = action.payload;
      localStorage.setItem('tenantId', action.payload); // Save tenantId in localStorage to persist accross refresh
    },
    clearTenantId: (state) => {
      state.tenantId = null;
      localStorage.removeItem('tenantId'); // to Remove tenantId from localStorage.. when logging out
    },
  },
});

export const { setTenantId, clearTenantId } = tenantSlice.actions;
export default tenantSlice.reducer;
