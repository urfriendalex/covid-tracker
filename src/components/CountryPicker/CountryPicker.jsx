import React, { useState, useEffect } from 'react';
import Select from 'react-styled-select'
import { fetchCountries } from '../../api/index';
import { Container } from 'react-bootstrap';
import styles from './CountryPicker.module.scss';

const CountryPicker = ( { handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  const [selectedOption, setSelectedOption] = useState({});

  const handleChange = (selectedOpt) => {
    setSelectedOption(selectedOpt);
    console.log(`Option selected:`, selectedOption);
  }

  useEffect(() => {
    async function fetchApiCountries() {
      setCountries(await fetchCountries());
    }
    fetchApiCountries();
  }, [setCountries]);

  return (
    <Container >
      <Select className={styles.darkTheme} options={countries} onChange={handleCountryChange} />
    </Container>
  );
};

export default CountryPicker;
