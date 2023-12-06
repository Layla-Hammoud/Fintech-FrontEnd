import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditSaving from './EditSaving';
import { IoClose } from "react-icons/io5";
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };



const  BasicModal = (props) => {
  const handleClose = () => {
    props.onClose();
  };
  

  return (
    <div>
      {/* <Button onClick={handleOpen}>+</Button> */}
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <IoClose onClick={handleClose} />
        <EditSaving/>
      </Modal>
    </div>
  );
}


export default BasicModal;
