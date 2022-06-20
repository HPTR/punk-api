import React from 'react'
import './Card.scss'
import {Link} from 'react-router-dom'

const Card = (props) => {

  const {
    id,
    name,
    tagline,
    description,
    image,
    abv,
    ph,
    first_brewed
  } = props;

  return (
      <Link to={"/beer/" + id} className='card'>
            <img className='card__image' src={image ? image : 'http://placehold.jp/c7c7c7/000000/100x200.png?text=No%20Image%20Found'} alt={name} />
            <div className="card__large-card-content">
              <div className="card__heading">
                <h2 className='card__name'>{name}</h2>
                <h3 className='card__tagline'>{tagline}</h3>
              </div>
                    <div className="card__stats">
              <div className="card__stat separator">
                <p className='card__stats--title'>ABV</p>
                <p className='card__stats--info'>{abv ? abv + '%' : 'Unknown'}</p>
              </div>
              <div className="card__stat separator">
                <p className='card__stats--title'>Ph</p>
                <p className='card__stats--info'>{ph ? ph : 'Unknown'}</p>
              </div>
              <div className="card__stat">
                <p className='card__stats--title'>First Brewed</p>
                <p className='card__stats--info'>{first_brewed ? first_brewed : 'Unknown'}</p>
              </div>
            </div>
                    </div>
                    <div className="card__read-more">
            Read More
                    </div>
      </Link>
  )
}

export default Card