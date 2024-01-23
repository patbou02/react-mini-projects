function Button({ icon, classes, text, onClick }) {
  const buttonStyles = {
    display: 'flex',
    alignItems: 'center',
  }

  return <button onClick={onClick} styles={buttonStyles} className={`btn btn-lg ${classes}`}>{icon} {text ?? 'click'}</button>;
}

export default Button;