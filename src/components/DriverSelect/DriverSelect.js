import React from 'react';

function DriverSelect(props){

    const driverListOptions = props.drivers.map(driver => {
        return <option value={driver.driverId} key={driver.driverId}>{driver.familyName}</option>;
    })

    function activeDriverChange(e) {
        let id = e.target.dataset.select;
        let driver = e.target.value;
        let newActiveDrivers = props.currentActiveDrivers;
        newActiveDrivers[id] = driver;
        props.setActiveDrivers(newActiveDrivers);
    }

    return (
        <div className="driver-select">
            <select name="" id="" onChange={activeDriverChange} data-select={0}>
                {driverListOptions}
            </select>
            <span>VS</span>
            <select name="" id="" onChange={activeDriverChange} data-select={1}>
                {driverListOptions}
            </select>
        </div>
    )
}

export default DriverSelect;