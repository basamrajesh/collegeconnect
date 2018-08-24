import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
