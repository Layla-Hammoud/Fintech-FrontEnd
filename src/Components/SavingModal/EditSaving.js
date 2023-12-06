import { Box, Typography, TextField, Button} from "@mui/material";
import React from "react";
import { IoClose } from "react-icons/io5";
const EditSaving =(props) =>{

    return (
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            padding:"10"
        }}>
        <Typography textAlign="left" mb={2}>Edit Saving <IoClose onClick={props.handleclose} /></Typography>
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