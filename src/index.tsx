import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Button variant="contained" color="primary">Hello World</Button>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
