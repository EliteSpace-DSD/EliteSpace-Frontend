import { Stack, InputLabel, TextField, Button, Typography, Container } from "@mui/material";
import "./GuestParking.css";

const GuestParking = () => {
  return (
    <Container
      sx={{
        height: "600px",
        marginTop: "60px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "auto", sm: 500 },
          height: "100%",
          margin: "0 auto",
          gap: "50px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: "1.5rem",
            lineHeight: "1.2",
          }}
        >
          Guest Parking
          <br />
          Permit
        </Typography>
        <Stack
          sx={{
            width: "90%",
            gap: "20px",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              gap: "10px",
            }}
          >
            <InputLabel>Name</InputLabel>
            <TextField
              sx={{
                width: "90%",
                margin: "0 auto",
              }}
            />
          </Stack>
          <Stack
            sx={{
              width: "100%",
              gap: "10px",
            }}
          >
            <InputLabel>License Plate</InputLabel>
            <TextField
              sx={{
                width: "90%",
                margin: "0 auto",
              }}
            />
          </Stack>
        </Stack>
        <Button
          variant="contained"
          sx={{
            width: "60%",
            height: "50px",
            margin: "0 auto",
            marginTop: "10px",
          }}
        >
          Issue Permit
        </Button>
      </Stack>
    </Container>
  );
};

export default GuestParking;
