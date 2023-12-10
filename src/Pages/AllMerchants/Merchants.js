import React from "react";
import UserCard from "../../Components/UserCard/UserCard";
import { Stack } from "@mui/material";
import { useEffect,useState } from "react";
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
        setMerchants(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMerchants();
  }, []);
  
  return (
    <>
    <Stack
  direction="row"
  justifyContent="start"
  alignItems="center"
  flexWrap="wrap"
  gap="30px"
  sx={{
    marginTop:"6em",
    marginLeft:"5em",
    '@media (max-width:720px)': {
        flexDirection: "column",
        justifyContent:"center",
        gap:"30px",
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
    </>
  );
};
export default Merchants;
