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
const TransactionStatistic = () => {
  const [time, setTime] = useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const uData = [4000, 3000, 2000, 2780, 1890, 3490];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
];

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          borderColor: "#E6E9EE",
          width: "60%",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          borderRadius: "20px",
          margin: "20px",
          "& img": { marginTop: "1.5rem" },
          "@media (max-width: 700px)": {
            width: "80%",
            margin: "auto",
          },
          "@media (min-width: 280px)": {
            padding: "1.5em 2em",
          },
        }}
      >
        <Box
          sx={{
            width:"100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{fontSize:"1.5em"}}><strong>Total Transaction</strong></p>
          <FormControl
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
          </FormControl>
        </Box>
        <div style={{width:"100%"}}>
        <LineChart
      height={300}
       
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
