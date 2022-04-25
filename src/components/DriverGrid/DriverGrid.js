import React from 'react';
import DriverCard from '../DriverCard/DriverCard'

function DriverGrid(props){


    const driverCards = props.activeDrivers.map(driver => {
        return (
            <DriverCard
                key={driver.name}
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
            <div className="driver-grid__table">
                {/* <DriverData
                    title=""
                    data-one=""
                    data-two=""
                /> */}
            </div>

        </section>
    )
}

export default DriverGrid;