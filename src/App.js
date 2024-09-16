import logo from './logo.svg';
import './App.css';
const Quote = require('inspirational-quotes');
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <h1>{Quote.getRandomQuote()}</h1>
        <button onClick={()=>{window.location.reload()}}>Click Me</button>
      
      </header>
    </div>
  );
}

export default App;
