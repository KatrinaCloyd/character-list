import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HpListContainer from '../../containers/HpListContainer';
import HpDetailContainer from '../../containers/HpDetailContainer';
import SpellListContainer from '../../containers/SpellListContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          exact render={(routerProps) => <HpListContainer {...routerProps} />}
        />
        <Route
          path='/spells'
          exact render={(routerProps) => <SpellListContainer {...routerProps} />}
        />
        <Route
          path='/search/:name'
          exact render={(routerProps) => <HpDetailContainer {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
