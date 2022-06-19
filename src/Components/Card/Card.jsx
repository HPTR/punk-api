import React from 'react'
import './Card.scss'

const Card = (props) => {

  const {
    name,
    tagline,
    description,
    image,
    abv,
    ph,
    first_brewed
  } = props;

  let truncatedDescription

  if (description[49] === ' ') {
    truncatedDescription = description.substr(0, 49) + '...';
  } else {
    truncatedDescription = description.substr(0, 50) + '...';
  }



  return (
    <div className='card'>
      <img className='card__image' src={image} alt={name} />
      <div className="card__heading">
        <h2 className='card__name'>{name}</h2>
        <h3 className='card__tagline'>{tagline}</h3>
      </div>
      {/* <p className='card__description'>{truncatedDescription}</p> */}
      <div className="card__stats">
        <div className="card__stat separator">
          <p className='card__stats--title'>ABV</p>
          <p className='card__stats--info'>{abv}</p>
        </div>
        <div className="card__stat separator">
          <p className='card__stats--title'>Ph</p>
          <p className='card__stats--info'>{ph}</p>
        </div>
        <div className="card__stat">
          <p className='card__stats--title'>First Brewed</p>
          <p className='card__stats--info'>{first_brewed}</p>
        </div>
      </div>
    </div>
  )
}

export default Card