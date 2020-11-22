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
          Welcome to Purrsonalities
        </p>
      </header>
    </div>
  );
}

export default App;
