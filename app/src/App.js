import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import axios from 'axios';
import Pagination from './Components/Pagination';

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
  useEffect(()=>{
      getEvents();
  },[])
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = alldata.slice(firstPostIndex,lastPostIndex);
  return (
      <>
        <Home alldata={currentPosts} totalPosts ={alldata.length} postPerPage={postPerPage} setcurrentPage={setcurrentPage}/>
      </>
  );
}

export default App;
