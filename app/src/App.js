import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import axios from 'axios';

function App() {
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
  console.log(alldata);
  return (
      <>
        <Home alldata={alldata}/>
      </>
  );
}

export default App;
