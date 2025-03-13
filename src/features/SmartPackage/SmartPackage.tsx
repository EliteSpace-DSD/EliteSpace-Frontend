import { Paper, Stack, Container, Typography } from "@mui/material/";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";

interface mockInformation {
  id: number;
  package: string;
  deliveredHour: number;
  deliveredMin: number;
  deliveredDate: Date;
}

let mockInformation = [
  {
    id: 1,
    package: "Package #1",
    deliveredHour: 16,
    deliveredMin: 16,
    deliveredDate: "2/12/25",
  },
  {
    id: 2,
    package: "Package #2",
    deliveredDate: "2/12/25",
    deliveredHour: 10,
    deliveredMin: 30,
  },
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

  const formatTime = (hour: number, min: number) => {
    const ampm = hour >= 12 ? "PM" : "AM";
    const formatHour = hour % 12 || 12;
    const formatMin = min.toString().padStart(2, "0");
    return `${formatHour}:${formatMin} ${ampm}`;
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
            <Typography> Delivered {item.deliveredDate}</Typography>
            <Typography>
              {formatTime(item.deliveredHour, item.deliveredMin)}
            </Typography>
          </Item>
        ))}
      </Stack>
    </Container>
  );
};
