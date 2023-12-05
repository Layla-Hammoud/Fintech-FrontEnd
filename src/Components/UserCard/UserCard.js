import { Paper } from "@mui/material";
import maker from "../../Assets/Images/maker.png";
import { Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import TransactionModel from "../TransactionModel/TransactionModel";
const UserCard = ({ email, name }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Paper
        elevation={4}
        sx={{
          width: "300px",
          maxWidth: "360px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          borderRadius: "20px",
          "& img": { marginTop: "1.5rem" },
          "@media (min-width: 280px)": {
            padding: "1.5em 2em",
          },
        }}
      >
        <img src={maker} alt="maker" style={{ margin: "1em auto" }} />
        <Box>
          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5em",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: "0.8rem", width: "100%" }}
          >
            {email}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              backgroundColor: "#119c59",
              "&:hover": {
                backgroundColor: "#2C6E49",
              },
            }}
          >
            Exchange
          </Button>
          <TransactionModel open={open} setOpen={setOpen} name={name}/>
        </Box>
      </Paper>

    </>
  );
};

export default UserCard;
