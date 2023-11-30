import logo from './logo.svg';
import './App.css';
import { db } from './sqlite';

function App() {
  const addData = () => {
    if (db) {
      db.exec('INSERT INTO test(name, age) VALUES (\'Matheus\', 10), (\'Lucas\', 20), (\'Leo\', 30);');
      db.exec('SELECT * FROM test', {
        callback: function (a) {
          console.log(a);
        }
      });
    }
  }
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
        <button onClick={addData}>Add Data</button>
      </header>
    </div>
  );
}

export default App;
