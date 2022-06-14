import React from 'react'
import FilterItem from '../FilterItem/FilterItem'

const FiltersList = (props) => {

    const { filters, handleCheck } = props

  return (
    <div>
        {filters.map((filter, index) => {
            return <FilterItem label={filter} key={index} handleCheck={handleCheck} />
        })}
    </div>
  )
}

export default FiltersList