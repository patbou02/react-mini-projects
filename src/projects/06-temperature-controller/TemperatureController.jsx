import { useState, useEffect } from 'react';
import Button from '../../components/Button';

function TemperatureController({ temp, scale="fahrenheit" }) {

  const [temperature, setTemperature] = useState(parseInt(temp));

  const handleIncreaseTempClick = () => setTemperature(temperature + 1);
  const handleLowerTempClick = () => setTemperature(temperature - 1);

  const tempReading = (temp) => `${temp}°${scale === 'fahrenheit' ? 'F' : 'C'}`;

  useEffect(() => {
    tempReading(temp);
  }, [temperature]);

  return (
    <div className="container mt-3 text-center">
      <div className="card bg-light m-auto bg-accept" style={{ width: 200 }}>
        <h1 className="text-dark card border-50 mt-2 bg-light" style={{ height: 150, width: 150, border: "2px solid #666" }}>{tempReading(temperature)}</h1>
        <div className="d-flex my-2">
          <Button text="-" onClick={handleLowerTempClick} classes="btn-info" />
          <Button text="+" onClick={handleIncreaseTempClick} classes="btn-danger" />
        </div>
      </div>
    </div>
  );
}

export default TemperatureController;