import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RegForm from './components/container/RegForm'
import LoginForm from './components/container/LoginForm'
import AuthContainer from './components/container/AuthContainer'
import QuoteContainer from './components/container/QuoteContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>                
                <AuthContainer />
                <QuoteContainer />
                <LoginForm />
                <RegForm />
                
            </div>
        );
    }
}


export default App;
