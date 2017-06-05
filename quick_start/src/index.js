import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Sidebar />, document.getElementById('root'));
registerServiceWorker();
