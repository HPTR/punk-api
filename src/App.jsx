import { useState, useEffect } from 'react';
import './App.scss';
import './assets/sass/reset.scss'

import NavBar from "./containers/NavBar/NavBar";
import BeerDisplay from "./containers/BeerDisplay/BeerDisplay";

function App() {

  const [beers, setBeers] = useState([])
  const [searchCriteria, setSearchCriteria] = useState("");
  const filters = ['High ABV (> 6.0%)', 'Classic Range', 'Acidic (Ph < 4)']
  const [activeFilters, setActiveFilters] = useState([])

  const getBeers = async () => {
    let allBeers = [];
    for (let i = 1; i < 6; i++) {
      const beersArr = await fetch(`https://api.punkapi.com/v2/beers?per_page=65&page=${i}`)
      .then(response => response.json())
      .then(data => data);
      beersArr.forEach(beer => allBeers.push(beer))
    }
    setBeers(allBeers)
  }

  useEffect(() => {
    getBeers()
  }, []);

  const handleCheck = (event) => {
    var updatedList = [...activeFilters];
    if (event.target.checked) {
      updatedList = [...activeFilters, event.target.value];
    } else {
      updatedList.splice(activeFilters.indexOf(event.target.value), 1);
    }
    setActiveFilters(updatedList);
  };
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