<<<<<<< HEAD
import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
=======
import React, { useState } from "react";
import { Paper, Box, Typography, Button, Input } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
>>>>>>> 8fa4681e0bc5bbfb00f57bb8cacbc416e7d078cd
import TextField from "@mui/material/TextField";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const SectionUserDashboard = () => {
<<<<<<< HEAD
  // const handleClick = () => {};
=======
  const [avatars, setAvatars] = useState([{ img, imag, image }]);
  const [showMoreAvatars, setShowMoreAvatars] = useState(false);

  const handleClick = () => {
    if (avatars.length < 20) {
      const newAvatars = [...avatars, img, imag, image];
      setAvatars(newAvatars);
    }

    if (avatars.length >= 12) {
      setShowMoreAvatars(false);
    } else {
      setShowMoreAvatars(true);
    }
  };

  const handleBackClick = () => {
    setShowMoreAvatars(false);
  };
>>>>>>> 8fa4681e0bc5bbfb00f57bb8cacbc416e7d078cd

  return (
    <Paper
      sx={{
<<<<<<< HEAD
        width: "100%",
        maxWidth: "577px",
=======
        width: '100%',
>>>>>>> 8fa4681e0bc5bbfb00f57bb8cacbc416e7d078cd
        height: "340px",
        "@media(minWidth:280px": { width: "90%" },
      }}
    >
<<<<<<< HEAD
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
=======
      <Box sx={{ maxWidth: '100', p: '12px',display:'flex' ,flexDirection:'column'}}>
        <Typography sx={{ paddingTop: '1rem', fontWeight: 'bold', fontSize: '22px' }}>
          Quick Transfer
        </Typography>

        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          sx={{
            width: '100%', maxWidth: '497px', marginTop: '1rem', '@media(minWidth:280px)': { maxWidth: '50px' },
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
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          sx={{
            width: '100%', maxWidth: '497px', marginTop: '1rem',
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#119c59",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#119c59",
            },
            '@media(minWidth:280px)': { maxWidth: '50px' }
          }}
        />


>>>>>>> 8fa4681e0bc5bbfb00f57bb8cacbc416e7d078cd
        <Button
          //add button to add transfer
          // onClick={}
          variant="contained"
          disableElevation
          sx={{
<<<<<<< HEAD
            marginTop: "1rem",
            borderRadius: "12px",
            backgroundColor: "#119C59",
            width: "100%",
            maxWidth: "140px",
            textAlign: "center",
=======
            marginTop: '1rem', borderRadius: '5px', width: '20%', maxWidth: '241px', textAlign: 'center', backgroundColor: '#119C59',
>>>>>>> 8fa4681e0bc5bbfb00f57bb8cacbc416e7d078cd
          }}
        >
          Send money
        </Button>
      </Box>
    </Paper>
  );
};

export default SectionUserDashboard;
