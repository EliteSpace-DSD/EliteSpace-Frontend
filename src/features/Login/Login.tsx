import { Box, TextField, Stack, InputLabel, Link, Button } from "@mui/material";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <Stack className="login-container">
        <Stack
          component="section"
          className="login-header-container"
        >
          <div>Logo</div>
          <h1>EliteSpace</h1>
        </Stack>
        <Stack className="login-form">
          <Stack className="email-container">
            <InputLabel
              htmlFor="email"
              className="login-label"
            >
              Email
            </InputLabel>
            <TextField
              className="email-input"
              size="small"
              variant="outlined"
            />
          </Stack>
          <Stack className="password-container">
            <label
              htmlFor="password"
              className="login-label"
            >
              Password
            </label>
            <TextField
              className="password-input"
              type="password"
              size="small"
              variant="outlined"
            />
          </Stack>
          <Box className="remember-login">
            <input
              type="checkbox"
              id="remember-me"
            />
            <label htmlFor="remember-me">Remember my login</label>
          </Box>
          <Stack className="login-btns-container">
            <Button
              variant="contained"
              className="sign-in-btn"
            >
              Sign in
            </Button>
            <Button
              variant="contained"
              className="register-btn"
            >
              Register
            </Button>
          </Stack>
          <Link
            href="#"
            underline="none"
          >
            Forgot your password?
          </Link>
        </Stack>
      </Stack>
    </div>
  );
};

export default Login;
