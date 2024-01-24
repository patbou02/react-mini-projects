import Button from '../../components/Button';

function TemperatureController({ temp, scale="fahrenheit" }) {

  const handleIncreaseTempClick = () => console.log('increase temp');
  const handleLowerTempClick = () => console.log('lower temp');

  const temperature = () => `${temp}°${scale === 'fahrenheit' ? 'F' : 'C'}`;

  return (
    <div className="container mt-3 text-center">
      <div className="card bg-light m-auto bg-accept" style={{ width: 200 }}>
        <h1 className="text-dark card border-50 mt-2 bg-light" style={{ height: 150, width: 150, border: "2px solid #666" }}>{temperature()}</h1>
        <div className="d-flex my-2">
          <Button text="+" onClick={handleIncreaseTempClick} classes="btn-danger" />
          <Button text="-" onClick={handleLowerTempClick} classes="btn-info" />
        </div>
      </div>
    </div>
  );
}

export default TemperatureController;