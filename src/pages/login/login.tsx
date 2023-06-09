import LoginIcon from "@mui/icons-material/Login";
import { Box, Button, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform the user and password check here
    if (email === "chefs" && password === "chef-ivx1!") {
      // Navigate to the /edit page
      navigate("/edit");
    } else {
      // Invalid user or password, display an error message
      setError(true);
    }
  };

  const handleCloseError = () => {
    setError(false);
  };

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
      <Button
        sx={{ width: 215, marginTop: 2, borderRadius: 5 }}
        startIcon={<LoginIcon />}
        variant="contained"
        onClick={handleLogin}
      >
        Login
      </Button>

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
