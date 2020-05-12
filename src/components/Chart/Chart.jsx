import React, {useState, useEffect} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart } from 'recharts';
import {fetchDailyData} from '../../api';

const Chart = (data, country) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect( () => {
    const fetchApiData = async () => {
      setDailyData(await fetchDailyData());
    }
    fetchApiData();
  }, []);

  const barChart = (
    data.confirmed ? (
      <BarChart/>
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
      {lineChart}
    </div>
  )
}

export default Chart;