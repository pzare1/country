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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <> 
             <MaterialPagination color="primary" count={pages.length} onChange={handleChange}/>   
        </>
    )
}

export default Pagination




