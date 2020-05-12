import React, { useState, useEffect, useCallback }  from 'react';
import './App.scss';
import {Cards, Chart, CountryPicker, Nav} from './components';
import { fetchData } from "./api";

function App() {
  const [data, setData] = useState({});
  const [currCountry, setCurrCountry] = useState();
   useEffect( () => {
      async function fetchApiData(){
        const fetchedData = await fetchData()
        setData(fetchedData);
     }
     fetchApiData();
  }, []);


  const handleCountryChange = useCallback((country) => {
    setCurrCountry(country)
  }, [currCountry]);

  return (
    <div className='App'>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart/>
    </div>
  );
}

export default App;
