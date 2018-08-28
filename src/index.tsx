import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import { css } from 'react-emotion';

// typography
import Typography from '@material-ui/core/Typography';

// app bar
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

// form
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

// const styles = {
//   root: {
//     flexGrow: 1,
//     backgroundColor: 'green',
//   },
// };

const rootStyle = css`
  flex-grow: 1;
  background-color: green;
`;

class SwitchesGroup extends React.Component {
  state = {
    gilad: true,
    jason: false,
    antoine: true,
  };

  handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.gilad}
                onChange={this.handleChange('gilad')}
                value="gilad"
              />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.jason}
                onChange={this.handleChange('jason')}
                value="jason"
              />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.antoine}
                onChange={this.handleChange('antoine')}
                value="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    );
  }
}

function SimpleAppBar() {
  return (
    <div className={rootStyle}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Reader Revenue Console
          </Typography>
        </Toolbar>
      </AppBar>
      <SwitchesGroup />
    </div>
  );
}


ReactDOM.render(
  <SimpleAppBar></SimpleAppBar>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
