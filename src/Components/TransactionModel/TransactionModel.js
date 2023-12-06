import { Typography, TextField, Box, Button, Modal } from "@mui/material";
import { useState } from "react";
const TransactionModel = ({ name, setOpen, open }) => {
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    amount: "",
    code: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    setFormData({
        amount: '',
        code: '',
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
              <strong style={{ color: "green" }}>{name}</strong>
            </span>
          </Typography>
          <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
