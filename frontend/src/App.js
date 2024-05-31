import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './pages/Home';
import About from './pages/About';
import Customers from './pages/Customers';
import Register from './pages/Register';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  
  return (
    <>
    <Provider store={store}>
      <Router>      
        <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Customers' component={Customers} />
          <Route path='/Register' component={Register} />
        </Switch>
        <Footer />
      </Router>      
    </Provider>

    </>
  );
}

export default App;