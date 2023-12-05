import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import Image from '../Assets/Images/crypto1.jpg'
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
              background: "#119c59",
              height: "100%",
              backgroundImage: `url('${Image}')`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
