import React, { useEffect, useState } from "react";
import { Paper, Box, Typography, Button, Input } from "@mui/material";
import TextField from "@mui/material/TextField";

import { toast } from "react-toastify";
import useApi from "../../hooks/useApi";
const SectionUserDashboard = () => {
  const { apiCall } = useApi();


  // const [transferForm, setTransferForm] = useState(
  //   {
  //     amountReceived: 10,
  //     type: "transfer",
  //     senderUsername: "suheir",
  //     receiverUsername: "sam"
  // })

  // const handelChange = (e) => {
  //   setTransferForm({
  //     ...transferForm,
  //     [e.target.id]: e.target.id === 'amountReceived' ? parseFloat(e.target.value) : e.target.value
  //   }
  //   )
  // }


  const [loading, setLoading] = useState(false);
  const [transferForm, setTransferForm] = useState(
    {
      amountReceived: null,
      type: "transfer",
      senderUsername: "suheir",
      receiverUsername: ""
    });

  const handelChange = (e) => {
    setTransferForm({
      ...transferForm,
      [e.target.id]: e.target.id === 'amountReceived' ? parseFloat(e.target.value) : e.target.value
    }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!transferForm.senderUsername || !transferForm.amountReceived) {
      toast.error("Please insert sender userName or Amount sent");
      setLoading(false);
      return;
    }
    try {
      console.log(transferForm)
      const response = await apiCall({
        url: "/api/transactions",
        method: "POST",
        data: transferForm
      });

      console.log(response.message)
    } catch (error) {
      console.error("Error during transfer:", error);
    }
    setTransferForm({
      amountReceived:'',
      type: "transfer",
      senderUsername: "suheir",
      receiverUsername: ""
    });
  }

  return (
    <Paper
      sx={{
        width: '100%',
        height: "340px",
        '@media(minWidth:280px': { width: '90%' },
      }}
    >
      <Box sx={{ maxWidth: '100', p: '12px', display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ paddingTop: '1rem', fontWeight: 'bold', fontSize: '22px' }}>
          Quick Transfer
        </Typography>

        <TextField
          id="receiverUsername"
          label="Receiver userName"
          variant="outlined"
          value={transferForm.receiverUsername}
          onChange={handelChange}
          sx={{
            width: '100%', maxWidth: '497px', marginTop: '1rem', '@media(minWidth:280px)': { maxWidth: '50px' },
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
          id="amountReceived"
          label="Amount"
          variant="outlined"
          onChange={handelChange}
          value={transferForm.amountReceived}
          sx={{
            width: '100%', maxWidth: '497px', marginTop: '1rem',
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#119c59",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#119c59",
            },
            '@media(minWidth:280px)': { maxWidth: '50px' }
          }}
        />


        <Button
          //add button to add transfer
          onClick={handleSubmit}
          variant="contained"
          disableElevation
          sx={{
            marginTop: '1rem', borderRadius: '5px', width: '20%', maxWidth: '241px', textAlign: 'center', backgroundColor: '#119C59',
          }}
        >
          Send money
        </Button>
      </Box>
    </Paper>
  );
};

export default SectionUserDashboard;
