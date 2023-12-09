import CardBalance from '../../Components/CardBalance'
import SavingSection from '../../Components/SavingModal/SavingSection'
import StatisticCard from '../../Components/StatisticCard/StatisticCard'
import SectionUserDashboard from '../../Components/Promotions/section'
import TransactionTable from '../../Components/TransactionTable/TransactionTable'
import './UserDashboard.css'
function UserDashboard() {
    return (
        <div className='overViewUser'>
            <div className='firstColumn'> 
             <section className='Balance'>
                <CardBalance title='USD Balance' titleColor='#FFF4F4' amount={255000} unit='$' backGroundColor='#4CD080' borderColor='#0F5533' />
                <CardBalance title='USDT Balance' titleColor='#FFF4F4' amount={1076754.77} unit='T' backGroundColor='#FF9C33' borderColor='#924418' />
            </section>
                <StatisticCard />
                <SectionUserDashboard />
            </div>
            <div className='secondColumn'>
            <SavingSection />
            <TransactionTable />
</div>
        </div>
    )
}

export default UserDashboard
