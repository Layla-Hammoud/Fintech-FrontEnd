import { Box, Typography, TextField,Button } from "@mui/material";
import React from "react";
  const Savinglayout=()=>{
    return(
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            height:"100vh"

        }}>
            <Typography>Add Saving</Typography>
        <Box mb={2}>
            <TextField
                required
                id="outlined-required"
                label="Title"
                placeholder="Enter the title"
            />
        </Box >
        <Box mb={2}>
            <TextField
                required
                id="outlined-required"
                label="Goal Amount"
                placeholder="Enter Goal Amount"
            />
        </Box>
        <Box mb={2}>
            <TextField
                required
                id="outlined-required"
                label="Amount"
                placeholder="Enter Amount"
            />
        </Box>
        <Button variant="contained" color="success">Save</Button>
        </Box>
    )
  }
  export default Savinglayout;

// import { useState, useEffect } from "react"; 
// import Button from '@mui/material/Button';
// const addSavingModal = ({isOpen, onClose, onSave}) => {

// //     const [title, setTitle] = useState('');
// //     const [goalAmount, setGoalAmount] = useState('');
// //     const [amount, setAmount] = useState('');

// //     const handleSave = async () => {

// //         onSave ({title, goalAmount,amount});

// //         setTitle('');
// //         setGoalAmount('');
// //         setAmount('');
        
// //         onClose();
// //     };

// //     useEffect(() => {
// //         setTitle('');
// //         setGoalAmount('');
// //         setAmount('');
// //     }, [isOpen] );

// //     return (
// //         // <Modal isOpen={isOpen} onClose={onClose}>
// //         //     <h2>Add saving</h2>
// //         //     <label>
// //         //         Title: 
// //         //         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
// //         //     </label>

// //         //     <label>
// //         //         Goal Amount: 
// //         //         <input type="number" value={goalAmount} onChange={(e) => setGoalAmount(e.target.value)}/>
// //         //     </label>

// //         //     <label>
// //         //         Amount: 
// //         //         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
// //         //     </label>
// //         // </Modal>
// //     );

// };

// export default addSavingModal;
