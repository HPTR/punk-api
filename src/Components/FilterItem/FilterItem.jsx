import React from 'react'

const FilterItem = (props) => {

    const {label, handleCheck} = props;

  return (
    <div>
        <label htmlFor="filterItem" >{label}</label>
        <input value={label} type="checkbox" onChange={handleCheck} name="filterItem" />
    </div>
  )
}

export default FilterItem