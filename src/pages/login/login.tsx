import LoginIcon from "@mui/icons-material/Login";
import { Box, Button, Checkbox, Snackbar, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "chefs" && password === "chef-ivx1!") {
      navigate("/edit");

      if (rememberMe) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("email", email);
      }
    } else {
      setError(true);
    }
  };

  const handleCloseError = () => {
    setError(false);
  };

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      navigate("/edit");
    }
  }, []);

  return (
    <Box>
      <div>
        <TextField
          style={{ marginBottom: 6 }}
          id="outlined-Email"
          label="Email"
          size="small"
          type="email"
          name="email-login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <TextField
          style={{ marginTop: 6 }}
          id="outlined-Password"
          label="Password"
          size="small"
          type="password"
          name="password-login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Checkbox
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <span>Keep me logged in</span>
      </div>
      <div>
        <Button
          sx={{ width: 215, marginTop: 2, borderRadius: 5 }}
          startIcon={<LoginIcon />}
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={handleCloseError}
        message="Invalid user or password"
      />
    </Box>
  );
}

export default Login;
