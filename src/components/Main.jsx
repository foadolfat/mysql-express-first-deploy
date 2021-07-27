import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingUp from './SignUp';
import Search from './Search';
import Home from './Home';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/Sign-up' component={SingUp}></Route>
        <Route exact path='/Search' component={Search}></Route>
    </Switch>
  );
}

export default Main;