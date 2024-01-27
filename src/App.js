import './App.css';
// import RandomizeColors from './projects/02-randomize-colors/RandomizeColors';
//import ESignature from './projects/01-E-Signature/ESignature';
//import LikeMyPhoto from './projects/03-like-my-photo/LikeMyPhoto';
//import Testimonials from './projects/04-Testimonials/Testimonials';
//import Alerts from './projects/05-Alerts/Alerts';
// import TemperatureController from './projects/06-temperature-controller/TemperatureController';
import DarkMode from './projects/07-light-mode-dark-mode/LightModeDarkMode';
import LightModeDarkMode from './projects/07-light-mode-dark-mode/LightModeDarkMode';

function App() {
  return (
    <div>
      <div className="title-main text-center">React Mini Projects</div>
      {/*<ESignature />*/}
      {/*<RandomizeColors />*/}
      {/*<LikeMyPhoto />*/}
      {/*<Testimonials />*/}
      {/*<Alerts />*/}
      {/*<TemperatureController temp="32" scale="celsius" />*/}
      <LightModeDarkMode />
    </div>
  );
}

export default App;
