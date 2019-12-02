import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import Welcome from './components/Welcome';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Welcome} />
      <Route path="/login/join" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
