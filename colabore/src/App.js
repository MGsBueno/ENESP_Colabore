import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import MyFilteringComponent from './seach';

class App extends Component {
  render() {

    var Resultados =
    ['casa','rua'
        
    ];

    return (
        <MyFilteringComponent content={Resultados} />
    );
  }
}

export default App;