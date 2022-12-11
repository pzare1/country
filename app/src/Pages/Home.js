import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import ListCountry from '../Components/ListCountry'
import Pagination from '../Components/Pagination'


function Home({allData}) {
    const [currentPage, setCurrentPage] = useState(1);
    const POST_PER_PAGE = 5;

    function getCurrentData(data) {
        const indexOfLastTask = currentPage * POST_PER_PAGE;
        const indexOfFirstTask = indexOfLastTask - POST_PER_PAGE;
        return data.slice(indexOfFirstTask, indexOfLastTask);
    }
    //pagination process with task number and index of task
    const [query, setQuery] = useState([]);

    return (
        <>
            <Navbar allData={allData} onQuery={setQuery}/>
            <ListCountry allData={getCurrentData(query.length > 0 ? query : allData)}/>
            <Pagination totalPosts={allData.length}
                        postNumber={POST_PER_PAGE}
                        setPage={setCurrentPage}
                        page={currentPage}/>
        </>
    )
}

export default Home
