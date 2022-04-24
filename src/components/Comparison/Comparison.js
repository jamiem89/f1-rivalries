import React from 'react';
import DriverSelect from '../DriverSelect/DriverSelect'
import DriverGrid from '../DriverGrid/DriverGrid'
// import Results from '../Results/Results'
// import Footer from '../Footer/Footer'

function Comparison(props) {

    const [activeDrivers, setActiveDrivers] = React.useState([]);

    return (
        <main className="comparison">
            <DriverSelect drivers={props.drivers} setActiveDrivers={setActiveDrivers} currentActiveDrivers={activeDrivers}/>
            <DriverGrid />
            {/* <Results /> */}
            {/* <Footer /> */}
        </main>
    )
}

export default Comparison;