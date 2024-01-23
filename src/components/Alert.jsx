import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { IoMdClose } from "react-icons/io";

function Alert({ type, message }) {

  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = e => {
    e.target.parentElement.parentElement.parentElement.classList.add('fadeAlert');
    setTimeout(()=> setShowAlert(false), 500);
  }

  return (
    showAlert && (
      <div className={`alert alert-${type}`}>
        <div className="alert-close">
          <span className="mr-1">{message}</span>
          <Button classes="btn-close" text="" icon={<IoMdClose />} onClick={closeAlert} />
        </div>
      </div>
    )
  );
}

export default Alert;