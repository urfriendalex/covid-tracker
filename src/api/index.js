import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  try {
    console.log(`${url}/countries${country ? `/${country}` : ''}`);
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(`${url}${country ? `/countries/${country}` : ''}`);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (err) {
    console.error(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      reportDate: dailyData.reportDate,
    }));
  } catch (err) {
    console.error(err);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => ({
      label: country.name,
      value: country.name,
    }));
  } catch (err) {
    console.error(err);
  }
};
