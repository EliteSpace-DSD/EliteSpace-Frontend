import { useParams } from "react-router";
import {
  Stack,
  Typography,
  Button,
  Container,
  styled,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router";

interface mockInformation {
  id: number;
  package: string;
  deliveredHour: number;
  deliveredMin: number;
  deliveredDate: string;
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

export const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const packageDetails = mockInformation.find((pkg) => pkg.id === Number(id));

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/smartpackage");
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
    <>
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
          <Button
            variant="outlined"
            onClick={handleBackClick}
            sx={{ alignSelf: "flex-start" }}
          >
            Back
          </Button>
          <Item>
            <Typography>{packageDetails?.package}</Typography>
            <Typography>Delivered {packageDetails?.deliveredDate}</Typography>
            <Typography>
              {convertToLocalTime(
                packageDetails?.deliveredHour,
                packageDetails?.deliveredMin
              )}
            </Typography>
          </Item>
          <Item sx={{ backgroundColor: "#28a2a2" }}>
            <Typography variant="h6">Locker Access Code</Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              {/* Code from backend goes here */} 12345
            </Typography>
          </Item>
          <Typography>
            Instructions: Enter code into the keypad at the package locker. Step
            back and wait for the locker door to open.
          </Typography>
          <Typography>Locker Access Code expires after 24 hours</Typography>
        </Stack>
      </Container>
    </>
  );
};
