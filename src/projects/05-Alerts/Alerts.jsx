import Alert from '../../components/Alert';

function Alerts() {

  return (
    <div className="container mx-auto">
      <h2 className="subtitle">Alerts</h2>
      <Alert type="danger" message="Successful login" />
      <Alert type="success" message="" />
      <Alert type="info" message="" />
    </div>
  );
}

export default Alerts;