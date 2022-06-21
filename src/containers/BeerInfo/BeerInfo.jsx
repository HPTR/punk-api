import React from 'react'
import { useParams, Link } from 'react-router-dom';
import "./BeerInfo.scss"
import back from "../../assets/images/back.png";

const BeerInfo = (props) => {

    const { beers } = props;
    const { beerId } = useParams();
    const currentBeer = beers.find(beer => Number(beer.id) === Number(beerId));

    return (
    <div className="beer-info">
        <Link to="/"><div className='beer-info__back'><img className="beer-info__back--image" src={back} alt="Back" />Back</div></Link>
        <img className='beer-info__image' src={currentBeer.image_url} alt={currentBeer.name} />
        <div className="beer-info__text">
            <h2 className="beer-info__name">{currentBeer.name}</h2>
            <h3 className="beer-info__tagline">{currentBeer.tagline}</h3>
            <p className="beer-info__description">{currentBeer.description}</p>
            <ul className="beer-info__info-list">
                <li className="beer-info__list-item">
                    <div className="beer-info__list-item--name">Alcohol by Volume (ABV)</div>
                    <div className="beer-info__list-item--info">{currentBeer.abv}</div>
                </li>
                <li className="beer-info__list-item">
                    <div className="beer-info__list-item--name">International Bitterness Units (IBU)</div>
                    <div className="beer-info__list-item--info">{currentBeer.ibu}</div>
                </li>
                <li className="beer-info__list-item">
                    <div className="beer-info__list-item--name">Colour</div>
                    <div className="beer-info__list-item--info">{currentBeer.ebc} EBC/{currentBeer.srm} SRM</div>
                </li>
                <li className="beer-info__list-item">
                    <div className="beer-info__list-item--name">Ph</div>
                    <div className="beer-info__list-item--info">{currentBeer.ph}</div>
                </li>
                <ul className="beer-info__list">
                    Food pairing suggestions
                    {currentBeer.food_pairing.map((item, index) => <li key={index} className="beer-info__list-item">{item}</li>)}
                </ul>
            </ul>
        </div>
    </div>
  )
}

export default BeerInfo
