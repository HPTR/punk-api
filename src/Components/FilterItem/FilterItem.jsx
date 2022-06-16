import React from 'react'

const FilterItem = (props) => {

    const { label, handleCheck, filter } = props;

  return (
    <div>
        <label htmlFor="filterItem" >{label}</label>
        <input value={label} type="checkbox" onChange={handleCheck} name="filterItem" data-filter={filter} />
    </div>
  )
}

export default FilterItem