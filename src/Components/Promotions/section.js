import React, { useState } from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import img from '../../Assets/Icons/img.png'
import imag from '../../Assets/Icons/imag.png'
import image from '../../Assets/Icons/image.png'

const SectionUserDashboard = () => {
  const [avatars, setAvatars] = useState([{img, imag, image}]);
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
        maxWidth: "577px",
        height: "340px",
        '@media(minWidth:280px': { width: '90%' },
      }}
    >
      <Box sx={{ maxWidth: '100', marginLeft: '3rem' }}>
        <Typography sx={{ paddingTop: '1rem', fontWeight: 'semibold', fontSize: '22px' }}>
          Quick Transfer
        </Typography>
        <Box
          sx={{
            overflowX: 'auto',
            whiteSpace: 'wrap',
            paddingTop: '3rem',
            '@media(minWidth:280px)': { display: 'flex', flexDirection: 'column' },
          }}
        >

        <Stack
          direction="row"
          spacing={4}
          
        >
          {avatars.map((avatar, index) => (
            <Avatar key={index} alt={`Avatar-${index}`} src={avatar} />
          ))}
          {showMoreAvatars ? (
            <ArrowBackIosNewIcon
              onClick={handleBackClick}
              sx={{ cursor: 'pointer', paddingTop: '0.5rem' }}
            />
          ) : (
            <ArrowForwardIosIcon
              onClick={handleClick}
              sx={{ cursor: 'pointer', paddingTop: '0.5rem' }}
            />
          )}
        </Stack>
        </Box>

        <Typography sx={{ marginTop: '1rem', color: '#AFAFAF', fontSize: '16px' }}>Username</Typography>
        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          sx={{ width: '100%', maxWidth: '497px', marginTop: '1rem', '@media(minWidth:280px)': { maxWidth: '50px' } }}
        />
        <Button
          variant="contained"
          disableElevation
          sx={{ marginTop: '1rem', borderRadius: '12px', backgroundColor: '#119C59', width: '100%', maxWidth: '241px', textAlign: 'center' }}
        >
          Send money
        </Button>
      </Box>
    </Paper>
  );
};

export default SectionUserDashboard;
