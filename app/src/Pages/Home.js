import React from 'react'
import Navbar from '../Components/Navbar'
import ListCountry from '../Components/ListCountry'
function Home({alldata}) {
    return (
        <>
            <Navbar/>
            <ListCountry alldata={alldata} />
        </>
    )
}
export default Home
