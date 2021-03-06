import React from 'react'
import Card from "../Card/Card"
import './CardList.scss'

const CardList = (props) => {

  const {beers} = props

  return (
    <div className='card-list'>
      {beers.map(beer => {
        return <Card key={beer.id} id={beer.id} name={beer.name} tagline={beer.tagline} description={beer.description} image={beer.image_url} abv={beer.abv} ph={beer.ph} first_brewed={beer.first_brewed} />
      })}
    </div>
  )
}

export default CardList