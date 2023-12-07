import React from "react";
import { Container, Typography, Button, Box } from '@mui/material';
import ProgressSaving from "./ProgressSaving.js";
import SecondModal from "./SecondModal.js";
const SavingSection = ({goalAmount, title, amount}) => {

    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => {
       setOpenModal(true);
    };
   
    const handleCloseModal = () => {
       setOpenModal(false);
    };

    return (
        <>
        <Container sx={{
            maxWidth: 'md', padding: '20px', margin:'auto',
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
             
                
                <Typography variant="h4" sx={{
                    margin: 0
                }}>My Savings</Typography>
                <Button variant="contained" color="success" sx={{
                    marginLeft: '100px',
                }} onClick={()=>{handleOpenModal()}}>ADD +</Button>

            </Box>
            

            <ProgressSaving title="TV" goalAmount={500} amount={309} />
            <ProgressSaving title="Game" goalAmount={900} amount={500} />
            <ProgressSaving title="Trip" goalAmount={450} amount={150} />
           
        </Container>
        <SecondModal isEdit={true} open={openModal} close={handleCloseModal} data={{goalAmount, title, amount}}/>
        </>
    )
}

export default SavingSection;