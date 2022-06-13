import React from 'react'
import CardList from "../../components/CardList/CardList";

const BeerDisplay = (props) => {

  const { beers } = props;

  return (
    <div>
      <CardList beers={beers} />
    </div>
  )
}

export default BeerDisplay