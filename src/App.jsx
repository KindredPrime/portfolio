import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav/index';
import Home from './Home/index';
import ProjectsPage from './ProjectsPage/index'
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

        <Route path="/projects">
          <ProjectsPage />
        </Route>
      </div>
    );
  }
}

export default App;