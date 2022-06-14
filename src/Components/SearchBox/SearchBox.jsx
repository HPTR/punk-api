import React from 'react'

const SearchBox = (props) => {
  const { handleSearchChange } = props;
  return (
    <div>
        <input type="text" onChange={handleSearchChange} />
    </div>
  )
}

export default SearchBox