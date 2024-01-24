import Button from '../../components/Button';

function TemperatureController() {
  return (
    <div className="container mt-3 text-center">
      <div className="card bg-light m-auto" style={{ width: 200 }}>
        <h1 className="text-light card border-50 mt-2" style={{ height: 150, width: 150, border: "2px solid #666" }}>12</h1>
        <div className="d-flex my-2">
          <Button text="+" classes="btn-danger"/>
          <Button text="-" classes="btn-info" />
        </div>
      </div>
    </div>
  );
}

export default TemperatureController;