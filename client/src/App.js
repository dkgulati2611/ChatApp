
import './App.css';
import { io } from 'socket.io-client';

const socket = io('/');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> chat Application</p>
      </header>
    </div>
  );
}

export default App;
