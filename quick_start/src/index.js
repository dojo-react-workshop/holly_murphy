import React from 'react';
import ReactDOM from 'react-dom';
import ModalGallery from './ModalGallery';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<ModalGallery />, document.getElementById('root'));
registerServiceWorker();
