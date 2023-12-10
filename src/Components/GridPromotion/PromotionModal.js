import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Modal from '@mui/material/Modal';


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



const  PromotionModal = (props) => {
 
  

  return (
    <div>
  
      <Modal
        open={props.open}
        onClose={()=>props.close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      </Modal>
    </div>
  );
}


export default PromotionModal;
