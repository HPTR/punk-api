import React from 'react'
import { useParams } from 'react-router-dom';
import "./BeerInfo.scss"

const BeerInfo = (props) => {

    const { beers } = props;
    const { beerId } = useParams();
    const currentBeer = beers.find(beer => Number(beer.id) === Number(beerId));

    return (
    <div className="beer-info">
        <img className='beer-info__image' src={currentBeer.image_url} alt={currentBeer.name} />
        <div class="beer-info__text">
            <h2 className="beer-info__name">{currentBeer.name}</h2>
            <h3 className="beer-info__tagline">{currentBeer.tagline}</h3>
            <p className="beer-info__description">{currentBeer.description}</p>
            <ul className="beer-info__info-list">
                <li className="beer-info__list-item">Alcohol by Volume (ABV): {currentBeer.abv}</li>
                <li className="beer-info__list-item">International Bitterness Units (IBU): {currentBeer.ibu}</li>
                <li className="beer-info__list-item">Colour: {currentBeer.ebc} EBC/ {currentBeer.srm} SRM</li>
                <li className="beer-info__list-item">Ph: {currentBeer.ph}</li>
                <ul className="beer-info__list">
                    Food pairing suggestions:
                    {currentBeer.food_pairing.map(item => <li className="beer-info__list-item">{item}</li>)}
                </ul>
            </ul>
        </div>
    </div>
  )
}

export default BeerInfo
