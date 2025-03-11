import React from "react";
import { useParams } from "react-router";
import { Box, Stack, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";

let mockInformation = [
  { id: 1, package: "Package #1", status: "Delivered 2/12/25", time: "2:45PM" },
  { id: 2, package: "Package #2", status: "Delivered 2/12/25", time: "4:16PM" },
];

export const PacakgeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const packageDetails = mockInformation.find((pkg) => pkg.id === Number(id));

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/smartpackage");
  };

  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Button variant="outlined" onClick={handleBackClick}>
          Back
        </Button>
        <Stack sx={{ mt: 1 }}>
          <Box>
            <Typography>{packageDetails?.package}</Typography>
            <Typography>Status: {packageDetails?.status}</Typography>
            <Typography>Delivery Time {packageDetails?.time}</Typography>
          </Box>
          <Typography>Locker Number 2025</Typography>
          <Typography>
            Instructions: Enter in the keypad at the package locker. Expires
            after 24 hours
          </Typography>
        </Stack>
      </Container>
    </>
  );
};
