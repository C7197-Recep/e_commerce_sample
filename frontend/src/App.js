import React from 'react';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Customers from './pages/Customers';
import Register from './pages/Register';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <>

      <Router>      
        <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/Customers' component={Customers} />
          <Route path='/Register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;