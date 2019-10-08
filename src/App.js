import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <div className=''>
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />} />
        <Route
          exact
          path='/register'
          render={props => <Register {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
