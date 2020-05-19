import React, {useState, useEffect} from 'react';
import { Bar, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart } from 'recharts';
import {fetchDailyData} from '../../api';

const Chart = ({data, country}) => {
  
  const [dailyData, setDailyData] = useState([]);
  useEffect( () => {
    const fetchApiData = async () => {
      setDailyData(await fetchDailyData());
    }
    fetchApiData();
  }, []);

  console.log(data);
  console.log(country);

  const barChart = (
    country ? (
      <BarChart width={600} height={300} data={data}>
      <Bar type="monotone" dataKey="confirmed.value" stroke="#008080" fill="#008090"/>
      <Bar type="monotone" dataKey="deaths.value" stroke="#008080" fill="#008090"/>
      <Bar type="monotone" dataKey="recovered.value" stroke="#008080" fill="#008090"/>
      <YAxis />
      <XAxis dataKey='confirmed'/>
      </BarChart>
    ) : null
  )

  const lineChart = (
    dailyData.length ? (
      <AreaChart width={600} height={300} data={dailyData}>
      <Area type="monotone" dataKey="confirmed" stroke="#008080" fill="#008090"/>
      <Area type="monotone" dataKey="deaths" stroke="#ac1515" fill="#ac1520" />
      <XAxis dataKey="reportDate" />
      <YAxis />
      <Tooltip />
      </AreaChart>
    ) : null
  )

  return(
    <div>
      {country!=='' ? barChart : lineChart}
    </div>
  )
}

export default Chart;