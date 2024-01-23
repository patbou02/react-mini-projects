function Button({ icon, classes, text }) {
  const buttonStyles = {
    display: 'flex',
    alignItems: 'center',
  }

  return <button styles={buttonStyles} className={`btn btn-lg ${classes}`}>{icon} {text ?? 'click'}</button>;
}

export default Button;