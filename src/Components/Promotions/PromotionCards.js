
import React from "react";
import OneCardPromotion from './OneCardPromotion.js'
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {createTheme , ThemeProvider} from "@mui/material";

const PromotionCards = () => {
  const fakeData = [
    {
        name: 'Basic Plan',
        amount: 29.99,
        detail:'hello how are you tody',
        startDate : '20/3/2027',
           

    },
     {
            name: 'sultan Plan',
            amount: 29.99,
            detail:'hello how are you tody',
            startDate : '20/3/2025',
            
        },
        {
            name: 'maria Plan',
            amount: 29.99,
            detail:'hello how are you tody',
            startDate : '20/3/2022',
            
        },{
            name: 'FtimaPlan',
            amount: 29.99,
            detail:'hello how are you tody',
            startDate : '20/3/2022',
             
        }]
        const theme = createTheme({
          components:{
              MuiTypography:{
                  variants:[
                      {
                          props:{
                              variant:'p'
                          },
                          style:{
                              fontSize:15,
                              
                          },
                      },
                      {
                          props:{
                              variant:'subtitle1'
                          },
                          style:{
                              fontSize:20,
                              fontWeight:"bold"
                              
                          },
                      },
                  ],
              },
          },
         
      })
  
   
    
  
  return (
    <ThemeProvider theme={theme}>
    <Container sx={{ backgroundColor: "white" , marginY:5,'@media(min-width:280px)':{display:'flex', flexDirection:'column'}}}>
        <Box sx={{marginLeft:'2rem'}}>
      <Typography variant="subtitle1">Promotions</Typography>
      <Typography variant="p">Here is a list of all promotions</Typography>
      </Box>
     <Box sx={{ flexGrow: 1 , marginTop:'3rem'}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      { 
        fakeData.map((data, key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
          <OneCardPromotion  name={data.name} amount={data.amount} detail={data.detail} startDate={data.startDate} />
          </Grid>
        ))
        }
      </Grid>
    </Box>
     
    </Container>

</ThemeProvider>
 );
};
export default PromotionCards;
