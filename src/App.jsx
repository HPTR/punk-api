import { useState, useEffect } from 'react';
import './App.scss';
import './assets/sass/reset.scss'

import NavBar from "./containers/NavBar/NavBar";
import BeerDisplay from "./containers/BeerDisplay/BeerDisplay";

function App() {

  const [beers, setBeers] = useState([])
  const [searchCriteria, setSearchCriteria] = useState("");
  const filterLabels = [{
    label: 'High ABV (> 6.0%)',
    filter: 'abv'
  },
  {
    label: 'Classic Range',
    filter: 'first_brewed'
  },
  {
    label: 'Acidic (Ph < 4)',
    filter: 'ph'
  }];
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [filters, setFilters] = useState({
    abv: '',
    first_brewed: '',
    ph: ''
  })

  const getBeers = async () => {
    let allBeers = [];
    for (let i = 1; i < 6; i++) {
      const beersArr = await fetch(`https://api.punkapi.com/v2/beers?per_page=65&page=${i}`)
      .then(response => response.json())
      .then(data => data);
      beersArr.forEach(beer => allBeers.push(beer))
    }
    setBeers(allBeers)
    setFilteredBeers(allBeers)
  }

  useEffect(() => {
    getBeers()
  }, []);

  useEffect(() => {
    setFilteredBeers(filterArray(beers, filters))
  }, [filters, searchCriteria])

  const handleCheck = (event) => {
    const selectedFilter = event.target.dataset.filter;
    //I want to give each checkbox a prop to match the key in the new filter object
    //the plan being to use that in an if statement to set the state
    //just need to figure out how to get that info to the checkbox
    const updatedState = {...filters};

    if (event.target.checked) {
      switch (selectedFilter) {
        case 'abv':
          updatedState.abv = abv => parseFloat(abv) > 6;
          setFilters(updatedState);
          break;
        case 'first_brewed':
          updatedState.first_brewed = first_brewed => first_brewed[5] === '0';
          setFilters(updatedState);
          break;
        case 'ph':
          updatedState.ph = ph => parseFloat(ph) < 4;
          setFilters(updatedState);
          break;
        default:
          console.log("oh no");
      }
    } else {
      switch (selectedFilter) {
        case 'abv':
          updatedState.abv = '';
          setFilters(updatedState);
          break;
        case 'first_brewed':
          updatedState.first_brewed = '';
          setFilters(updatedState);
          break;
        case 'ph':
          updatedState.ph = '';
          setFilters(updatedState);
          break;
        default:
          console.log("oh no");
      }
    }
  };

  const handleSearchChange = (event) => {
    setSearchCriteria(event.target.value);
  }

  function filterArray(array, filters) {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      // validates all filter criteria
      return filterKeys.every(key => {
        // ignores non-function predicates
        if (typeof filters[key] !== 'function') return true;
        return filters[key](item[key]);
      });
    });
  }


  return (
    <div className="punk-api">
      <h1 className='punk-api__heading'>Punk API</h1>
      <NavBar handleCheck={handleCheck} filterLabels={filterLabels} handleSearchChange={handleSearchChange} />
      <BeerDisplay beers={filteredBeers} />
    </div>
  );
}

export default App;