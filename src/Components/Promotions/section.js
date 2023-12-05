import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const SectionUserDashboard = () => {
  // const handleClick = () => {};

  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: "577px",
        height: "340px",
        "@media(minWidth:280px": { width: "90%" },
      }}
    >
      <Box sx={{ maxWidth: "100", marginLeft: "3rem" }}>
        <Typography
          sx={{ paddingTop: "1rem", fontWeight: "semibold", fontSize: "22px" }}
        >
          Quick Transfer
        </Typography>
        <Box sx={{ paddingTop: "2rem" }}>
          <Typography
            sx={{ marginTop: "1m",  fontSize: "16px" }}
          >
            Username
          </Typography>
          <TextField
            id="outlined-basic"
            label="username"
            variant="outlined"
            sx={{
              width: "100%",
              maxWidth: "497px",
              color: "#AFAFAF",
              "@media(minWidth:280px)": { maxWidth: "50px" },
            }}
          />
        </Box>
        <Box sx={{ paddingTop: "1rem" }}>
          <Typography
            sx={{ marginTop: "1m",  fontSize: "16px" }}
          >
            Amount
          </Typography>
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            sx={{
              width: "100%",
              maxWidth: "497px",
              color: "#AFAFAF",
              "@media(minWidth:280px)": { maxWidth: "50px" },
            }}
          />
        </Box>
        <Button
          variant="contained"
          disableElevation
          sx={{
            marginTop: "1rem",
            borderRadius: "12px",
            backgroundColor: "#119C59",
            width: "100%",
            maxWidth: "140px",
            textAlign: "center",
          }}
        >
          Send money
        </Button>
      </Box>
    </Paper>
  );
};

export default SectionUserDashboard;
