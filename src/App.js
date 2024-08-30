import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
