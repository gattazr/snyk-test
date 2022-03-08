import logo from './logo.svg';
import './App.css';
import { versions } from 'systeminformation';

const getQuery = () => {
  if (typeof window !== 'undefined') {
    return new URLSearchParams(window.location.search);
  }
  return new URLSearchParams();
};

function App() {
  const versionName = getQuery().get('version');
    versions({
    toString: () => { console.log(versionName) }
  });

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
      <div>
        <p>
          {versionName}
        </p>
      </div>
    </div>
  );
}

export default App;
