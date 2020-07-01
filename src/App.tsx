import './App.css';
import React from 'react';
import GlobalStyles from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/index'
import { Provider } from 'react-redux'
import store from './store'

const App: React.FC = () => (
    <Provider store={store}>
      <Router>
          <Routes/>
      </Router>
      <GlobalStyles />
    </Provider>
)

export default App;
