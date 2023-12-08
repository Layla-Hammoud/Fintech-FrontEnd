import { Paper, Box, Typography } from "@mui/material";
import image from "../../Assets/Images/maker.png";
const LoyalUserCard = () => {
  const userData = [
    {
      userName: "hadi",
      image: image,
    },
    {
      userName: "simo",
      image: image,
    },
    {
      userName: "abudi",
      image: image,
    },
    {
      userName: "abdelhamid",
      image: image,
    },
    {
      userName: "mariam",
      image: image,
    },
  ];
  return (
    <Paper
    variant="outlined"
      sx={{
        width: "350px",
        height: "424px",
        borderRadius: "5px",
        marginBottom:"20px",
        // "@media (max-width:1570px)": {
        //   display:"none"
        // },
        "@media (max-width:280px)": {
          width: "200px"
        },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "bold",
          paddingTop: "1rem",
        }}
      >
        Most Loyar user
      </Typography>
      <Box
        sx={{
          marginLeft: "5rem",
          marginTop: "4rem",
          "@media (max-width:280px)": {
            width: "100px",
            marginLeft: "0.5rem",
          },
        }}
      >
        {userData.map((data, key) => (
          <Box sx={{ display: "flex", marginTop: "1.5rem" }} key={key}>
            <img alt="profile" src={data.image} style={{width:"35px" , height:"35px"}}/>
            <Typography sx={{ marginLeft: "1.5rem" }}>
              {data.userName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};
export default LoyalUserCard;
