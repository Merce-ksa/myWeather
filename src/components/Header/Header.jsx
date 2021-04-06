import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import '../../assets/fonts/icofont.css';

export default function Header() {
  // const dataLocation = useLocation();

  const [cityName, setCityName] = useState('');
  // const [metric, setMetric] = useState(true);
  // const [imperial, setImperial] = useState(false);

  // function toggleMetric() {
  //   setMetric(true);
  //   setImperial(false);
  // }

  // function toggleImperial() {
  //   setMetric(false);
  //   setImperial(true);
  // }

  return (
    <header>
      <div className="header-wrap">
        <div className="search-wrap">
          <input
            type="text"
            id="searcher-header"
            className="input-header"
            placeholder="Search by location"
            value={cityName}
            name="cityName"
            onChange={(event) => setCityName(event.target.value)}
          />
          <Link to="/">
            Hola
          </Link>
          {/* <Link to={{
            pathname: '/weather',
            state: {
              cityName: `${cityName}`,
              units: metric ? 'metric' : 'imperial'
            }
          }}
          >
            <span className="icofont-search-1" />
          </Link> */}
        </div>
        {/* <ul key="units" className="measurement-units">
          <li className={metric ? 'units-list--active units-list' : 'units-list'}>
            <Link
              className={metric ? 'units-btn--active units-btn' : 'units-btn '}
              onClick={toggleMetric}
              to={{
                pathname: '/weather',
                state: {
                  cityName: !cityName ? `${dataLocation.state.cityName}` : `${cityName}`,
                  units: 'metric'
                }
              }}
            >
              Metric: ºC, m/s
            </Link>
          </li>
          <li className={imperial ? 'units-list--active units-list' : 'units-list'}>
            <Link
              className={imperial ? 'units-btn--active units-btn' : 'units-btn '}
              onClick={toggleImperial}
              to={{
                pathname: '/weather',
                state: {
                  cityName: !cityName ? `${dataLocation.state.cityName}` : `${cityName}`,
                  units: 'imperial'
                }
              }}
            >
              Imperial: ºF, mph
            </Link>
          </li>
        </ul> */}
      </div>
    </header>
  );
}
