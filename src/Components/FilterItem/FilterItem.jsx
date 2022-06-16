import React from 'react'
import './FilterItem.scss'

const FilterItem = (props) => {

    const { label, handleCheck, filter } = props;

  return (
    <div className='filter-item'>
        <label className='filter-item__label' htmlFor="filterItem" >{label}</label>
        <input className='filter-item__checkbox' value={label} type="checkbox" onChange={handleCheck} name="filterItem" data-filter={filter} />
    </div>
  )
}

export default FilterItem