import Alert from '../../components/Alert';

function Alerts() {

  return (
    <div className="container mx-auto">
      <h2 className="subtitle">Alerts</h2>
      <Alert type="danger" message="All fields must be filled in." />
      <Alert type="success" message="Successful login" />
      <Alert type="info" message="Time triggered" delay={true} />
    </div>
  );
}

export default Alerts;