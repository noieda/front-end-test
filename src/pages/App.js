
import React from 'react';
import './App.css';
// import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './Login';
import DashboardPage from './Dashboard';

class App extends React.Component {

  // constructor() {
  //   super()
  // }

  render() {
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
        </Routes>
     </div>
    )
  }
}

export default App;
