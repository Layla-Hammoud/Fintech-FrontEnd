import useApi from "../hooks/useApi.js";


 export async function FetchData(){
    const {apiCall} = useApi();
    try{
        const response = await apiCall({
            url:'/api/promotions/read',
            method:'get'
        });
        console.log(response)
        return response;
    }catch(error){
        console.error('error fetching data:', error)
    }
    
 };