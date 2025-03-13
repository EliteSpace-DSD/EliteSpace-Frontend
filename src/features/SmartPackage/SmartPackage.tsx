import { Paper, Stack, Container, Typography } from "@mui/material/";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";

let mockInformation = [
  { id: 1, package: "Package #1", status: "Delivered 2/12/25", time: "2:45PM" },
  { id: 2, package: "Package #2", status: "Delivered 2/12/25", time: "4:16PM" },
];
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

export const SmartPackage = () => {
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`/smartpackage/${id}`);
  };

  return (
    <Container
      sx={{
        mt: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Stack sx={{ width: "100%", maxWidth: 400, mt: 2 }} spacing={2}>
        {mockInformation.map((item) => (
          <Item key={item.id} onClick={() => handleItemClick(item.id)}>
            <Typography>{item.package}</Typography>
            <Typography>{item.status}</Typography>
            <Typography>{item.time}</Typography>
          </Item>
        ))}
      </Stack>
    </Container>
  );
};
