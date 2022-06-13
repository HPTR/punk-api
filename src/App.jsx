import './App.css';
import {beers} from "./data/beers";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BeerDisplay />
    </div>
  );
}

export default App;