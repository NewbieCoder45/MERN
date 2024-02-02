import React from 'react'
import {BrowserRouter as Router,
         Route,
         Routes,
         Redirect } from "react-router-dom"; 


//Components:
import Header from './components/Header'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

//import functions
import { getTest } from "./functions/test";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    {/* <h1>{getTest}</h1>
 */}
    </div>
  );
}
export default App;
