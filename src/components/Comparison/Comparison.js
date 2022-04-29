import React from 'react';
import DriverSelect from '../DriverSelect/DriverSelect'
import DriverGrid from '../DriverGrid/DriverGrid'
// import Results from '../Results/Results'
// import Footer from '../Footer/Footer'

function Comparison(props) {

    const [activeDrivers, setActiveDrivers] = React.useState([{},{}]);
    const [driverDataOne, setDriverDataOne] = React.useState({});
    const [driverDataTwo, setDriverDataTwo] = React.useState({});


    return (
        <main className="comparison">
            <DriverSelect
                drivers={props.drivers}
                activeDrivers={activeDrivers}
                setActiveDrivers={setActiveDrivers}
                setDriverDataOne={setDriverDataOne}
                setDriverDataTwo={setDriverDataTwo}
            />
            <DriverGrid
                activeDrivers={activeDrivers}
                driverDataOne={driverDataOne}
                driverDataTwo={driverDataTwo}
            />
            {/* <Results /> */}
            {/* <Footer /> */}
        </main>
    )
}

export default Comparison;