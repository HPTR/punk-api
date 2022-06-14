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

  const handleSearchChange = (event) => {
    setSearchCriteria(event.target.value);
  }

  const filteredBeersBySearch = beers.filter(beer => beer.name.toLowerCase().includes(searchCriteria.toLowerCase()));

  const combinedArr = [];
  const highAbv = filteredBeersBySearch.filter(beer => parseFloat(beer.abv) > 6);
  const classic = filteredBeersBySearch.filter(beer => beer.first_brewed[5] === '0');
  const acidic = filteredBeersBySearch.filter(beer => parseFloat(beer.ph) < 4);

  if (activeFilters.includes('High ABV (> 6.0%)')) {
    highAbv.forEach(beer => combinedArr.push(beer));
  }

  if (activeFilters.includes('Classic Range')) {
    classic.forEach(beer => combinedArr.push(beer));
  }

  if (activeFilters.includes('Acidic (Ph < 4)')) {
    acidic.forEach(beer => combinedArr.push(beer));
  }
  
  const filteredBeersByCheckboxes = [...new Set(combinedArr)];

  return (
    <div className="App">
      <NavBar handleCheck={handleCheck} filters={filters} handleSearchChange={handleSearchChange} />
      <BeerDisplay beers={activeFilters.length > 0 ? filteredBeersByCheckboxes : filteredBeersBySearch} searchCriteria={searchCriteria} />
    </div>
  );
}

export default App;