import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import './App.css';

class App extends React.Component {
  state = {
    navExpanded: false
  };

  expandCollapseNav = () => {
    this.setState({
      navExpanded: !this.state.navExpanded
    });
  }

  render() {
    const { navExpanded } = this.state;
    const appClass = navExpanded
      ? 'App nav-expanded'
      : 'App';

    return (
      <div className={appClass}>
        <Nav expanderCollapser={this.expandCollapseNav} expanded={navExpanded} />

        <Route exact path="/">
          <Home />
        </Route>
      </div>
    );
  }
}

export default App;