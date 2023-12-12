import CardBalance from '../../Components/CardBalance'
import SavingSection from '../../Components/SavingModal/SavingSection'
import StatisticCard from '../../Components/StatisticCard/StatisticCard'
import SectionUserDashboard from '../../Components/Promotions/section'
import TransactionTable from '../../Components/TransactionTable/TransactionTable'
import './UserDashboard.css'
import useApi from '../../hooks/useApi'
import { useState, useEffect } from 'react'


function UserDashboard() {

  const { apiCall } = useApi();
  const [wallet, setWallet] = useState({})
  const [transactions,setTransactions]=useState([])

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await apiCall({
          url: "/api/wallet/view/1",
          method: "get",
        });
        setWallet(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchTransaction = async () => {
      try {
        const response = await apiCall({
          url: `/api/transactions/transactionForUser/1`, // Pass the page parameter to the backend
          method: "get",
        });
        console.log(response)
        setTransactions(response.data);
      } catch (error) {
        console.error(error.response)
      }
    };
    fetchTransaction();

    fetchWallet();
  }, []);



  return (
    <div className='overViewUser'>
      <div className='firstColumn'>
        <section className='Balance'>
          <CardBalance title='USD Balance' titleColor='#FFF4F4' amount={wallet.usdBalance} unit='$' backGroundColor='#4CD080' borderColor='#0F5533' />
          <CardBalance title='USDT Balance' titleColor='#FFF4F4' amount={wallet.usdtBalance} unit='T' backGroundColor='#FF9C33' borderColor='#924418' />
        </section>
        <StatisticCard wallet={wallet} transactions={transactions}/>
        <SectionUserDashboard />
      </div>
      <div className='secondColumn'>
        <SavingSection />
        <TransactionTable rows={transactions}/>
      </div>
    </div>
  )
}

export default UserDashboard
