import {
  Box,
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import "./auth.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      type: "",
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
              <Typography variant="h4">Register</Typography>
              <Typography variant="body2">
                Already have an account? <Link to="/sign-in">Log in</Link>
              </Typography>
            </Stack>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
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
                <FormControl
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#119c59",
                      },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#119c59",
                    },
                  }}
                >
                  <InputLabel id="demo-multiple-name-label">Type</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    input={<OutlinedInput label="Name" />}
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    MenuProps={MenuProps}
                    required
                  >
                    <MenuItem value={"merchant"}>Merchant</MenuItem>
                    <MenuItem value={"user"}>Wallet user</MenuItem>
                  </Select>
                </FormControl>
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

export default Signup;
