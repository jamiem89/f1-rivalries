import React from 'react';
import DriverCard from '../DriverCard/DriverCard'

function DriverGrid(){
    return (
        <section className="driver-grid">
            <div className="driver-grid__header">
                <DriverCard />
                <DriverCard />
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