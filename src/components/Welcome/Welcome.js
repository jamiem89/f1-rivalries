import React from 'react';

function Welcome(props) {

    function beginApp() {
        props.setAppStage('main');
    }

    return (
        <section className="welcome">
            <h1>Welcome</h1>
            <p>This is the welcome text</p>
            <button onClick={beginApp}>Let's go</button>
        </section>
    )
}

export default Welcome;