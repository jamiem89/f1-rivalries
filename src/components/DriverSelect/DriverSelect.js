import React from 'react';

function DriverSelect(props){

    const driverListOptionsOne = props.drivers.map(driver => {
        return (
            <option
                value={driver.driverId}
                key={driver.driverId}
                data-number={driver.permanentNumber}
                data-name={driver.familyName}
                >
                {driver.familyName}
            </option>
        )
    })

    const driverListOptionsTwo = props.drivers.map(driver => {
        return (
            <option
                value={driver.driverId}
                key={driver.driverId}
                data-number={driver.permanentNumber}
                data-name={driver.familyName}
                >
                {driver.familyName}
            </option>
        )
    })

    function activeDriverChange(e) {
        // Update state to show latest drivers select
        let index = e.target.dataset.select;

        let driver = {
            id: e.target.options[e.target.selectedIndex].value,
            name: e.target.options[e.target.selectedIndex].dataset.name,
            number: e.target.options[e.target.selectedIndex].dataset.number,
            // img: `./img/${e.target.options[e.target.selectedIndex].value}.png`
        }

        let newActiveDrivers = props.activeDrivers;
        newActiveDrivers[index] = driver;
        props.setActiveDrivers(newActiveDrivers);

        // Prepare driver Data and set activedriverone state
        fetch(`https://ergast.com/api/f1/2022/drivers/${props.activeDrivers[index].id}/results.json`)
        .then(response => response.json())
        .then(data => {
            data = data.MRData.RaceTable.Races;
            let resultsArray = [];

            data.forEach(data => {
                let result = data.Results[0];
                let position = result.position;
                let points = result.points;
                let quali = result.grid;

                let resultsEntry = {
                    position,
                    points,
                    quali
                }
                resultsArray.push(resultsEntry);
            })

            if(index === '0') {
                props.setDriverDataOne(resultsArray);
            } else {
                props.setDriverDataTwo(resultsArray);
            }

        });
    }



    return (
        <div className="driver-select">
            <select name="" id="" onChange={activeDriverChange} data-select={0}>
                {driverListOptionsOne}
            </select>
            <span>VS</span>
            <select name="" id="" onChange={activeDriverChange} data-select={1}>
                {driverListOptionsTwo}
            </select>
        </div>
    )
}

export default DriverSelect;