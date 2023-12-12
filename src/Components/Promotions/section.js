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