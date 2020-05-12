import React, { useState, useEffect } from 'react';
import Select from 'react-styled-select'
import { fetchCountries } from '../../api/index';
import { Container } from 'react-bootstrap';
import styles from './CountryPicker.module.scss';

const CountryPicker = ( { handleCountryChange }) => {
  const [selectedCountry, setSelectedCountry] = useState('Global');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchApiCountries() {
      setCountries(await fetchCountries());
    }
    fetchApiCountries();
  }, [setCountries]);

  return (
    <Container >
      <Select className={styles.darkTheme} options={countries} onChange={(e) => handleCountryChange(e)} />
    </Container>
  );
};

export default CountryPicker;
