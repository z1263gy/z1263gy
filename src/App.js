import React from 'react';
import Coins from './Coins.js'
import logo from './jarrod.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    BITCOIN STANDINGS
                </div>
                <Coins />
            </header>

        </div>
    );
}

export default App;
