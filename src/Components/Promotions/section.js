import React, { useState } from "react";
import { Paper, Box, Typography, Button, Input } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import img from '../../Assets/Icons/img.png'
import imag from '../../Assets/Icons/imag.png'
import image from '../../Assets/Icons/image.png'

const SectionUserDashboard = () => {
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

  return (
    <Paper
      sx={{
        width: '100%',
        height: "340px",
        '@media(minWidth:280px': { width: '90%' },
      }}
    >
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


        <Button
          //add button to add transfer
          // onClick={}
          variant="contained"
          disableElevation
          sx={{
            marginTop: '1rem', borderRadius: '5px', width: '20%', maxWidth: '241px', textAlign: 'center', backgroundColor: '#119C59',
          }}
        >
          Send money
        </Button>
      </Box>
    </Paper>
  );
};

export default SectionUserDashboard;
