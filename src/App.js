import React, { useState, useEffect, useCallback }  from 'react';
import './App.scss';
import {Cards, Chart, CountryPicker} from './components';
import { fetchData } from "./api";

function App() {
  const [data, setData] = useState({});
  const [currCountry, setCurrCountry] = useState('');
   useEffect( () => {
      async function fetchApiData(){
        const fetchedData = await fetchData(currCountry)
        setData(fetchedData);
     }
     fetchApiData();
  }, [currCountry]);


  const handleCountryChange = useCallback((country) => {
    setCurrCountry(country)
  }, []);

  return (
    <div className='App'>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={[data]} country={currCountry}/>
    </div>
  );
}

export default App;
