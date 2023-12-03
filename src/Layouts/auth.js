import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";

export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          height: "100vh",
        }}
      >
        <Grid container sx={{ flex: "1 1 auto", height: "100%" }}>
          <Grid
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              component="header"
              sx={{
                left: 0,
                p: 3,
                position: "fixed",
                top: 0,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  height: 32,
                  width: 32,
                }}
              ></Box>
            </Box>
            {children}
          </Grid>
          <Grid
            xs={false}
            lg={6}
            sx={{
              display: { xs: 'none', lg: 'flex' },
              alignItems: "center",
              background: "#119c59",
              color: "white",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography
                align="center"
                sx={{
                  fontSize: "2em",
                  lineHeight: "1.6em",
                  mb: 1,
                }}
                variant="h1"
              >
                Empower your finances with the convenience of a digital wallet.
                Sign up today to unlock a world of seamless transactions and
                financial freedom.
              </Typography>
              <img alt="" src="" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
