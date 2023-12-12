import React from 'react'
import PromotionCards from '../Components/Promotions/PromotionCards';
import { useEffect,useState } from 'react';
import useApi from "../hooks/useApi";
function PromotionPage() {
  const { apiCall } = useApi();
  const [promotions,setPromotions] = useState([])
  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await apiCall({
          url: "/api/promotions/read",
          method: "get",
        });
        console.log(response);
        setPromotions(response.Promotions)

      } catch (error) {
        console.error("Error fetching data:", error);
      } 
      // finally {
      //   setLoading(false)
      // }

    };
    fetchPromotions();

  }, []);
  return (
    <>
    
    <PromotionCards promotions={promotions}/>
   
    </>
    
  )
}
export default PromotionPage;
