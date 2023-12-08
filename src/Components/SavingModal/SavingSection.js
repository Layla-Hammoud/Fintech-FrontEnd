import React from "react";
import { Container, Typography, Button, Box } from '@mui/material';
import ProgressSaving from "./ProgressSaving.js";
// import BasicModal from "./BasicModal.js";
const SavingSection = () => {
    let data = [
        { title: 'Tv', goalAmount: 400, amount: 87 },
        { title: 'Car', goalAmount: 4558, amount: 2887 },
        { title: 'House', goalAmount: 45588, amount: 7777 },

    ]


    return (
        <Container sx={{
            width:'50%',
            border:'1px solid #E6E9EE',
            borderRadius:'5px',
            margin:0
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: 'center',
                marginBottom: '10px',
                marginTop: '10px',
                '& > *': {
                    marginRight: '285px',
                },
            }}>


                <Typography variant="h5" sx={{fontWeight:600}}>My Savings</Typography>
                <Button variant="contained" color="success" >ADD +</Button>

            </Box>
            <Box className='progresses'>
                {data.map((goal, i) => (
                    <ProgressSaving  title={goal.title} goalAmount={goal.goalAmount} amount={goal.amount} key={i} />
                ))}
            </Box>

        </Container>
    )
}

export default SavingSection;