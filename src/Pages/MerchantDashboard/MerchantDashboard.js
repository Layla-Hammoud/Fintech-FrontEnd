import CardBalance from "../../Components/CardBalance";
import { Box } from "@mui/material";
import TransactionStatistic from "../../Components/TransactionStatistic/TransactionStatistic";
import LoyalUserCard from "../../Components/LoyalUserCard/LoyalUserCard";
import TransactionTable from "../../Components/TransactionTable/TransactionTable";
import { toast } from "react-toastify";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useApi from "../../hooks/useApi";
const MerchantDashboard = () => {
  const { user, checkUser } = useContext(AuthContext);
  const { fetchUserData } = useContext(AuthContext);
  const { apiCall } = useApi();
  const [wallet, setWallet] = useState({});
  const [rows, setRows] = useState([]);
  const uniqueSenders = new Set(rows.map((row) => row.senderId));
  const uniqueSenderCount = uniqueSenders.size;

  useEffect(() => {
    const fetchData = async () => {
      try {
          const walletResponse = await apiCall({
            url: `/api/wallet/view`,
            method: "get",
          });
          setWallet(walletResponse.data);
  
          const transactionResponse = await apiCall({
            url: `/api/transactions/transactionForMerchant`, // Use user.id here if needed
            method: "get",
          });
          setRows(transactionResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          margin: "90px auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            "@media (max-width:1440px)": {
              justifyContent: "center",
            },
          }}
        >
          <CardBalance
            title={"USD Balance"}
            amount={wallet.usdBalance}
            unit={"$"}
            backGroundColor={"white"}
            borderColor={"#0F5533"}
          />
          <CardBalance
            title={"USDT Balance"}
            amount={wallet.usdtBalance}
            unit={"T"}
            backGroundColor={"white"}
            borderColor={"#2DD683"}
          />
          <CardBalance
            title={"Income"}
            amount={wallet.usdBalance}
            unit={"T"}
            backGroundColor={"white"}
            borderColor={"#FA8B3A"}
          />
          <CardBalance
            title={"Interacted Users"}
            amount={uniqueSenderCount}
            backGroundColor={"white"}
            borderColor={"#AFAFAF"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "20px",
            marginBottom: "20px",
            "@media (max-width:1570px)": {
              justifyContent: "center",
            },
          }}
        >
          <TransactionStatistic transactions={rows} />
        </Box>
        <TransactionTable rows={rows} />
      </Box>
    </>
  );
};
export default MerchantDashboard;
