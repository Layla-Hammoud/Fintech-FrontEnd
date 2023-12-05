import React from "react";
import UserCard from "../../Components/UserCard/UserCard";
import { Stack } from "@mui/material";
const Merchants = () => {
  const merchants = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@gmail.com",
    },
    {
      name: "David Smith",
      email: "david.smith@mailfake.com",
    },
    {
      name: "Emily Brown",
      email: "emily_brown@fakemail.net",
    },
    {
      name: "Jacob Miller",
      email: "jacob.miller@fakeinbox.com",
    },
  ];
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
          name={merchant.name}
          email={merchant.email}
        />
      ))}
      </Stack>
    </>
  );
};
export default Merchants;
