import React from 'react'
import { Typography ,Box } from '@mui/material';
// import image from '../Assets/Icons/image.png'

const SectionMerchantDashboard=({userName, image})=> {
    
   
  return (
  
    <Box sx={{display:'flex', marginTop:'1rem'}}>
        <img 
        alt='profile'
        src={image} />
        <Typography sx={{marginLeft:'1.5rem'}}>{userName}</Typography>
    </Box>
    )}
   
export default  SectionMerchantDashboard;
