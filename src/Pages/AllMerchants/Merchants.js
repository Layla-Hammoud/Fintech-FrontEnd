import React from "react";
import UserCard from "../../Components/UserCard/UserCard";
import { Stack, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
const Merchants = () => {
  const { apiCall } = useApi();
  const [merchants, setMerchants] = useState([]);
  useEffect(() => {
    const fetchMerchants = async () => {
      try {
        const response = await apiCall({
          url: "/api/users/merchants",
          method: "get",
        });
        setMerchants(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMerchants();
  }, []);

  return (
    <>
    <Box sx={{
      margin:"6em auto",
      maxWidth:"1200px",
      padding:"0 24px"
    }}>
    <Typography variant="h5" sx={{
      fontSize: 30,
      fontWeight: "bold",
      marginBottom:'0.2em'
    }}>Buy USDT</Typography>
    <Typography variant="p" marginTop='2em'>Here is a list of merchants you can buy from</Typography>
      <Stack
      marginTop='4rem'
        direction="row"
        justifyContent="start"
        alignItems="center"
        flexWrap="wrap"
        gap="30px"
        sx={{
         
          "@media (max-width:720px)": {
            flexDirection: "column",
            justifyContent: "center",
            gap: "30px",
            marginLeft:"1em"
          },
        }}
      >
       

        {merchants.map((merchant, index) => (
          <UserCard
            key={index} // Using index as the key, consider a more unique key if available
            merchant={merchant}
          />
        ))}
      </Stack>
      </Box>
    </>
  );
};
export default Merchants;
