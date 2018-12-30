import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RegForm from './components/container/RegForm'
import LoginForm from './components/container/LoginForm'
import AuthContainer from './components/container/AuthContainer'
import QuoteContainer from './components/container/QuoteContainer'
import MessageStatus from './components/container/StatusMessageContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <MessageStatus />
                <QuoteContainer />
                <AuthContainer />
                <LoginForm />
                <RegForm />                
            </div>
        );
    }
}


export default App;
