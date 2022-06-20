import React from 'react'
import FilterItem from '../FilterItem/FilterItem'
import './FiltersList.scss'

const FiltersList = (props) => {

    const { filterLabels, handleCheck } = props

  return (
    <div className='filters-list'>
        {filterLabels.map((filter, index) => {
            return <FilterItem label={filter.label} key={index} handleCheck={handleCheck} filter={filter.filter} />
        })}
    </div>
  )
}

export default FiltersList