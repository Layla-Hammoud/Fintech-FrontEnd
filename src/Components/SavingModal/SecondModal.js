import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import EditSaving from './EditSaving';
// import { IoClose } from "react-icons/io5";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  align: 'center',
  '@media (min-width: 600px)':{
    width: 400,
  },
};



const  SecondModal = (props) => {
 
  

  return (
    <div>
  
      <Modal
        open={props.open}
        onClose={()=>props.close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {props.isEdit ?(
        <Box sx={style}>
          <TextField 
          color="success"
          required 
          id="modal-modal-title" 
          label="Title"
          placeholder="Enter your title">
          
          </TextField>
          <TextField 
                required
                color="success"
                id="modal-modal-description"
                label="Goal Amount"
                placeholder="Enter Amount"
                sx={{marginTop: 2}}
            />
            <TextField 
                required
                color="success"
                id="modal-modal-description"
                label="Amount"
                placeholder="Enter Amount"
                sx={{marginTop: 2}}
            />
            <Button variant="contained" color="success" sx={{marginTop: 2}}>Save</Button>
        </Box>):(<EditSaving/>)}
      </Modal>
    </div>
  );
}


export default SecondModal;
