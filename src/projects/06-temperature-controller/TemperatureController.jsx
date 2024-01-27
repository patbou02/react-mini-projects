import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../components/Button';

function TemperatureController({ temp, scale="fahrenheit" }) {

  const API_KEY = '2ff261dc3d198cf17e27fc8b15f9a603';

  const [temperature, setTemperature] = useState(parseInt(temp));
  const [location, setLocation] = useState({});

  const handleIncreaseTempClick = () => setTemperature(temperature + 1);
  const handleLowerTempClick = () => setTemperature(temperature - 1);

  const tempReading = (temp) => `${temp}°${scale === 'fahrenheit' ? 'F' : 'C'}`;

  const getLocationCoords = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      });
    });
  };

  function getCity() {
    return axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`)
    .then(resp => setLocation({...location, cityName: resp.data[0].name}));
  }

  useEffect(() => {
    getLocationCoords();
    if (location.lat && location.lon) getCity();
  }, []);


  useEffect(() => {
    tempReading(temp);
  }, [temperature]);

  return (
    <div className="container mt-3 text-center">
      <div className="card bg-light m-auto bg-light" style={{ width: 200 }}>
        <h3>{location.cityName}</h3>
        <h1 className={`text-light card border-50 mt-2
        ${temperature < -25 ? 'bg-primary' :
          (temperature <= -10 ? 'bg-facebook-light' :
            (temperature <= 0 ? 'bg-light text-dark' :
              (temperature <= 15 ? 'bg-success' :
                (temperature <= 25 ? 'bg-warning' :
                  (temperature <= 35 ? 'bg-secondary' : 'bg-danger')))))}`} style={{ height: 150, width: 150, border: "2px solid #666" }}>{tempReading(temperature)}</h1>
        <div className="d-flex my-2">
          <Button text="-" onClick={handleLowerTempClick} classes="btn-info" />
          <Button text="+" onClick={handleIncreaseTempClick} classes="btn-danger" />
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default TemperatureController;