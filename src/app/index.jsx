import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
                <p>Hello React!!</p>
                <Home>
                    My Home Component!
                </Home>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));