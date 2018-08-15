import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Content, Detail } from './components/Container/index'

class App extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">阅读器</h1>
          </header>
          <br />
          <div className='container'>
            <div className='row'>
              <div className="col-md-12">
                <Route exact path="/" component={() => <Link to='/list/1' className="btn btn-primary btn-lg " role="button">开始阅读</Link>} />
                <Route path = '/list/:id' component = { Content }/>
                <Route path = '/detail/:num/:id' component = { Detail }/>
                
              </div>
            </div>
          </div>
                
        </div>
      </Router>
    );
  }
}

export default App;
