import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNavBar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      
      <Provider store={store}>
        <Router>
          <div className="App">
              <AppNavBar /> 
              <Container>
                <ItemModal />
                <Route exact path="/" component={ ShoppingList} />
              </Container> 
              <div className="container">
                  <Router exact path="/register" component={Register} />
                  <Router exact path="/login" component={Login} />
                </div>
          </div>
        </Router>
      </Provider>
      
    );
  }
}

export default App;
