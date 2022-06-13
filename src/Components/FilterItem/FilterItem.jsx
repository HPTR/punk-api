import React from 'react'

const FilterItem = (props) => {

    const {label} = props;

  return (
    <div>
        <label for="filterItem" >{label}</label>
        <input type="checkbox" name="filterItem" />
    </div>
  )
}

export default FilterItem