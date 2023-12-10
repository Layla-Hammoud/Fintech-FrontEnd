import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { sortRowsByDate } from "../../utils/DateSorting";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  MenuItem,
  Select,
} from "@mui/material";
import "./TransactionTable.css";
import { toast } from "react-toastify";
function TransactionTable({rows}) {

  
  const [activeOption, setActiveOption] = useState("All");
  const [page, setPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const sortedRows = sortRowsByDate(rows, activeOption);

  //handel options for filtring data
  const handelOption = (option) => {
    setActiveOption(option);
  };

  //change style according to the window width
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //add style to the status column according to the value
  const makeStyle = (status) => {
    if (status === "completed") {
      return {
        color: "green",
      };
    } else if (status === "pending") {
      return {
        color: "gray",
      };
    } else {
      return {
        color: "red",
      };
    }
  };

  let style1 = {
    backgroundColor: "#119c59",
    borderRadius: 1,
    p: 1,
    color: "white",
    width: 70,
    textAlign: "center",
  };
  let style2 = { borderRadius: 5, p: 0.8, width: 60, textAlign: "center" };

  //still sorting according to the option//
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid #D9D9D9",
        margin: "10px",
        padding: "20px",
      }}
    >
      <Box
        className="Box"
        display="flex"
        justifyContent="space-between"
        sx={{ width: "100%", marginBottom: 5 }}
      >
        <Typography className="tableTitle" variant="h5">
          Transaction Confirmation
        </Typography>
        {windowWidth >= 675 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: 300,
            }}
          >
            <Typography
              onClick={() => handelOption("All")}
              sx={activeOption === "All" ? style1 : style2}
            >
              All
            </Typography>
            <Typography
              onClick={() =>{ handelOption("Monthly");}}
              sx={activeOption === "Monthly" ? style1 : style2}
            >
              Monthly
            </Typography>
            <Typography
              onClick={() => handelOption("Weekly")}
              sx={activeOption === "Weekly" ? style1 : style2}
            >
              Weekly
            </Typography>
            <Typography
              onClick={() => handelOption("Today")}
              sx={activeOption === "Today" ? style1 : style2}
            >
              Today
            </Typography>
          </Box>
        ) : (
          <Select
            labelId="filtering"
            value={activeOption}
            onChange={(event) => setActiveOption(event.target.value)}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"monthly"}>Monthly</MenuItem>
            <MenuItem value={"weekly"}>Weekly</MenuItem>
            <MenuItem value={"Today"}>Today</MenuItem>
          </Select>
        )}
      </Box>
      <TableContainer
        component={Paper}
        className="Table"
        sx={{ width: "100%", margin: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Amount Sent</TableCell>
              <TableCell>Amount Received</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Sender Name</TableCell>
              <TableCell>Receiver Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.slice(page * 4, page * 4 + 4).map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&: -child td": { border: 0, background: "red" } }}
              >
                <TableCell>{row.amountSent}</TableCell>
                <TableCell>{row.amountReceived}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>
                  {" "}
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell>{row.senderUsername}</TableCell>
                <TableCell>{row.receiverUsername}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[4]}
        component="div"
        count={sortedRows.length}
        rowsPerPage={4}
        page={page}
        onPageChange={handleChangePage}
      />
    </div>
  );
}

export default TransactionTable;
