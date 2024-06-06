import Stepper from './components/Stepper';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <p>Please fill out the form below</p>
      </header>
      <div className="App-container">
      <Stepper />
      </div>      
    </div>
  );
}

export default App;
