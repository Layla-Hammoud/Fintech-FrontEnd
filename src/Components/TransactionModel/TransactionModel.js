import { Typography, TextField, Box, Button, Modal } from "@mui/material";
import { useState,useContext } from "react";
import { AuthContext } from '../../Context/AuthContext';
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";
const TransactionModel = ({ merchant, setOpen, open }) => {
  const {user,checkUser} = useContext(AuthContext)
  const { apiCall } = useApi();
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    amountSent: null,
    type:'transaction',
    code: "unavailable",
    senderUsername:"",
    receiverUsername:''

  });

  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.id === 'amountSent' ? parseFloat(e.target.value) : e.target.value
    }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    // if(formData.code === "")delete formData.code
    try {
      const response = await apiCall({
        url: "/api/transactions",
        method: "post",
        data: {
          amountSent: formData.amountSent,
          code: formData.code,
          senderUsername: user.userName,
          type: 'transaction',
          receiverUsername: merchant.userName
        },
      });
      toast.success(response.message);
      // If the API call is successful, continue with the rest of your logic or handle success cases here
    } catch (error) {
      const errors  = error.response.data;
          toast.error(errors);
        
    }
    setFormData({
      amountSent: null,
      type:'transaction',
      code: "unavailable",
      senderUsername:user.userName,
      receiverUsername:''
  
      });

  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    "@media (min-width: 768px)": {
      width: 500,
    },
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            USDT Purchase
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            form{" "}
            <span>
              <strong style={{ color: "green" }}>{merchant.userName}</strong>
            </span>
          </Typography>
          <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="amountSent"
            name="amountSent"
            id='amountSent'
            value={formData.amount}
            onChange={handelChange}
            type="number"
            required
            sx={{
              marginTop: "20px",
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#119c59",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#119c59",
              },
            }}
          />
          <TextField
            fullWidth
            label="code"
            name="code"
            value={formData.code}
            onChange={handelChange}
            type="text"
            sx={{
              marginTop: "20px",
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#119c59",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#119c59",
              },
            }}
          />
          <Button
            fullWidth
            size="large"
            sx={{
              mt: 3,
              backgroundColor: "#119c59",
              "&:hover": {
                backgroundColor: "#2C6E49",
              },
            }}
            type="submit"
            variant="contained"
          >
            Purchase
          </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default TransactionModel;
