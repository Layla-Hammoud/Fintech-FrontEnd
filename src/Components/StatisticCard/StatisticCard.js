import { Paper } from "@mui/material";
import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useState} from "react";



const StatisticCard = ({wallet,transactions}) => {
  const [time, setTime] = useState("");
  let expenses=0;
  transactions.forEach(element => {
    if(element.type==='withdraw'){expenses=expenses+element.amountReceived}
  });
  
  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const customColors = ["#ff9c33", "#0F5533", "#4CD080"];
  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          borderColor: "#E6E9EE",
          width: "100%",
          height: "auto",
          borderRadius: "20px",
          "& img": { marginTop: "1.5rem" },
          "@media (max-width: 700px)": {
            width: "100%",
            margin: "auto",
          },
          "@media (min-width: 280px)": {
            padding: "1.5em 2em",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontWeight: 'bold', fontSize: '22px' 
            }}
          >
            Process
          </Typography>
          <FormControl

            sx={{
              width: '150px',
              height: '100px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
              sx={{ width: '100px', m: 0 }}
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <p style={{ color: "#AFAFAF" }}>Income</p>
            <p>
              <strong>${wallet.usdBalance}</strong>
            </p>
          </Box>
          <Box>
            <p style={{ color: "#AFAFAF" }}>Expenses</p>{" "}
            <p>
              <strong>T{expenses}</strong>
            </p>
          </Box>
          <Box>
            <p style={{ color: "#AFAFAF" }}>Saving</p>{" "}
            <p>
              <strong>$473</strong>
            </p>
          </Box>
        </Box>
        <Box>
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: `${wallet.usdBalance}`,
                    label: "income",
                    color: customColors[0],
                  },
                  {
                    id: 1,
                    value:`${expenses}`,
                    label: "expenses",
                    color: customColors[1],
                  },
                  {
                    id: 2,
                    value: 900,
                    label: "saving",
                    color: customColors[2],
                  },
                ],
              },
            ]}
           
            sx={{
              "@media (max-width: 700px)": {
                ".MuiChartsLegend-root.MuiChartsLegend-column.css-1u0lry5-MuiChartsLegend-root":
                {
                  display: "none",
                }
            }}} 
            width={400}
            height={200}
          />
        </Box>
      </Paper>
    </>
  );
};
export default StatisticCard;