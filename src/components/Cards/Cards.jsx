import React from "react";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  return (
    <div className="container d-flex align-items-center justify-content-md-between flex-column flex-xl-row">
      <div
        className="card border-info text-white bg-dark mb-3"
        style={{ minWidth: "18rem" }}
      >
        <div className="card-header">Confirmed</div>
        <div className="card-body">
          <h5 className="card-title">
            <CountUp
              start={0}
              end={confirmed ? confirmed.value : 0}
              duration={2}
              separator=" "
            />
          </h5>
          <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
          <p className="card-text">Total cases confirmed.</p>
        </div>
      </div>
      <div
        className="card border-success text-white bg-dark mb-3"
        style={{ minWidth: "18rem" }}
      >
        <div className="card-header">Recovered</div>
        <div className="card-body">
          <h5 className="card-title">
            <CountUp
              start={0}
              end={recovered ? recovered.value : 0}
              duration={2}
              separator=" "
            />
          </h5>
          <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
          <p className="card-text">Total cases recovered.</p>
        </div>
      </div>
      <div
        className="card border-danger text-white bg-dark mb-3"
        style={{ minWidth: "18rem" }}
      >
        <div className="card-header">Death</div>
        <div className="card-body">
          <h5 className="card-title">
            <CountUp
              start={0}
              end={deaths ? deaths.value : 0}
              duration={2}
              separator=" "
            />
          </h5>
          <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
          <p className="card-text">Total cases passed away.</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
