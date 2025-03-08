import { Box, Stack, Button, Typography } from "@mui/material";
import { Link } from "react-router";

const GuestParkingApproved = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        height: "660px",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          border: "3px solid #e0e0e0",
          padding: "3rem",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
        >
          Permit Issued
        </Typography>
        <Typography variant="body1">
          <strong>Guest Name:</strong> John Doe
        </Typography>
        <Typography variant="body1">
          <strong>License Plate:</strong> 54ELSPC
        </Typography>
        <Typography variant="body1">
          <strong>Expiration Date:</strong> 03/10/2025
        </Typography>
        <Typography variant="body1">
          <strong>Expiration Time:</strong> 4:00 PM
        </Typography>
        <Link
          to="/parking"
          style={{ textDecoration: "none", width: "100%", margin: "0 auto", display: "flex", justifyContent: "center" }}
        >
          <Button variant="contained">Go Back</Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default GuestParkingApproved;
