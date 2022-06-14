import { useState } from 'react';
import './App.scss';
import './assets/sass/reset.scss'
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
      <NavBar handleCheck={handleCheck} filters={filters} handleSearchChange={handleSearchChange} />
      <BeerDisplay beers={activeFilters.length > 0 ? filteredBeersByCheckboxes : filteredBeersBySearch} searchCriteria={searchCriteria} />
    </div>
  );
}

export default App;