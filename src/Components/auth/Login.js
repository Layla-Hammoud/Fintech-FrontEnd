import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import "./auth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })}
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormData({
        email: '',
        password: '',
      });
    };
  
  return (
    <>
        <Box
          sx={{
            flex: "1 1 auto",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 550,
              px: 3,
              py: "100px",
              width: "100%",
            }}
          >
            <div>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <Typography variant="h4">Log In</Typography>
                <Typography variant="body2">
                  Don't have an account? <Link to="/sign-up">Sign up</Link>
                </Typography>
              </Stack>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#119c59",
                        },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#119c59",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    type="password"
                    required
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#119c59",
                        },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#119c59",
                      },
                    }}
                  />
                </Stack>
                <Button
                  fullWidth
                  size="large"
                  sx={{
                    mt: 3,
                    backgroundColor: "#119c59",
                    "&:hover": {
                      backgroundColor: "#2C6E49",
                    },
                  }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
              </form>
            </div>
          </Box>
        </Box>
    </>
  );
};

export default Login;
