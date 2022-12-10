import React from 'react'
import MaterialPagination from '@mui/material/Pagination';
import './Pagination.css'
function Pagination({totalPosts,postNumber,setPage,page}) {
    let pages = [];
    for (var i = 1; i<= Math.ceil(totalPosts/postNumber); i++){
        pages.push(i);
    }
    const handleChange = (e,p) => {
        setPage(p)
    }
    return (
        <> 
             <MaterialPagination color="primary" count={pages.length} onChange={handleChange}/>   
        </>
    )
}

export default Pagination




