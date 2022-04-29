import React from 'react';
import DriverCard from '../DriverCard/DriverCard';
import DriverTableRows from '../DriverTableRows/DriverTableRows'

function DriverGrid(props){

    const driverCards = props.activeDrivers.map(driver => {
        return (
            <DriverCard
                key={driver.name}
                id={driver.name}
                name={driver.name}
                number={driver.number}
                img={driver.img}
            />
        );
    })

    return (
        <section className="driver-grid">
            <div className="driver-grid__header">
                {driverCards}
            </div>
            <DriverTableRows driverDataOne={props.driverDataOne} driverDataTwo={props.driverDataTwo}/>
        </section>
    )
}

export default DriverGrid;