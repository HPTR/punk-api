import React from 'react'
import FilterItem from '../FilterItem/FilterItem'

const FiltersList = (props) => {

    const { filters } = props

  return (
    <div>
        {filters.map((filter, index) => {
            return <FilterItem label={filter} key={index} />
        })}
    </div>
  )
}

export default FiltersList