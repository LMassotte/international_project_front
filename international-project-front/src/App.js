import logo from './resources/logo.svg';
import './assets/App.css';
import MyComponent from './components/Welcomer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	      <img src={logo} className="App-logo" alt="logo" />
        <MyComponent /> 
      </header>
    </div>
  );
}

export default App;
