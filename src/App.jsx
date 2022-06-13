import { useState } from 'react';
import './App.scss';
import beers from "./data/beers";

import NavBar from "./containers/NavBar/NavBar";
import BeerDisplay from "./containers/BeerDisplay/BeerDisplay";

function App() {

  const filtersArr = [{
    query: 'High ABV (> 6.0%)',
    enabled: false
  },
  {
    query: 'Classic Range',
    enabled: false
  },
  {
    query: 'Acidic (Ph < 4)',
    enabled: false
  }
]

  const [filters, setFilters] = useState(filtersArr)
  const [searchCriteria, setSearchCriteria] = useState("");

  const filteredBeers = beers.filter(beer => {
    return beer
  });

  return (
    <div className="App">
      <NavBar filters={filters} toggleFilter={setFilters} setSearchCriteria={setSearchCriteria} />
      <BeerDisplay beers={filteredBeers} searchCriteria={searchCriteria} />
    </div>
  );
}

export default App;