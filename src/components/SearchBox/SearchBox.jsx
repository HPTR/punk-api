import React from 'react'
import "./SearchBox.scss"

const SearchBox = (props) => {
  const { handleSearchChange } = props;
  return (
    <div className='search'>
        <input placeholder='Search by name' className='search__input' type="text" onChange={handleSearchChange} />
    </div>
  )
}

export default SearchBox