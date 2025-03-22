import {
  CircularProgress,
  Grid2,
  Typography,
} from '@mui/material';
import { useState } from "react";
import { useGetLeaseQuery, useSignLeaseMutation } from '../../features/DigitalLease/api/leaseApi';
import NewLease from '../../features/DigitalLease/NewLease';

const DigitalLease = () => {
  const [signature, setSignature] = useState("");
  const {data: leaseData, isLoading: loadingLeaseData } = useGetLeaseQuery();
  const [signLease, { isLoading: isSigningLease, isSuccess }] = useSignLeaseMutation();

  const message = leaseData?.message;

  const handleSignLease = async () => {
    const leaseId = leaseData?.id;
    if (!leaseId) {return;}
    await signLease({leaseId, signature}).unwrap();
  };

  if (loadingLeaseData) {
    return (
      <Grid2 container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
          <CircularProgress />
        </Grid2>
    );
  }

  return (
    <>
      {isSuccess ? (
        <Grid2 container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
          <Typography align="center" variant="h4" sx={{ fontWeight: 500 }}>
            Lease successfully signed
          </Typography>
        </Grid2>
      ) : leaseData && !message ? (
        <NewLease 
          leaseData={leaseData} 
          signature={signature} 
          setSignature={setSignature} 
          handleSignLease={handleSignLease}
          isSigningLease={isSigningLease}
        />
      ) : message ? (
        <Grid2 container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
          <Typography variant="h4" sx={{ fontWeight: 500 }}>
            {message}
          </Typography>
        </Grid2>
      ) : 
        <Grid2 container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
          <Typography variant="h4" sx={{ fontWeight: 500 }}>
            No pending renewals.
          </Typography>
        </Grid2>}
    </>
  )
};

export default DigitalLease;
