import React, { useState,useEffect } from 'react'
import axios from 'axios'
export default  async function TestGridPromotins() {






  const [data , setData]  = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = axios.get ('http://localhost:4000/api/promotions/read');
        setData(response.data)
      }catch(error){
        console.log('error frtching data ',error)
      }
    }
    fetchData()    
  },[])
  return(
    <div>fetch Dtaa {data}</div>
  )

  //   useEffect(()=>{
  //       var myHeaders = new Headers();
  //       myHeaders.append("Content-Type", "application/json");
        
        
  //       var requestOptions = {
  //         method: 'GET',
  //         headers: myHeaders,
          
  //       };
        
  //       fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  //   },[])
  // return (
  //   <div>testGridPromotins</div>
    
  // )
}
