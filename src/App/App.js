import React, { Component } from 'react';
import './App.scss';
import TeamContainer from './TeamContainer';
import StudentList from './StudentList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <TeamContainer />
        <StudentList />
      </div>
    );
  }
}

export default App;
