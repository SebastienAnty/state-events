import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>You clicked the button {counter} times.</h1>
        <p>
          <button onClick={() => setCounter(counter - 1)}> - </button>&nbsp;
          <button onClick={() => setCounter(0)}>Reset</button>&nbsp;
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </p>
      </header>
    </div>
  );
}

export default App;
