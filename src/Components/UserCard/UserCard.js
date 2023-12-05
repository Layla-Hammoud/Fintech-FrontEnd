import { Paper } from "@mui/material";
import maker from "../../Assets/Images/maker.png";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
const UserCard = ({email,name}) => {
  return (
    <>
      <Paper
        elevation={4}
        sx={{
          width: "240px",
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
          <Typography variant="p" sx={{
            fontWeight: 'bold',
            fontSize:"1.5em"
          }}>{name}</Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: "0.8rem", width: "100%" }}
          >
            {email}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" sx={{
            backgroundColor:"#119c59",
            "&:hover": {
              backgroundColor: "#2C6E49",
            },
          }}>Exchange</Button>
        </Box>
      </Paper>
    </>
  );
};

export default UserCard;
