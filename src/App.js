import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './components/input.component';
import {Container} from '@material-ui/core';


function App() {
    return (
        <Container className="App">
            <InputComponent/>
        </Container>
    );
}

export default App;
