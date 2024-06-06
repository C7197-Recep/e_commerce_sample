import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import About from './pages/About';
import Customers from './pages/Customers';
import CustomerForm from './pages/CustomerForm';
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
            <Route path='/about' component={About} />
            <Route path='/customers' component={Customers} />
            <Route path="/add-customer" component={CustomerForm} />
            <Route path="/edit-customer/:id" component={CustomerForm} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
