import { useState } from 'react';
import Title from '../../components/Title';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

export default function RandomizeColors() {

  const [red, setRed] = useState(generateRandomNumber(0, 255));
  const [green, setGreen] = useState(generateRandomNumber(0, 255));
  const [blue, setBlue] = useState(generateRandomNumber(0, 255));

  const redClickHandler = () => setRed(generateRandomNumber(0, 255));
  const greenClickHandler = () => setGreen(generateRandomNumber(0, 255));
  const blueClickHandler = () => setBlue(generateRandomNumber(0, 255));

  const allClickHandler = () => {
    setRed(generateRandomNumber(0, 255));
    setGreen(generateRandomNumber(0, 255));
    setBlue(generateRandomNumber(0, 255));
  }

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div className="container m-auto text-center">
      <Title text="Randomize Colors" />
      <div className="d-flex flex-column">
        <button onClick={redClickHandler} className="btn btn-danger">Randomize RED</button>
        <button onClick={greenClickHandler} className="btn btn-success">Randomize GREEN</button>
        <button onClick={blueClickHandler} className="btn btn-accept">Randomize BLUE</button>
        <button onClick={allClickHandler} className="btn mt-3">Randomize ALL</button>
      </div>
    </div>
);
}
