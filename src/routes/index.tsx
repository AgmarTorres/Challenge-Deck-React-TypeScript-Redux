import React from 'react';
import { Switch,  Router as ReactDOMRoute , Redirect } from 'react-router-dom';
import {Route } from 'react-router-dom'
import Decks from '../pages/Decks'
import Forms from '../pages/Forms'

const Routes: React.FC = () =>(
  <Switch>
    <Route exact path="/" component={ Forms } isPrivate  />
    <Route  path="/deck/new" component={ Forms } isPrivate  />
    <Route exact path="/decks/:id" component={ Decks } isPrivate  />
    </Switch>
)

export default Routes;
