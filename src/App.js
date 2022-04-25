import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Comparison from './components/Comparison/Comparison';

function App() {
    // Change this back to 'start' for prod
    const [appStage, setAppStage] = React.useState('start');
    const [drivers, setDrivers] = React.useState(null);


    React.useEffect(() => {
        fetch('http://ergast.com/api/f1/2022/drivers.json')
        .then(response => response.json())
        .then(data => {
            setDrivers(data.MRData.DriverTable.Drivers);
        });
    }, []);

  return (<>
        <Header />
        {appStage === 'start' &&  <Welcome setAppStage={setAppStage}/>}
        {appStage === 'main'
        &&
        <Comparison
            setAppStage={setAppStage}
            drivers={drivers}
        />}
    </>);
}

export default App;
