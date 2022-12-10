import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import CountryInside from './Pages/CountryInside'

import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";


function App() {
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(5);
  const [alldata, setalldata] = useState([])
  function getEvents() {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => response.data)
      .then((data) => {
        setalldata(data);
      });
  }
  useEffect(() => {
    getEvents();
  }, [])
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = alldata.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home alldata={currentPosts} totalPosts={alldata.length} postPerPage={postPerPage} setcurrentPage={setcurrentPage} currentPage={currentPage}/>}></Route>
          <Route path="/:country" element={<CountryInside />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
