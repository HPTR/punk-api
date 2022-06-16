import React from 'react'
import './Card.scss'

const Card = (props) => {

  const {
    name,
    tagline,
    description,
    image,
    abv,
    ph
  } = props;

  return (
    <div className='card'>
      <img className='card__image' src={image} alt={name} />
      <h2 className='card__name'>{name}</h2>
      <h3 className='card__tagline'>{tagline}</h3>
      <p className='card__description'>{description}</p>
      <p className='card__abv'>{abv}</p>
      <p>{ph}</p>
    </div>
  )
}

export default Card