import React from "react";
import { Container, Typography, Button, Box } from '@mui/material';
import ProgressSaving from "./ProgressSaving.js";
// import BasicModal from "./BasicModal.js";
const SavingSection = () => {
    let data = [
        { title: 'Tv', goalAmount: 400, amount: 87 },
        { title: 'Car', goalAmount: 4558, amount: 2887 },
        { title: 'House', goalAmount: 45588, amount: 7777 },
        { title: 'House', goalAmount: 45588, amount: 37777 },
        { title: 'House', goalAmount: 45588, amount: 7117 },


    ]


    return (
        <Container sx={{
            width:'100%',
            p:2.5,
            border: '1px solid #E6E9EE',
            borderRadius: '20px',
            margin: 0,
            height: '350px',
            overflowY: 'scroll',
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: 'center',
            }}>


                <Typography variant="h5" sx={{  fontWeight: 'bold', fontSize: '22px'  }}>My Savings</Typography>
                <Button variant="contained" sx={{backgroundColor:'#119C59'}}>ADD +</Button>

            </Box>
            <Box className='progresses'>
                {data.map((goal, i) => (
                    <ProgressSaving title={goal.title} goalAmount={goal.goalAmount} amount={goal.amount} key={i} />
                ))}
            </Box>

        </Container>
    )
}

export default SavingSection;