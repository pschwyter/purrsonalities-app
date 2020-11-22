import logo from './logo.svg';
import './App.css';

function App() {
  console.log("API_ROOT_URL", process.env.REACT_APP_API_ROOT_URL)
  const r = fetch("http://localhost:4000").then(r => console.log(r));
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
      </header>
    </div>
  );
}

export default App;
