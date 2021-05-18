import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HpListContainer from '../../containers/hpListContainer';
import HpDetailContainer from '../../containers/hpDetailContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          exact render={(routerProps) => <HpListContainer {...routerProps} />}
        />
        <Route
          path='/search/:name'
          exact render={(routerProps) => <HpDetailContainer {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
