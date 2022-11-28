import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserPage from './pages/UserPage';
import UserDetailsPage from './pages/UserDetailsPage';


 
const App: React.FC  = () => {
  return (
    <Router>
      
      <Routes>
        {/* The route to the LOGIN page */}
        <Route path="/" element={<Login />} />  

        {/* The route to the DASHBOARD page */}
        <Route path="/dashboard" element={<Dashboard />} /> 

        {/* The route to the USER'S page */}
        <Route path="/user_page" element={<UserPage />} />

        {/* The route to the USER DETAILS page */} 
        <Route path="/user_details_page/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
