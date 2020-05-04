import React from 'react';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdated } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  console.log(confirmed);
  return (
    <div className='container d-flex justify-content-md-between'>
      <div
        className='card border-info text-white bg-dark mb-3'
        style={{ minWidth: '18rem' }}>
        <div className='card-header'>Confirmed</div>
        <div className='card-body'>
          <h5 className='card-title'>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2}
              separator=' '
            />
          </h5>
          <p className='card-text'>Total cases confirmed.</p>
        </div>
      </div>
      <div
        className='card border-success text-white bg-dark mb-3'
        style={{ minWidth: '18rem' }}>
        <div className='card-header'>Recovered</div>
        <div className='card-body'>
          <h5 className='card-title'><CountUp
              start={0}
              end={recovered.value}
              duration={2}
              separator=' '
            /></h5>
          <p className='card-text'>Total cases recovered.</p>
        </div>
      </div>
      <div
        className='card border-danger text-white bg-dark mb-3'
        style={{ minWidth: '18rem' }}>
        <div className='card-header'>Death</div>
        <div className='card-body'>
          <h5 className='card-title'><CountUp
              start={0}
              end={deaths.value}
              duration={2}
              separator=' '
            /></h5>
          <p className='card-text'>Total cases passed away.</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
