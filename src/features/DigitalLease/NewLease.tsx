import { Container, Stack, Typography, Paper, TextField, Button } from '@mui/material';
import { TenantLeaseData } from './api/leaseApi';

interface RenewalLeaseProps {
  leaseData: TenantLeaseData;
  signature: string;
  isSigningLease: boolean;
  setSignature: React.Dispatch<React.SetStateAction<string>>;
  handleSignLease: () => void;
}

const NewLease = ({
  leaseData,
  signature,
  setSignature,
  isSigningLease,
  handleSignLease,
}: RenewalLeaseProps) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <Container
      sx={{
        height: '100%',
        marginTop: '60px',
        marginBottom: '60px',
      }}
    >
      <Stack
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          margin: '0 auto',
          pb: 3,
          width: { xs: 'auto', sm: 800 },
        }}
      >
        <Typography variant='h4' sx={{ fontWeight: 500 }}>
          Digital Lease Agreement
        </Typography>

        <Paper
          elevation={3}
          sx={{
            padding: '40px',
            width: '100%',
            backgroundColor: '#fafafa',
          }}
        >
          <Typography variant='body1' component='p' sx={{ pb: 3 }}>
            This LEASE AGREEMENT is made and entered into on {currentDate}, between Elite Space
            ("Landlord") and {`${leaseData.firstName}, ${leaseData.lastName}`} ("Tenant"). This
            agreement represents a new lease period and supersedes any previous agreements.
          </Typography>

          <Typography variant='body1' component='p' sx={{ pb: 3 }}>
            1. AGREEMENT TO LEASE: The Landlord agrees to lease to Tenant and Tenant agrees to lease
            from Landlord, according to the terms and conditions set forth, herein.
          </Typography>

          <Typography variant='body1' component='p' sx={{ pb: 3 }}>
            2. TERM: The lease term begins on {leaseData.startDate} and ends on {leaseData.endDate}.
          </Typography>

          <Typography variant='body1' component='p' sx={{ pb: 3 }}>
            3. RENT: The Tenant agrees to pay monthly rent of ${leaseData.monthlyRate} due on the
            1st of each month.
          </Typography>

          <Typography variant='body1' component='p' sx={{ pb: 3 }}>
            6. UTILITIES: The Tenant is responsible for all utilities including electricity, gas,
            water, sewage, and internet service.
          </Typography>

          <Typography variant='body1' component='p' sx={{ pb: 3 }}>
            7. MAINTENANCE: The Tenant agrees to maintain the property in good condition and report
            any damages promptly to the Landlord.
          </Typography>

          <Typography variant='body1' component='p' sx={{ pb: 3 }}>
            8. OCCUPANCY: The property shall be occupied only by the Tenant(s) listed on this
            agreement. Guest stays exceeding 14 days require written approval from the Landlord.
          </Typography>

          <Typography variant='body1' component='p' sx={{ pb: 3 }}>
            9. PARKING: Designated parking spaces are provided for tenant use only. Guest parking
            requires proper permits.
          </Typography>

          <Typography variant='body1' component='p' sx={{ pb: 3 }}>
            10. PETS: Any pets must be pre-approved by the Landlord and may require additional
            deposits and monthly pet rent.
          </Typography>

          <Typography variant='body1' component='p' sx={{ pb: 3 }}>
            11. LATE FEE: Rent paid after the 5th day of each month will be deemed as late. After
            such date, Tenant agrees to pay a late charge of $95.
          </Typography>

          <Typography variant='body1' component='p' sx={{ fontWeight: 'bold', pb: 3 }}>
            This is a legally binding document. By signing below, you acknowledge that you have
            read, understood, and agree to all terms and conditions stated in this lease agreement.
          </Typography>
        </Paper>

        <Stack
          sx={{
            width: '100%',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <Typography variant='h6'>Enter Name Below to Accept Terms</Typography>
          <Typography variant='subtitle1' component='p' sx={{ pb: 3 }}>
            By typing your name below,you understand and agree that this form of electronic
            signature has the same legal force and effect as a manual signature.
          </Typography>

          <TextField
            fullWidth
            label='Signature'
            variant='outlined'
            value={signature}
            required
            onChange={(e) => setSignature(e.target.value)}
            sx={{
              maxWidth: '400px',
              '& .MuiInputBase-input': {
                fontFamily: "'Dancing Script', cursive",
                fontSize: '24px',
              },
            }}
          />

          <Button
            loading={isSigningLease}
            variant='contained'
            size='large'
            sx={{
              marginTop: '20px',
              width: '200px',
            }}
            onClick={handleSignLease}
            disabled={signature.length === 0}
          >
            Submit Signature
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default NewLease;
