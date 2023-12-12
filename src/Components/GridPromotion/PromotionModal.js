import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Modal from '@mui/material/Modal';
import useApi from '../../hooks/useApi';
import { useState, useContext } from "react";
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import { fDate } from '../../utils/format-time';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '90%',
//   maxWidth: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
//   display: 'flex',
//   flexDirection: 'column',
//   align: 'center',
//   '@media (min-width: 600px)':{
//     width: 400,
//   },
// };



const PromotionModal = ({ open, onClose }) => {
  const { apiCall } = useApi();
  const { user } = useContext(AuthContext)
  const [formPromotion, setFormPromotion] = useState({

    name: '',
    code: '',
    detail: '',
    amount: null,
    startDate: '',
    endDate: '',
    MerchantId: 9

  });



  const handleDateChange = (field) => (event) => {
    const enteredDate = event.target.value;
    const formattedDate = fDate(enteredDate, 'yyyy-MM-dd');

    setFormPromotion((prevForm) => ({
      ...prevForm,
      [field]: formattedDate,
    }));
  };



  const handleClickAway = () => {
    // Close the dialog when clicking away
    onClose();
  };

  const handelFormPromotion = async (e) => {
  console.log(formPromotion)
    try {
      // if ( new Date(formPromotion.endDate) < new Date(formPromotion.startDate)){Toast("End Date is before the start date")}
      const response = await apiCall({
        url: '/api/promotions/create',
        method: 'POST',
        data: {
          name: formPromotion.name,
          code: formPromotion.code,
          detail: formPromotion.detail,
          amount: formPromotion.amount,
          startDate: formPromotion.startDate,
          endDate: formPromotion.endDate,
          MerchantId: 9
        }
      })
      toast.success("promotion created Successfully!");

    } catch (error) {
      toast.error('No promotion added !')
    }
    setFormPromotion(
      {

        name: '',
        code: '',
        detail: '',
        amount: null,
        startDate: '',
        endDate: '',
        MerchantId: 9

      }
    )
    onClose();
  }



  const handelChange = (e) => {
    setFormPromotion({
      ...formPromotion,
      [e.target.id]: e.target.id === 'amount' ? parseFloat(e.target.value) : e.target.value
    }
    )
  }
  return (
  
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>New Promotion</DialogTitle>
      <DialogContent>
        <TextField id='name' value={formPromotion.name} placeholder='Promotion name' onChange={handelChange} />
        <TextField id='code' value={formPromotion.code} placeholder='Promotion code' onChange={handelChange} />
        <TextField id='detail' value={formPromotion.detail} placeholder='Promotion details' onChange={handelChange} />
        <TextField id='amount' type='number' value={formPromotion.amount} placeholder='Promotion amount' onChange={handelChange} />
        <TextField
          id="startDate"
          label="Start Date"
          type="date"
          value={formPromotion.startDate}
          onChange={handleDateChange('startDate')}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: fDate(new Date(), 'yyyy-MM-dd'), // Optional: Set a minimum date
          }}
        />

        <TextField
          id="endDate"
          label="End Date"
          type="date"
          value={formPromotion.endDate}
          onChange={handleDateChange('endDate')}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: fDate(new Date(), 'yyyy-MM-dd'), // Optional: Set a minimum date
          }}
        />
      </DialogContent>
      <DialogActions><Button onClick={() => handelFormPromotion()}>Create now</Button></DialogActions>
    </Dialog>

  );
};


export default PromotionModal;
