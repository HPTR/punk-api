import React from 'react'
import "./SearchBox.scss"

const SearchBox = (props) => {
  const { handleSearchChange } = props;
  return (
    <div className='search'>
        <input className='search__input' type="text" onChange={handleSearchChange} />
    </div>
  )
}

export default SearchBox