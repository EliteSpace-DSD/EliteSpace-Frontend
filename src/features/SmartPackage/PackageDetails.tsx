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

let mockInformation = [
  { id: 1, package: "Package #1", status: "Delivered 2/12/25", time: "2:45PM" },
  { id: 2, package: "Package #2", status: "Delivered 2/12/25", time: "4:16PM" },
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
            <Typography>{packageDetails?.status}</Typography>
            <Typography>{packageDetails?.time}</Typography>
          </Item>
          <Item>
            <Typography variant="h6">Locker Access Code</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
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
