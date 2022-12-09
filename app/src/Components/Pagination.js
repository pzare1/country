import React from 'react'

function Pagination({totalPosts,postNumber,setPage}) {
    let pages = [];
    const mathi = totalPosts/postNumber;
    for (var i = 1; i<= Math.ceil(totalPosts/postNumber); i++){
        pages.push(i);
    }
    console.log(mathi);
    return (
        <>
            {pages.map((page,index) => {
                return <button className="btn btn-primary m-2" onClick={() =>setPage(page)} key={index}>{page}</button>  
            })}     
        </>
    )
}

export default Pagination
