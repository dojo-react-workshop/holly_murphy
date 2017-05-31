import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Container from './Container'

//  const rects = [
//                     {   txt: 'React',
//                         img: './plus-sign.png',
//                         count: 0
//                     },
//                     {
//                         txt: 'Redux',
//                         img: './plus-sign.png',
//                         count: 0
//                     },
//                     {
//                         txt:'Node',
//                         img: './plus-sign.png',
//                         count: 0
//                     },
//                     {
//                         txt: 'Express',
//                         img: './plus-sign.png',
//                         count: 0
//                     }
//                 ]
                
 ReactDOM.render(
        <Container  />, 
        document.getElementById('root')
 )
registerServiceWorker();
