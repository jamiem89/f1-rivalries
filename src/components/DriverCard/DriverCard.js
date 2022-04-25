import React from 'react';
import './DriverCard.css';

function DriverCard(props){

    return (
        <div className="driver-card">
            <div className="driver-card__img">
                <img src={props.img} alt="" />
            </div>
            <div className="driver-card__info">
                <span className="driver-card__number">{props.number}</span>
                <h2 className="driver-card__title">{props.name}</h2>
            </div>

        </div>
    )
}

export default DriverCard;