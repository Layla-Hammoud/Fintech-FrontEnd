import { Paper } from "@mui/material";
import React from "react";
import maker from "../../Assets/Images/maker.png";
import { Box,Button } from "@mui/material";
import { Typography } from "@mui/material";
import TransactionModel from "../TransactionModel/TransactionModel";
import clock from "../../Assets/Icons/Clock.png";
import Hourglass from "../../Assets/Icons/Hourglass.png";
import { createTheme, ThemeProvider } from "@mui/material";
import UpcomingIcon from '@mui/icons-material/Upcoming';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "p",
          },
          style: {
            fontSize: 18,
          },
        },
        {
          props: {
            variant: "subtitle1",
          },
          style: {
            fontSize: 15,
          },
        },
      ],
    },
  },
});

const OneCardPromotion = ({ name, amount, detail,startDate,endDate,merchant,code }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  // const currentDate = new Date();
  // const startDateParts = startDate.split("/");
  // const date = new Date(
  //   parseInt(startDateParts[2], 10),
  //   parseInt(startDateParts[1], 10) - 1,
  //   parseInt(startDateParts[0], 10)
  // );
  const currentDate = new Date();
  let eventStatus;
  let IconComponent;
  if (currentDate < new Date(startDate)) {
    eventStatus = 'Upcoming';
    IconComponent = <UpcomingIcon />;
  } else if (currentDate > new Date(endDate)) {
    eventStatus = 'Expired';
    IconComponent = <CloseIcon />;
  } else {
    eventStatus = 'Active';
    IconComponent = <AccessTimeFilledIcon />;
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper
          elevation={4}
          sx={{
            width: "100%",
            maxWidth: "360px",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
            "& img": { marginTop: "1.5rem" },
            "@media (min-width: 285px)": {
              margin: "2em",
              maxWidth: "100%",
            },
          }}
        >
          <img src={maker} alt="maker" />
          <Box sx={{ mt: "1.8rem" }}>
            <Box>
              <Typography variant="p">{name}</Typography>
              <Typography
                variant="subtitle1"
                sx={{ marginTop: "0.8rem", width: "100%" }}
              >
                <Typography component="span" sx={{ fontSize: "15px" }}>
                  {amount}% discount
                </Typography>{" "}
                {detail}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent:'center' }}>
              {IconComponent}
              <Typography
                variant="subtitle1"
                sx={{ marginTop: "1.5rem", ml: "0.8rem" }}
              >
                {eventStatus === 'Active'&&(`This will end in ${endDate}`)}
                {eventStatus === 'Expired'&&(`This Promotion is expired`)}
                {eventStatus === 'Upcoming'&&(`This promotion is upcoming`)}
              </Typography>
            </Box>
            
      {eventStatus === 'Active'&& ( // Conditionally render the button based on the status
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop:"20px"}}>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{
            backgroundColor: '#119c59',
            '&:hover': {
              backgroundColor: '#2C6E49',
            },
          }}
        >
          Exchange
        </Button>
        <TransactionModel open={open} setOpen={setOpen} merchant={merchant} code={code} />
    </Box>
      )}

          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default OneCardPromotion;
