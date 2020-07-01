import React from 'react';
import './App.css';

import GlobalStyles from './styles/global';

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './routes/index'
import  store from './store'

const App: React.FC = () => {

 return(
    <Provider store={store}>
      <Router>
          <Routes/>
      </Router>
      <GlobalStyles />
    </Provider>
  )
}

export default App;
