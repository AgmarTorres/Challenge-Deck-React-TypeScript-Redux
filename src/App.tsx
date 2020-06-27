import './App.css';
import React from 'react';
import GlobalStyles from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/index'

const App: React.FC = () => (
    <>
      <Router>
          <Routes/>
      </Router>
      <GlobalStyles />
    </>
)

export default App;
