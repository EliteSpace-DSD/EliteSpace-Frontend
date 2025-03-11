import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";

let mockInformation = [
  { id: 1, package: "Package #1", status: "Delivered 2/12/25", time: "2:45PM" },
  { id: 2, package: "Package #2", status: "Delivered 2/12/25", time: "4:16PM" },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const SmartPackage = () => {
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`/smartpackage/${id}`);
  };

  return (
    <Stack sx={{ mt: 4, alignItems: "center" }}>
      <Box sx={{ width: "30%" }}>
        <Stack>
          <Stack spacing={2}>
            {mockInformation.map((item) => (
              <Item key={item.id} onClick={() => handleItemClick(item.id)}>
                {item.package}
                <br />
                {item.status}
                <br />
                {item.time}
              </Item>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
