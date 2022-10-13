import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserPage from './pages/UserPage';
import UserDetailsPage from './pages/UserDetailsPage';

 
const App: React.FC  = () => {
  return (
    <Router>
      <div className="container">
        <div className="small">
          <Link to='/login'>Login </Link>
          <Link to='/dashboard'>Dashboard </Link>
          <Link to='/user_page'>User page </Link>
          <Link to='/user_details_page'>User details page </Link>
        </div>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />  
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/user_page" element={<UserPage />} /> 
        <Route path="/user_details_page"element={<UserDetailsPage />} />
      </Routes>

    </Router>
  );
}

export default App;
