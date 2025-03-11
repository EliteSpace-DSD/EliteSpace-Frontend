import React from "react";
import { useParams } from "react-router";
import { Box, Stack } from "@mui/material";

let mockInformation = [
  { id: 1, package: "Package #1", status: "Delivered 2/12/25", time: "2:45PM" },
  { id: 2, package: "Package #2", status: "Delivered 2/12/25", time: "4:16PM" },
];

export const PacakgeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const packageDetails = mockInformation.find((pkg) => pkg.id === Number(id));

  return (
    <>
      <h2>{packageDetails?.package}</h2>
      <p>Status: {packageDetails?.status}</p>
      <p>Delivery Time {packageDetails?.time}</p>
    </>
  );
};
