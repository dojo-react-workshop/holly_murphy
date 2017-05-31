import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Container from './Container'

              
 ReactDOM.render(
        <Container  />, 
        document.getElementById('root')
 )
registerServiceWorker();
