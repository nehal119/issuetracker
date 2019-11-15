import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Items from './pages/Items';
import Home from './pages/Home';
import Feed from './pages/Feed';
import './styles/App.css';

import store from './store';
import { loadUser } from './actions/authActions';
import 'bootstrap/dist/css/bootstrap.min.css';

class Root extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
      <Router>
        <Switch>
            <Route exact path="/projects" component={Items} />
            <Route exact path="/" component={Home} />
            <Route exact path="/Feed" component={Feed} />
        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default Root;
