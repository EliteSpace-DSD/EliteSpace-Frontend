import { Box, TextField, Stack, InputLabel, Link, Button, Container } from "@mui/material";

const Login = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          width: { xs: "auto", sm: 600 },
        }}
      >
        <Stack
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "center" }}
        >
          <div>Logo</div>
          <h1 style={{ margin: 0, fontSize: "44px" }}>EliteSpace</h1>
        </Stack>
        <Stack
          sx={{
            height: 380,
            width: { xs: 290, sm: 400 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Stack sx={{ gap: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <InputLabel
              htmlFor="email"
              sx={{ width: "100%", color: "black" }}
            >
              Email
            </InputLabel>
            <TextField
              size="small"
              variant="outlined"
              sx={{ width: "85%" }}
            />
          </Stack>
          <Stack sx={{ gap: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <InputLabel
              htmlFor="password"
              sx={{ width: "100%", color: "black" }}
            >
              Password
            </InputLabel>
            <TextField
              type="password"
              size="small"
              variant="outlined"
              sx={{ width: "85%" }}
            />
          </Stack>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 2 }}>
            <input
              type="checkbox"
              id="remember-me"
            />
            <label
              htmlFor="remember-me"
              style={{ fontSize: 13, paddingTop: 2 }}
            >
              Remember my login
            </label>
          </Box>
          <Stack sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
            <Button
              variant="contained"
              sx={{ width: "58%", bgcolor: "#28a2a2", color: "white", textTransform: "none" }}
            >
              Sign in
            </Button>
            <Button
              variant="contained"
              sx={{ width: "58%", bgcolor: "#1a3b5d", color: "white", textTransform: "none" }}
            >
              Register
            </Button>
          </Stack>
          <Link
            href="#"
            underline="none"
            sx={{ width: "100%", textAlign: "center", margin: "0 auto" }}
          >
            Forgot your password?
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Login;
