import * as React from 'react';
import { hydrate } from 'react-dom';
import './index.css';
import 'typeface-roboto';


import { SimpleAppBar } from './components/SimpleAppBar'

function getAmounts(): Promise<Object> {
  return fetch('http://joseph-smith-support-frontend-config.s3-website-eu-west-1.amazonaws.com/amounts.json')
      .then(resp => resp.json());
}

getAmounts().then(amounts => {
  hydrate(<SimpleAppBar amounts={amounts}/>, document.body);
})
