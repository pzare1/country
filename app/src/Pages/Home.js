import React from 'react'
import Navbar from '../Components/Navbar'
import ListCountry from '../Components/ListCountry'
import Pagination from '../Components/Pagination'
function Home({alldata,totalPosts, postPerPage,setcurrentPage,currentPage,totaldata}) {
    return (
        <>
            <Navbar totaldata={totaldata}/>
            <ListCountry alldata={alldata} />
            <Pagination  totalPosts={totalPosts} postNumber={postPerPage} setPage={setcurrentPage} page={currentPage}/>
        </>
    )
}
export default Home
