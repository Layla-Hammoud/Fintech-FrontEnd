import {React,useState} from 'react';
import Pagination from '@mui/material/Pagination';


const PaginationComponent = () => {
    const [currentPage , setCurrentPage] = useState(1);
    const recordsPerPage = 6
    const lastIndex =  currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage

    return (
           <Pagination count={5} color='primary' >
        
           </Pagination>
          )
         } 
  

export default PaginationComponent;






