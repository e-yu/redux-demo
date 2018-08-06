import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import {Topics,Article} from './components/ReadList.js'

class App extends Component {
  render() {
    return (
      <Router basename='/src'>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">阅读器</h1>
          </header>
          <br/>
          <div className='container'>
            <div className = 'row'>
              <div className="col-md-12">
                <Route exact path="/" component={()=><Link to ='/list/1' className="btn btn-primary btn-lg " role="button">开始阅读</Link>}/>
                
                <Route path = "/list/:id" component = {Topics}></Route>
                <Route path={`/detail/:id`} component={Article}/>
              </div>
            </div>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
