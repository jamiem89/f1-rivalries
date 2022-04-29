import React from 'react';
// import albon from '../../img/albon.png';
// import alonso from '../../img/alonso.png';
// import bottas from '../../img/bottas.png';
// import gasly from '../../img/gasly.png';
// import hamilton from '../../img/hamilton.png';
// import hulkenberg from '../../img/hulkenberg.png';
// import latifi from '../../img/latifi.png';
// import leclerc from '../../img/leclerc.png';
// import kevin_magnussen from '../../img/kevin_magnussen.png';
// import norris from '../../img/norris.png';
// import ocon from '../../img/ocon.png';
// import perez from '../../img/perez.png';
// import ricciardo from '../../img/ricciardo.png';
// import russell from '../../img/russell.png';
// import sainz from '../../img/sainz.png';
// import mick_schumacher from '../../img/mick_schumacher.png';
// import stroll from '../../img/stroll.png';
// import tsunoda from '../../img/tsunoda.png';
// import max_verstappen from '../../img/max_verstappen.png';
// import vettel from '../../img/vettel.png';
// import zhou from '../../img/zhou.png';


import './DriverCard.css';


function DriverCard(props){

    return (
        <div className="driver-card">
            <div className="driver-card__img">
                {/* <img src={require(`../../img/${props.id}.png`)} alt="" /> */}
            </div>
            <div className="driver-card__info">
                <span className="driver-card__number">{props.number}</span>
                <h2 className="driver-card__title">{props.name}</h2>
            </div>

        </div>
    )
}

export default DriverCard;