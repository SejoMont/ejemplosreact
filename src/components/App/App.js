import logo from '../../assets/images/logo.svg';
import './App.css';
import mondongo from '../../assets/images/mondongo.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={mondongo}/>
      </header>
    </div>
  );
}

export default App;
