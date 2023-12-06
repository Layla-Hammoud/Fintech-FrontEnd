import { Box, Typography, TextField, Button} from "@mui/material";
import React from "react";
import { IoClose } from "react-icons/io5";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const EditSaving =(props) =>{

    return (
        <Box sx={style}>
        <Typography textAlign="left" mb={2}>Edit Saving <IoClose/></Typography>
        <Box mb={2}>
            <TextField
                required
                id="outlined-required"
                label="Title"
                placeholder="the main Title"
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

export default EditSaving;