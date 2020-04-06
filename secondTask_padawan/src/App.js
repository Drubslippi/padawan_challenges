import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Home} from './Home.js';
import './SimplePage_css.css';

// import {BrowserRouter, Route} from 'react-router-dom';

// const style = {
//   '_sober': {fontFamily: orig_fontFamily},
//   '_drunk': {fontFamily: 'Sad_jane'}
// };

const pageOne = () => {
  return <div>PageOne</div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: 'sober',
      fontStyle: '',
    };
    this.changeCondition = this.changeCondition.bind(this);
    // this.setFont = this.setFont(this);
  }

  changeCondition(newCondition, newFont) {
    this.setState({
      condition: newCondition,
      fontStyle: newFont,
    });
  }

  // setFont(origFont){
  //   this.setState({fontStyle: origFont});
  // }

  render() {
    if (this.state.fontStyle) {
      return (
        <main>
          <Switch>
            <div style={{fontFamily: this.state.fontStyle}}>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home
                    {...props}
                    onMouseOver={this.changeCondition}
                    sobriety={this.state.condition}
                  />
                )}
              />
              <Route path="/pageOne" component={pageOne} />
            </div>
          </Switch>
        </main>
      );
    } else {
      return (
        <main>
          <Switch>
            <div>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home
                    {...props}
                    onMouseOver={this.changeCondition}
                    sobriety={this.state.condition}
                  />
                )}
              />
              <Route path="/pageOne" component={pageOne} />
            </div>
          </Switch>
        </main>
      );
    }
  }
}

export default App;
