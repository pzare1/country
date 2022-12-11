import {useEffect, useState} from 'react';
import './App.css';
import Home from './Pages/Home';
import CountryInside from './Pages/CountryInside'
import axios from 'axios';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

//getting all data from api
function App() {
    const [allData, setAllData] = useState([])

    async function getEvents() {
        const {data} = await axios.get("https://restcountries.com/v3.1/all");
        setAllData(data);
    }

    useEffect(() => {
        getEvents();
    }, [])


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home allData={allData}/>}/>
                    <Route path="/:country" element={<CountryInside/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
