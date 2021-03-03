import { Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;