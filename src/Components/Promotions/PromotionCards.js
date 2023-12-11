import React from "react";
import OneCardPromotion from "./OneCardPromotion.js";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";

const PromotionCards = ({promotions}) => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "p",
            },
            style: {
              fontSize: 15,
            },
          },
          {
            props: {
              variant: "subtitle1",
            },
            style: {
              fontSize: 30,
              fontWeight: "bold",
            },
          },
        ],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          backgroundColor: "white",
          marginY: 10,
          display: "flex",
          flexDirection: "column",
          "@media(min-width:280px)": {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{ marginLeft: "2rem" }}>
          <Typography variant="subtitle1">Promotions</Typography>
          <Typography variant="p">Here is a list of all promotions</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: "3rem" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {promotions.map((data, key) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <OneCardPromotion
                  name={data.name}
                  amount={data.amount}
                  detail={data.detail}
                  startDate={new Date(data.startDate).toISOString().split('T')[0]}
                  endDate={new Date(data.endDate).toISOString().split('T')[0]}
                  merchant={data.merchant}
                  code={data.code}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default PromotionCards;
