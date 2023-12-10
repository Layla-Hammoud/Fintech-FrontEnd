import axios from "axios";


const axiosInstance = axios.create({
    headers:{
        
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
    baseURL: `${process.env.REACT_APP_BACKEND_ENDPOINT}`
});

export default axiosInstance;