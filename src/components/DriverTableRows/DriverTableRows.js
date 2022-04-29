import React from 'react';

function DriverTableRows(props){

    // function driverCompare(driverOne, driverTwo) {

    // }

    function calculateDriverTotals(driver) {
        console.log(driver);
        console.log(typeof(driver));
    }

    calculateDriverTotals(props.driverDataOne);
    calculateDriverTotals(props.driverDataTwo);

    return (
        <div className="driver-table-rows">
            {/* {DriverTableRowEls} */}
        </div>
    )
}

export default DriverTableRows;