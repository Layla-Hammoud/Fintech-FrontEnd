import {
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
const TransactionStatistic = ({transactions}) => {

  const calculateMonthlySum = () => {
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 5); // Subtract 5 to get the last 6 months
    
    const monthlySum = new Array(6).fill(0); // Initialize an array to store sum for each of the last 6 months
    
    transactions.forEach(transaction => {
      const transactionDate = new Date(transaction.createdAt);
      const monthDifference = today.getMonth() - transactionDate.getMonth();
      const yearDifference = today.getFullYear() - transactionDate.getFullYear();
    
      // Check if the transaction is 'completed' and falls within the last 6 months
      if (
        transaction.status === 'completed' &&
        yearDifference === 0 &&
        monthDifference >= 0 &&
        monthDifference < 6
      ) {
        const monthIndex = 5 - monthDifference; // Calculate the index for the month within the last 6 months
        monthlySum[monthIndex] += transaction.amountReceived;
      }
    });
    
    return monthlySum;
  };
  
  const handleChange = (event) => {
    
  };
  const generateMonthLabels = () => {
    const monthLabels = [];
    const today = new Date();
    for (let i = 5; i >= 0; i--) {
      const date = new Date();
      date.setMonth(today.getMonth() - i);
      const monthName = date.toLocaleString('default', { month: 'short' });
      monthLabels.push(monthName);
    }
    return monthLabels;
  };

  const uData = calculateMonthlySum();
  const xLabels = generateMonthLabels();
  console.log(uData, xLabels);

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          borderColor: "#E6E9EE",
          width: "100%",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          borderRadius: "20px",
          "& img": { marginTop: "1.5rem" },
          "@media (max-width: 1570px)": {
            width: "100%",
            margin: "auto",
            marginBottom:"1em"
          },
          "@media (min-width: 475px)": {
            padding: "1.5em 2em",
          },
          "@media (min-width: 280px)": {
            padding: "1em 1em",
          },
        }}
      >
        <Box
          sx={{
            width:"100%",
            display: "flex",
            justifyContent: "space-between",
            "@media (max-width: 700px)": {
              flexDirection:"column"
            },
          }}
        >
          <p style={{fontSize:"1.5em"}}><strong>Total Transaction</strong></p>
          {/* <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#119c59",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#119c59",
              },
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">Time</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={time}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"weekly"}>weekly</MenuItem>
              <MenuItem value={"monthly"}>monthly</MenuItem>
              <MenuItem value={"yearly"}>yearly</MenuItem>
            </Select>
          </FormControl>*/}
        </Box> 
        <div style={{width:"100%"}}>
        <LineChart
      height={400}
       
      series={[{ data: uData, area: true, showMark: false }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root': {
          display: 'none',
        },
        '.css-q3wnbe-MuiResponsiveChart-container':{
            width: "100%",
        }, 
        '& .MuiAreaElement-root': {
            fill: '#14B86E', 
          },

      }}
    />
    </div>
      </Paper>
    </>
  );
};
export default TransactionStatistic;
