import React, { Component } from 'react';
import './App.css';
import Home from './Home.js'
import About from './About'
import Resume from './Resume'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class App extends Component {

  allRoutes = () => {
    return(
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' render={ (renderProps) => {
                return <About history={ renderProps.history } />
              }
            } />
        <Route exact path='/resume' render={ (renderProps) => {
                return <Resume history={ renderProps.history } />
              }
            } />
      </div>
    )
  }
  render() {
    return (
      <Router>
        <div className="App">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/resume'>Resume</Link>
          {this.allRoutes()}
        </div>
      </Router>
    );
  }
}

export default App;
