import { useState } from 'react';
import './App.scss';
import beers from "./data/beers";

import NavBar from "./containers/NavBar/NavBar";
import BeerDisplay from "./containers/BeerDisplay/BeerDisplay";

function App() {

  const [filterQuery, setfilterQuery] = useState([])
  const [searchCriteria, setsearchCriteria] = useState("");
  const [filters, setfilters] = useState(['High ABV (> 6.0%)', 'Classic Range', 'Acidic (ph < 4)'])

  const filteredBeers = beers.filter(beer => {
    return beer
  });

  return (
    <div className="App">
      <NavBar filters={filters} />
      <BeerDisplay />
    </div>
  );
}

export default App;