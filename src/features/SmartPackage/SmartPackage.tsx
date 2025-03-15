import { Paper, Stack, Container, Typography } from "@mui/material/";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";

interface mockInformation {
  id: number;
  package: string;
  deliveredHour: number;
  deliveredMin: number;
  deliveredDate: string;
  status: "delivered" | "retrieved";
}

const mockInformation = [
  {
    id: 1,
    package: "Package #1",
    deliveredDate: "2/12/25",
    deliveredHour: 16,
    deliveredMin: 16,
    status: "delivered",
  },
  {
    id: 2,
    package: "Package #2",
    deliveredDate: "2/12/25",
    deliveredHour: 10,
    deliveredMin: 30,
    status: "retrieved",
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

  const convertToLocalTime = (hour: number, min: number) => {
    const date = new Date();
    date.setUTCHours(hour, min, 0, 0);

    const localTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return localTime;
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
        {mockInformation.length > 0 ? (
          mockInformation.map((item) => (
            <Item
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              sx={{
                opacity: item.status === "retrieved" ? 0.6 : 1, //  retrieved packages dimness
                backgroundColor:
                  item.status === "retrieved" ? "#f0f0f0" : "#fff", // Grey out retrieved items
                color: item.status === "retrieved" ? "gray" : "black", // Change text color for retrieved items
              }}
            >
              <Typography>{item.package}</Typography>
              <Typography> Delivered {item.deliveredDate}</Typography>
              <Typography>
                {convertToLocalTime(item.deliveredHour, item.deliveredMin)}
              </Typography>
            </Item>
          ))
        ) : (
          <Typography>No package has been delivered</Typography>
        )}
      </Stack>
    </Container>
  );
};
