import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
const CardBalance = ({ title,titleColor, amount, unit, backGroundColor, borderColor }) => {
  return (
    <Paper variant='outlined' sx={{ width: 320, height: 170,pt: 0.5, pb: 0.5, borderRadius: '12px', border: '1px solid #E6E9EE', backgroundColor: backGroundColor }}>
      <Box sx={{ borderLeft: '8px solid', height: '100%', borderRadius: 2, borderLeftColor:  borderColor }}>
        <Typography variant='h6' sx={{ p: 2, ml: 2, color: titleColor }} >{title}</Typography>
        <Typography variant='body1' sx={{ p: 2, ml: 2, fontWeight: '600', fontSize: '20px' }}>{unit} {amount}</Typography>
      </Box>
    </Paper>
  )
}

export default CardBalance
