import logo from './logo.svg';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <NavBar /> */}
        <p>
          Lax temp website
        </p>
        <p>
        ITS OFFICIAL yes?
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
    // <NavBar></NavBar>
  );
}

export default App;
