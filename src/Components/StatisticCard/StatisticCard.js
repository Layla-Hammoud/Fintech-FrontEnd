import { Paper } from "@mui/material";
import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import { useState } from "react";
const StatisticCard = () => {
  const [time, setTime] = useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const customColors = ['#ff9c33', '#0F5533', '#4CD080'];
  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          borderColor: "#E6E9EE",
          width: "575px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          borderRadius: "20px",
          margin: "20px",
          "& img": { marginTop: "1.5rem" },
          "@media (max-width: 700px)": {
              width:"80%",
              margin:"auto"
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
              fontWeight: "bold",
              fontSize: "1.5em",
            }}
          >
            Process
          </Typography>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <p>Income</p>
            <p>$473</p>
          </Box>
          <Box>
            <p>Expenses</p> <p>$473</p>
          </Box>
          <Box>
            <p>Saving</p> <p>$473</p>
          </Box>
        </Box>
        <Box>
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: 437, label: 'income',color: customColors[0] },
            { id: 1, value: 103, label: 'expenses',color: customColors[1] },
            { id: 2, value: 900, label: 'saving',color: customColors[2] },
          ],
        },
      ]}
      width={400}
      height={200}
      sx={{
        "@media (max-width: 700px)": {
          ".css-66gjpw-MuiResponsiveChart-container":{
            width:"200px",
            height:"150px"
          },
          ".MuiChartsLegend-root.MuiChartsLegend-column.css-1u0lry5-MuiChartsLegend-root": {
            display: "none"
          }
        },
      }}
    />
        </Box>
      </Paper>
    </>
  );
};
export default StatisticCard;
