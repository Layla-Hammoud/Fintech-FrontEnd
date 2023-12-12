import { Paper } from "@mui/material";
import React from "react";
import maker from "../../Assets/Images/maker.png";
import { Box } from "@mui/material";
import { Typography, Button } from "@mui/material";
import clock from "../../Assets/Icons/Clock.png";
import Hourglass from "../../Assets/Icons/Hourglass.png";
import { createTheme, ThemeProvider } from "@mui/material";

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

const OneCardPromotion = ({ name, amount, detail, startDate }) => {
  const currentDate = new Date();
  const startDateParts = startDate.split("/");
  const date = new Date(
    parseInt(startDateParts[2], 10),
    parseInt(startDateParts[1], 10) - 1,
    parseInt(startDateParts[0], 10)
  );

  const handleButtonClick = () =>{
    console.log("Button Clicked!")
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper
          elevation={4}
          sx={{
            width: "100%",
            maxWidth: "360px",
            height: "320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
            "& img": { marginTop: "1.5rem" },
            "@media (min-width: 280px)": {
              margin: "2em",
              maxWidth: "100%",
              marginLeft: "2px"
              
            },
          }}
        >
          <img src={maker} alt="maker" />
          <Box sx={{ marginRight: "6rem", mt: "1.3rem" }}>
            <Box>
              <Typography variant="p">{name}</Typography>
              <Typography
                variant="subtitle1"
                sx={{ marginTop: "0.8rem", width: "100%" }}
              >
                <Typography component="span"  sx={{ fontSize: "15px" }}>
                  {amount}%
                </Typography>{" "}
                {detail}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={clock} marginLeft={2} alt="clock" />
              <Typography
                variant="subtitle1"
                // marginLeft={2}
                sx={{ marginTop: "1.5rem", ml: "0.8rem", }}
              >
                {startDate}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={Hourglass} alt="Hourglass" marginLeft={2}/>
              <Typography
                variant="subtitle1"
                sx={{ marginTop: "1.5rem", ml: "0.8rem" }}
              >
                {currentDate.getTime() < date.getTime() ? "Upcoming" : "Active"}
                <Button 
                size= "small" 
                variant="contained" 
                color="success" 
                sx={{marginLeft: "0.5rem", 
                marginBottom: "0.5rem",
                borderRadius:"12px"}}
                onClick={handleButtonClick}>
                Get Now
              </Button>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default OneCardPromotion;
