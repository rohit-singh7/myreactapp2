import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './Nav';
import About from './About';
import Profile from './Profile';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
     <h1>Welcome</h1>
     <Nav />
   <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/profile" component={Profile} />
     </Switch>
    </div>
    </Router>
  );
}


const Home= () => (
  <div>
    <h1> Home Page</h1>
  </div>
);
export default App;
