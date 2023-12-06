import React from "react";
import { Paper, Box, Typography } from "@mui/material";
// import SectionMerchantDashboard from "../Components/sectionMerchantDashboard";
import image from "../Assets/Icons/image.png";

const SectionMerchantDashboardLayout = () => {
  const userData = [
    {
      userName: "hadi",
      image:  image ,
    },
    {
      userName: "simo",
      image: image ,
    },
    {
      userName: "abudi",
      image:  image ,
    },
    {
      userName: "abdelhamid",
      image: image ,
    },
    {
      userName: "mariam",
      image:  image ,
    },
    
  ];
  return (
    <Paper
      sx={{
        width: "350px",
        height: "424px",
        borderRadius: "5px",
        "@media (max-width:280px)": {
            width:'200px',height:''
        
        },
      }}
    >
      
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "bold",
          paddingTop: "1rem",
        }}
      >
        Most Loyar user
      </Typography>
      <Box sx={{ marginLeft: "5.5rem", marginTop: "4rem" ,"@media (max-width:280px)": {
            width:'100px',marginLeft: "0.5rem"
        
        },}}>
        {userData.map((data, key) => (
           <Box sx={{display:'flex', marginTop:'1.5rem'}}  key ={key}>
           <img 
           alt='profile'
           src={data.image} />
           <Typography sx={{marginLeft:'1.5rem'}}>{data.userName}</Typography>
       </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default SectionMerchantDashboardLayout;
