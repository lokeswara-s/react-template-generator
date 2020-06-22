import React from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './Components/Root';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PreviewComponent from './Components/PreviewComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/">
            <Root />
          </Route>
          <Route path="/preview">
             <PreviewComponent />
          </Route>
          <Route path="/dashboard">
         
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
