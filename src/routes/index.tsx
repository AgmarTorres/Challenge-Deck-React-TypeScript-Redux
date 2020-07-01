import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Decks from '../pages/Decks'
import Forms from '../pages/Forms'

const Routes: React.FC = () =>(
  <Switch>
    <Route exact path="/" component={ Forms } isPrivate  />
    <Route  path="/deck/new" component={ Forms } isPrivate  />
    <Route exact path="/deck/:id" component={ Decks } isPrivate  />
    <Redirect to="/" />
  </Switch>
)

export default Routes;
