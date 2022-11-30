import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserDetailsPage from './pages/UserDetailsPage';


it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders Login page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});

it('renders Dashboard page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
});

it('renders User details page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserDetailsPage />, div);
});