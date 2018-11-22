import * as React from 'react';
// import 'typeface-roboto';
import { css } from 'react-emotion';

import Typography from '@material-ui/core/Typography';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function Amounts({amounts}: {amounts: Object}) {
  const oneOffAmounts = amounts['ONE_OFF'];
  return (<div>
    {Object.keys(oneOffAmounts).map(countryGroup =>
       // fix warning: each child in an array or iterator should have a unique "key" prop
      <div className="countryGroup" key={countryGroup}>
        <Typography variant="title" color="inherit" >
          {countryGroup}
        </Typography>
        {oneOffAmounts[countryGroup].map((amount: {value: string}, i: number) => 
          // fix warning: each child in an array or iterator should have a unique "key" prop
          <TextField defaultValue={amount.value} key={`${countryGroup}-${i}`}/>
        )}
      </div>
    )}
  </div>);
}

const save = (originalAmounts: Object) => () => {
  let data = {...originalAmounts};
  Array.from(document.getElementsByClassName('countryGroup')).forEach(el => {
    const h2 = el.querySelector('h2');
    const countryGroup = h2 ? h2.innerHTML : 'h2 not found!';
    const newAmounts: Array<{value: string, spoken: string}> = [];
    Array.from(el.querySelectorAll('input')).forEach(input => {
      newAmounts.push({value: input.value, spoken: 'fixme'});
    });
    data['ONE_OFF'][countryGroup] = newAmounts;
  })

  console.log('saving:');
  console.log(data);

  fetch('http://localhost:7000/post', {method: 'POST', body: JSON.stringify(data)})
    .then(resp => {
      console.log('response from posting data', resp);
    })
    .catch(err => {
      console.error('Bad!', err);
    });
}

export function SimpleAppBar({amounts}: {amounts: Object}) {
  return (
    <div className={css`flex-grow: 1;`}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Reader Revenue Console
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={css`padding: 24px;`}>
        <Amounts amounts={amounts} />
        <Button size="large" color="primary" onClick={save(amounts)}>Save</Button>
      </div>
    </div>
  );
}