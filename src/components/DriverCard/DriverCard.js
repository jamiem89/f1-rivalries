import React from 'react';

function DriverCard(props){
    return (
        <div className="driver-card">
            <div className="driver-card__img">
                <img src={`../images/driver-image--${props.driverName}`} alt="" />
            </div>
            <div className="driver-card__info">
                <span className="driver-card__number">#4</span>
                <h2 className="driver-card__title">Lando Norris</h2>
            </div>

        </div>
    )
}

export default DriverCard;