import React from 'react';
import { Switch,  Router as ReactDOMRoute , Redirect } from 'react-router-dom';
import {Route } from 'react-router-dom'
import Decks from '../pages/Decks'

const Routes: React.FC = () =>(
  <Switch>
    <Route path="/decks" component={ Decks } isPrivate  />
  </Switch>
)

export default Routes;
