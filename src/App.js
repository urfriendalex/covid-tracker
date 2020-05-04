import React, { useState, useEffect } from 'react';
import './App.scss';
import {Cards, Chart, CountryPicker} from './components';
import { fetchData } from "./api";

function App() {
  const [data, setData] = useState({});
   useEffect( () => {
      async function fetchApiData(){
        const fetchedData = await fetchData()
        setData(fetchedData);
     }
     fetchApiData();
  }, []);

  return (
    <div className='App'>
      <Cards data={data}/>
      <CountryPicker/>
      <Chart/>
    </div>
  );
}

export default App;
