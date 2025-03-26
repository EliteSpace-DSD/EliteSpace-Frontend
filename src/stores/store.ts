import { configureStore } from '@reduxjs/toolkit';
import mockSlice from '../features/MockFeature/mockSlice';
import issueReducer from './issueSlice';
import { userApi } from '../features/Services/userSlice';
import { loginApi } from '../features/Login/api/loginApi';
import { passwordResetApi } from '../features/PasswordReset/api/passwordresetApi';
import { resetPasswordApi } from '../features/ResetPassword/api/Resetpasswordapi';
import { leaseApi } from '../features/DigitalLease/api/leaseApi';
import { accessCodesReducer } from './accessCodesSlice';
import tenantReducer from './tenantSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    mock: mockSlice,
    issue: issueReducer,
    [userApi.reducerPath]: userApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [passwordResetApi.reducerPath]: passwordResetApi.reducer,
    [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
    [leaseApi.reducerPath]: leaseApi.reducer,
    accessCodes: accessCodesReducer,
    tenant: tenantReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      loginApi.middleware,
      passwordResetApi.middleware,
      resetPasswordApi.middleware,
      leaseApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
