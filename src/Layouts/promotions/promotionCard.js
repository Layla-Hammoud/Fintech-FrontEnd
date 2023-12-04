import React from "react";
import Promotioncard from "../../Components/promotionComponent.js";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {createTheme , ThemeProvider} from "@mui/material";

const PromotionLayout = () => {
  const fakeData = [
    {
        title: 'Basic Plan',
        amount: 29.99,
        deatil:'hello how are you tody',
        startDate : '20/3/2027',
           

    },
     {
            title: 'sultan Plan',
            amount: 29.99,
            deatil:'hello how are you tody',
            startDate : '20/3/2025',
            
        },
        {
            title: 'maria Plan',
            amount: 29.99,
            deatil:'hello how are you tody',
            startDate : '20/3/2022',
            
        },{
            title: 'FtimaPlan',
            amount: 29.99,
            deatil:'hello how are you tody',
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
      <Typography variant="subtitle1">Promotions</Typography>
      <Typography variant="p">Here is a list of all promotions</Typography>
     <Box sx={{ flexGrow: 1 , marginTop:'3rem'}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      { 
        fakeData.map((data, key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
          <Promotioncard  name={data.name} amount={data.amount} detail={data.deatil} startDate={data.startDate} />
          </Grid>
        ))
        }
      </Grid>
    </Box>
     
    </Container>

</ThemeProvider>
 );
};
export default PromotionLayout;
