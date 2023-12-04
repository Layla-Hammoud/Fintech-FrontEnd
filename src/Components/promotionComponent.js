import { Paper } from '@mui/material'
import React from 'react'
import maker from '../Assets/Images/maker.png'
import { Box }from '@mui/material'
import { Typography } from '@mui/material'
import clock from '../Assets/Icons/Clock.png'
import Hourglass from '../Assets/Icons/Hourglass.png'
import { createTheme , ThemeProvider} from '@mui/material'







const theme = createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant:'p'
                    },
                    style:{
                        fontSize:18,
                        
                    },
                },
                {
                    props:{
                        variant:'subtitle1'
                    },
                    style:{
                        fontSize:15,
                        
                    },
                },
            ],
        },
    },
   
})
// },
   
const Promotioncard = ()=>{
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
                 
            }
    ]
     const data =fakeData[0]
     const currentDate = new Date();
     const startDateParts = data.startDate.split('/');
           const startDate = new Date(
             parseInt(startDateParts[2], 10),
             parseInt(startDateParts[1], 10) - 1,
             parseInt(startDateParts[0], 10));
    
    
    return(

<div>
    <ThemeProvider theme={theme}> 
  
    <Paper
     elevation={4}
   
    sx={{width: '100%', maxWidth: '360px', height: '320px' ,marginLeft:'3m', marginTop:'3m', display:'flex' , flexDirection:'column' ,alignItems:'center' ,borderRadius:'20px', '& img':{marginTop: '1.5rem'},'@media (min-width: 280px)': {
        margin: '2em'}}}>
        <img 
        src={maker} alt='maker'/>
        <Box sx={{marginLeft:'3.5rem' , mt:'1.3rem'}}>
        <Box>
            <Typography variant='p'>{data.title}</Typography>
            <Typography variant='subtitle1' sx={{marginTop:'0.8rem' ,  width: '100%'}}><Typography component='span'sx={{ fontSize: '15px' }}>{data.amount}%</Typography> {data.deatil}</Typography>
        </Box>
        <Box 
        sx={{display:'flex',alignItems:'center',}}>
            <img 
                src={clock}
                alt='clock'
                />
                <Typography variant='subtitle1' sx={{marginTop:'1.5rem' , ml:'0.8rem'}}>{data.startDate}</Typography>
                </Box>
                <Box 
                sx={{display:'flex', alignItems:'center'}}>
            <img 
                src={Hourglass}
                alt='Hourglass'
                />
                <Typography variant='subtitle1' sx={{marginTop:'1.5rem' , ml:'0.8rem'}}>
                {currentDate.getTime() < startDate.getTime()
                    ? 'Upcoming'
                    : 'Active'}
                </Typography>
            </Box>
            </Box>

    </Paper>
   
  
    </ThemeProvider>
</div>
    )
}


export default Promotioncard;